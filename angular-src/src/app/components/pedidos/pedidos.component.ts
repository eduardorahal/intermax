import { Component, OnInit, ViewChild } from '@angular/core';
import { GetService } from '../../services/get.service';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CadastroGuard } from '../../guards/cadastro.guard';
import { AuthService } from '../../services/auth.service';
declare var $:any;

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  consulta_cliente: any;
  clientes: any;
  clientePedido: any;
  prodArr = [];
  produtos: any;
  consulta_produto: any;
  categoria: any;
  precos: any;
  indicePrecos: any;
  centro = "";
  pagamento = "";
  imposto = "";
  produto_tmp = [];
  vlrTotal: any;
  liberaProduto = false;
  totalGeral = 0;

  constructor(
    private getService: GetService,
    private postService: PostService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private cadastroGuard: CadastroGuard,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    this.getService.getProdutos().then((produto) => {
      this.produtos = produto;
    });

    this.prodArr[0] = {
      produto: "",
      vlrUnit: "",
      quant: "",
      medida: "",
      desconto: "",
      vlrTotal: ""
    };

  }

  consultaCliente(){
    const consulta_cliente = {
      consulta_cliente: this.consulta_cliente,
    }
      this.postService.consultaClientes(consulta_cliente).subscribe((cliente) => {
        this.clientes = cliente;
      });
    $("#select_cliente").modal('show');
  }

  selectCliente(cliente){
    this.clientePedido = cliente;
    $("#select_cliente").modal('hide');
    document.getElementById("consulta_cliente").setAttribute("disabled", "disabled");
    this.categoria = this.clientePedido.categoria;
    this.centro = "";
  }

  alteraCD(){
    if (this.centro == "cd1"){
      if (this.clientePedido.categoria == "Revenda" || this.clientePedido.categoria == "Varejo"){
        this.indicePrecos = 0;
        this.liberaProduto = true;
        this.alteraCentro();
      }
      if (this.clientePedido.categoria == "Engenharia"){
        this.indicePrecos = 2;
        this.liberaProduto = true;
        this.alteraCentro();
      }
      if (this.clientePedido.categoria == "Home Center" || this.clientePedido.categoria == "Key Account"){
        this.indicePrecos = 4;
        this.liberaProduto = true;
        this.alteraCentro();
      }
      if (this.clientePedido.categoria == "Distribuidor"){
        this.indicePrecos = 6;
        this.liberaProduto = true;
        this.alteraCentro();
      }
    }
    if (this.centro == "cd3"){
      if (this.clientePedido.categoria == "Revenda" || this.clientePedido.categoria == "Varejo"){
        this.indicePrecos = 1;
        this.liberaProduto = true;
        this.alteraCentro();
      }
      if (this.clientePedido.categoria == "Engenharia"){
        this.indicePrecos = 3;
        this.liberaProduto = true;
        this.alteraCentro();
      }
      if (this.clientePedido.categoria == "Home Center" || this.clientePedido.categoria == "Key Account"){
        this.indicePrecos = 5;
        this.liberaProduto = true;
        this.alteraCentro();
      }
      if (this.clientePedido.categoria == "Distribuidor"){
        this.indicePrecos = 7;
        this.liberaProduto = true;
        this.alteraCentro();
      }
    }
  }

  limpaCliente(){
    this.clientePedido = null;
    document.getElementById("consulta_cliente").removeAttribute("disabled");
    this.precos.length = 0;
    this.indicePrecos = null;
    this.centro = null;
    this.categoria = null;
  }

  adicionaProduto(prod_tmp){
    const prodArr_tmp = this.prodArr.length;
    this.prodArr[prodArr_tmp] = {
      produto: "",
      vlrUnit: "",
      quant: "",
      medida: "",
      desconto: "",
      vlrTotal: ""
    };
  }

  removeProduto(index){
    this.prodArr.splice(index,1);
    this.somaTotal();
  }

  selecionaProduto(index){
    for (var i=0; i<this.produtos.length; i++){
      if (this.produtos[i]._id == this.prodArr[index].produto){
        this.produto_tmp[index] = this.produtos[i];
        this.prodArr[index].vlrUnit = this.produto_tmp[index].precos[this.indicePrecos].preco;
        var nome = "prodArr" + index;
        if (this.produto_tmp[index].tipoProduto == "Piso"){
          var op = document.getElementById(nome).getElementsByTagName("option");
          for (var j = 0; j < 4; j++){
            if (op[j].value == "linear"){
              op[j].disabled = true;
            }
            else {
              op[j].disabled = false;
            }
          }
        }
        if (this.produto_tmp[index].tipoProduto == "Rodapé"){
          var op = document.getElementById(nome).getElementsByTagName("option");
          for (var j = 0; j < 4; j++){
            if (op[j].value == "quadrado" || op[j].value == "pallet"){
              op[j].disabled = true;
            }
            else {
              op[j].disabled = false;
            }
          }
        }
        break;
      }
    }    
  }

  alteraCentro(){
    if (this.prodArr.length == 1 && this.prodArr[0].produto == ""){
    } 
    else {
      for (var i=0; i<this.prodArr.length; i++){
        this.prodArr[i].vlrUnit = this.produto_tmp[i].precos[this.indicePrecos].preco;
        this.insereQuant(i);
      }
    }
  }

  somaTotal(){
    this.totalGeral = 0;
    for (var i=0; i<this.prodArr.length; i++){
        this.totalGeral = this.totalGeral + parseFloat(this.prodArr[i].vlrTotal.replace(/,/, '.'));
    }
  }

  preencheTotal(index, j){
    if (this.produto_tmp[index].descontos[j].tipo_new == "desc1"){
      this.prodArr[index].desconto = this.produto_tmp[index].precos[this.indicePrecos].desc1;
      this.vlrTotal = parseFloat(this.prodArr[index].vlrUnit.replace(/,/, '.')) * (1 - parseFloat(this.prodArr[index].desconto.replace(/,/, '.'))/100) * this.produto_tmp[index].quant;
      this.vlrTotal = parseFloat(this.vlrTotal).toFixed(2);
      this.vlrTotal = this.vlrTotal.toString();
      this.prodArr[index].vlrTotal = this.vlrTotal.replace('.', ',');
      this.somaTotal();
    }
    if (this.produto_tmp[index].descontos[j].tipo_new == "desc2"){
     this.prodArr[index].desconto = this.produto_tmp[index].precos[this.indicePrecos].desc2;
      this.vlrTotal = parseFloat(this.prodArr[index].vlrUnit.replace(/,/, '.')) * (1 - parseFloat(this.prodArr[index].desconto.replace(/,/, '.'))/100) * this.produto_tmp[index].quant;
      this.vlrTotal = parseFloat(this.vlrTotal).toFixed(2);
      this.vlrTotal = this.vlrTotal.toString();
      this.prodArr[index].vlrTotal = this.vlrTotal.replace('.', ',');
      this.somaTotal();
    }
    if (this.produto_tmp[index].descontos[j].tipo_new == "desc3"){
      this.prodArr[index].desconto = this.produto_tmp[index].precos[this.indicePrecos].desc3;
      this.vlrTotal = parseFloat(this.prodArr[index].vlrUnit.replace(/,/, '.')) * (1 - parseFloat(this.prodArr[index].desconto.replace(/,/, '.'))/100) * this.produto_tmp[index].quant;
      this.vlrTotal = parseFloat(this.vlrTotal).toFixed(2);
      this.vlrTotal = this.vlrTotal.toString();
      this.prodArr[index].vlrTotal = this.vlrTotal.replace('.', ',');
      this.somaTotal();
    }
    if (this.produto_tmp[index].descontos[j].tipo_new == "desc4"){
      this.prodArr[index].desconto = this.produto_tmp[index].precos[this.indicePrecos].desc4;
      this.vlrTotal = parseFloat(this.prodArr[index].vlrUnit.replace(/,/, '.')) * (1 - parseFloat(this.prodArr[index].desconto.replace(/,/, '.'))/100) * this.produto_tmp[index].quant;
      this.vlrTotal = parseFloat(this.vlrTotal).toFixed(2);
      this.vlrTotal = this.vlrTotal.toString();
      this.prodArr[index].vlrTotal = this.vlrTotal.replace('.', ',');
      this.somaTotal(); 
    }
  }

  insereDesconto(index){
    if (this.prodArr[index].medida == "pallet"){
      this.produto_tmp[index].quant = parseFloat(this.prodArr[index].quant.replace(/,/, '.')) * parseFloat(this.produto_tmp[index].metroPallet.replace(/,/, '.'));
      for (var j=3; j>=0; j--){
        if (this.produto_tmp[index].quant >= this.produto_tmp[index].descontos[j].quant_new){
            this.produto_tmp[index].tipo = this.produto_tmp[index].descontos[j].tipo_new;
            this.preencheTotal(index, j);
            break;
        } else {
          if (j == 0){
            this.prodArr[index].desconto = "0,00";
            this.vlrTotal = parseFloat(this.prodArr[index].vlrUnit.replace(/,/, '.')) * this.produto_tmp[index].quant;
            this.vlrTotal = parseFloat(this.vlrTotal).toFixed(2);
            this.vlrTotal = this.vlrTotal.toString();
            this.prodArr[index].vlrTotal = this.vlrTotal.replace('.', ',');
            this.somaTotal();
          }
        }
      }
    }
    if (this.prodArr[index].medida == "caixa"){
      this.produto_tmp[index].quant = parseFloat(this.prodArr[index].quant.replace(/,/, '.')) * parseFloat(this.produto_tmp[index].metroCx.replace(/,/, '.'));
      for (var j=3; j>=0; j--){
        if (this.produto_tmp[index].quant >= this.produto_tmp[index].descontos[j].quant_new){
            this.produto_tmp[index].tipo = this.produto_tmp[index].descontos[j].tipo_new;
            this.preencheTotal(index, j);
            break;
        } else {
          if (j == 0){
            this.prodArr[index].desconto = "0,00";
            this.vlrTotal = parseFloat(this.prodArr[index].vlrUnit.replace(/,/, '.')) * this.produto_tmp[index].quant;
            this.vlrTotal = parseFloat(this.vlrTotal).toFixed(2);
            this.vlrTotal = this.vlrTotal.toString();
            this.prodArr[index].vlrTotal = this.vlrTotal.replace('.', ',');
            this.somaTotal();
          }
        }
      }
    }
    if (this.prodArr[index].medida == "linear" || this.prodArr[index].medida == "quadrado"){
      this.produto_tmp[index].quant = this.prodArr[index].quant;
      for (var j=3; j>=0; j--){
        if (this.produto_tmp[index].quant >= this.produto_tmp[index].descontos[j].quant_new){
            this.produto_tmp[index].tipo = this.produto_tmp[index].descontos[j].tipo_new;
            this.preencheTotal(index, j);
            break;
        } else {
          if (j == 0){
            this.prodArr[index].desconto = "0,00";
            this.vlrTotal = parseFloat(this.prodArr[index].vlrUnit.replace(/,/, '.')) * this.produto_tmp[index].quant;
            this.vlrTotal = parseFloat(this.vlrTotal).toFixed(2);
            this.vlrTotal = this.vlrTotal.toString();
            this.prodArr[index].vlrTotal = this.vlrTotal.replace('.', ',');
            this.somaTotal();
          }
        }
      }
    }
  }

  insereQuant(index){
    if (this.prodArr[index].quant != "" && this.prodArr[index].medida != ""){
      for (var i=0; i<5; i++){
        if (i == 4){
          this.insereDesconto(index);
        } else {
          if (this.produto_tmp[index].descontos[i].quant != "" && this.produto_tmp[index].descontos[i].medida != ""){
            if (this.produto_tmp[index].descontos[i].medida == "pallet"){
              this.produto_tmp[index].descontos[i].quant_new = parseFloat(this.produto_tmp[index].descontos[i].quant.replace(/,/, '.')) * parseFloat(this.produto_tmp[index].metroPallet.replace(/,/, '.'));
              this.produto_tmp[index].descontos[i].tipo_new = this.produto_tmp[index].descontos[i].tipo;
            }
            if (this.produto_tmp[index].descontos[i].medida == "caixa"){
              this.produto_tmp[index].descontos[i].quant_new = parseFloat(this.produto_tmp[index].descontos[i].quant) * parseFloat(this.produto_tmp[index].metroCx);
              this.produto_tmp[index].descontos[i].tipo_new = this.produto_tmp[index].descontos[i].tipo;
            }
            if (this.produto_tmp[index].descontos[i].medida == "linear" || this.produto_tmp[index].descontos[i].medida == "quadrado"){
              this.produto_tmp[index].descontos[i].quant_new = parseFloat(this.produto_tmp[index].descontos[i].quant);
              this.produto_tmp[index].descontos[i].tipo_new = this.produto_tmp[index].descontos[i].tipo;
            }
          }
          else {

          }
        }
      }
    }
  }

}
