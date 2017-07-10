import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
    tipoProduto = "";
    nomeProduto: String;
    descricaoProduto: String;
    codigoProduto: String;
    linhaProduto: String;
    medicaoProduto = "";
    capaProduto: String;
    compProduto: String;
    largProduto: String;
    espProduto: String;
    unidCx: String;
    cxPallet: String;
    metroCx: String;
    metroPallet: String;
    preco_rev_cd1: String;
    desc1_rev_cd1: String;
    desc2_rev_cd1: String;
    desc3_rev_cd1: String;
    desc4_rev_cd1: String;
    preco_rev_cd3: String;
    desc1_rev_cd3: String;
    desc2_rev_cd3: String;
    desc3_rev_cd3: String;
    desc4_rev_cd3: String;
    preco_eng_cd1: String;
    desc1_eng_cd1: String;
    desc2_eng_cd1: String;
    desc3_eng_cd1: String;
    desc4_eng_cd1: String;
    preco_eng_cd3: String;
    desc1_eng_cd3: String;
    desc2_eng_cd3: String;
    desc3_eng_cd3: String;
    desc4_eng_cd3: String;
    preco_hcka_cd1: String;
    desc1_hcka_cd1: String;
    desc2_hcka_cd1: String;
    desc3_hcka_cd1: String;
    desc4_hcka_cd1: String;
    preco_hcka_cd3: String;
    desc1_hcka_cd3: String;
    desc2_hcka_cd3: String;
    desc3_hcka_cd3: String;
    desc4_hcka_cd3: String;
    preco_dist_cd1: String;
    desc1_dist_cd1: String;
    desc2_dist_cd1: String;
    desc3_dist_cd1: String;
    desc4_dist_cd1: String;
    preco_dist_cd3: String;
    desc1_dist_cd3: String;
    desc2_dist_cd3: String;
    desc3_dist_cd3: String;
    desc4_dist_cd3: String;
    precos = [];

    produtos: any;
    linhas = [];
    editDesconto = [];
    desc_nome = "nomeProduto";
    desc_tipo = "tipoProduto";
    desc_linha = "linhaProduto";
    select_field = null;
    select_desc = null;
    cons_nomeProduto = "";
    cons_tipoProduto = "";
    cons_linhaProduto = "";
    disable_select = false;

    quant_desc1 = "";
    medida_desc1 = "";
    quant_desc2 = "";
    medida_desc2 = "";
    quant_desc3 = "";
    medida_desc3 = "";
    quant_desc4 = "";
    medida_desc4 = "";
    descontos = [];

    editarProduto = "";
    produtoEdit: any;

    estoqueEdit: any;
    quant_estoque: any;
    medida_estoque: any;


  constructor(
    private getService: GetService,
    private postService: PostService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    
    this.getService.getProdutos().then((produto) => {
      this.produtos = produto;
      for (var i = 0; i < produto.length; i++){
        if(this.linhas.indexOf(produto[i].linhaProduto) == -1) {
          this.linhas.push(produto[i].linhaProduto);
        }
      };
    });

  }

  agrupa(){

    const rev_cd1_tmp = {
      centro: "cd1",
      categoria: "Revenda Varejo",
      preco: this.preco_rev_cd1,
      desc1: this.desc1_rev_cd1,
      desc2: this.desc2_rev_cd1,
      desc3: this.desc3_rev_cd1,
      desc4: this.desc4_rev_cd1
    }
    this.precos.push(rev_cd1_tmp);

    const rev_cd3_tmp = {
      centro: "cd3",
      categoria: "Revenda Varejo",
      preco: this.preco_rev_cd3,
      desc1: this.desc1_rev_cd3,
      desc2: this.desc2_rev_cd3,
      desc3: this.desc3_rev_cd3,
      desc4: this.desc4_rev_cd3
    }
    this.precos.push(rev_cd3_tmp);

    const eng_cd1_tmp = {
      centro: "cd1",
      categoria: "Engenharia",
      preco: this.preco_eng_cd1,
      desc1: this.desc1_eng_cd1,
      desc2: this.desc2_eng_cd1,
      desc3: this.desc3_eng_cd1,
      desc4: this.desc4_eng_cd1
    }
    this.precos.push(eng_cd1_tmp);

    const eng_cd3_tmp = {
      centro: "cd3",
      categoria: "Engenharia",
      preco: this.preco_eng_cd3,
      desc1: this.desc1_eng_cd3,
      desc2: this.desc2_eng_cd3,
      desc3: this.desc3_eng_cd3,
      desc4: this.desc4_eng_cd3
    }
    this.precos.push(eng_cd3_tmp);

    const hcka_cd1_tmp = {
      centro: "cd1",
      categoria: "Home Center Key Account",
      preco: this.preco_hcka_cd1,
      desc1: this.desc1_hcka_cd1,
      desc2: this.desc2_hcka_cd1,
      desc3: this.desc3_hcka_cd1,
      desc4: this.desc4_hcka_cd1
    }
    this.precos.push(hcka_cd1_tmp);

    const hcka_cd3_tmp = {
      centro: "cd3",
      categoria: "Home Center Key Account",
      preco: this.preco_hcka_cd3,
      desc1: this.desc1_hcka_cd3,
      desc2: this.desc2_hcka_cd3,
      desc3: this.desc3_hcka_cd3,
      desc4: this.desc4_hcka_cd3
    }
    this.precos.push(hcka_cd3_tmp);

    const dist_cd1_tmp = {
      centro: "cd1",
      categoria: "Distribuidor",
      preco: this.preco_dist_cd1,
      desc1: this.desc1_dist_cd1,
      desc2: this.desc2_dist_cd1,
      desc3: this.desc3_dist_cd1,
      desc4: this.desc4_dist_cd1
    }
    this.precos.push(dist_cd1_tmp);

    const dist_cd3_tmp = {
      centro: "cd3",
      categoria: "Distribuidor",
      preco: this.preco_dist_cd3,
      desc1: this.desc1_dist_cd3,
      desc2: this.desc2_dist_cd3,
      desc3: this.desc3_dist_cd3,
      desc4: this.desc4_dist_cd3
    }
    this.precos.push(dist_cd3_tmp);

  }

  adicionaProduto(){
    this.agrupa();
    const Produto = {
      tipoProduto: this.nomeProduto,
      nomeProduto: this.nomeProduto,
      descricaoProduto: this.descricaoProduto,
      codigoProduto: this.codigoProduto,
      linhaProduto: this.linhaProduto,
      medicaoProduto: this.medicaoProduto,
      capaProduto: this.capaProduto,
      compProduto: this.compProduto,
      largProduto: this.largProduto,
      espProduto: this.espProduto,
      unidCx: this.unidCx,
      cxPallet: this.cxPallet,
      metroCx: this.metroCx,
      metroPallet: this.metroPallet,
      precos: this.precos,
    }
    this.postService.adicionaProduto(Produto).subscribe(data => {
        if(data.success){
          this.flashMessage.show('Produto Cadastrado com Sucesso', {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/produtos']);
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
          this.router.navigate(['/produtos']);
        }
      });
  }

  funcao_desc(field, value){
    this.select_field = field;
    this.select_desc = value;
    this.disable_select = true;
    if (field = "nomeProduto"){
      for (var i = 0; i < this.produtos.length; i++){
        if(this.produtos[i]._id == value) {
          this.quant_desc1 = this.produtos[i].quant_desc1;
          this.medida_desc1 = this.produtos[i].medida_desc1;
          this.quant_desc2 = this.produtos[i].quant_desc2;
          this.medida_desc2 = this.produtos[i].medida_desc2;
          this.quant_desc3 = this.produtos[i].quant_desc3;
          this.medida_desc3 = this.produtos[i].medida_desc3;
          this.quant_desc4 = this.produtos[i].quant_desc4;
          this.medida_desc4 = this.produtos[i].medida_desc4;
        }
      };
    }
  }

  limpaBuscaDesconto(){
    this.disable_select = false;
    this.select_field = null;
    this.select_desc = null;
    this.cons_nomeProduto = "";
    this.cons_tipoProduto = "";
    this.cons_linhaProduto = "";
    this.quant_desc1 = "";
    this.medida_desc1 = "";
    this.quant_desc2 = "";
    this.medida_desc2 = "";
    this.quant_desc3 = "";
    this.medida_desc3 = "";
    this.quant_desc4 = "";
    this.medida_desc4 = "";
  }

  funcao_estoque(){
    this.estoqueEdit = this.produtos[this.cons_nomeProduto];
    this.disable_select = true;
    if (this.estoqueEdit.medidaEstoque){
      this.medida_estoque = this.estoqueEdit.medidaEstoque
    } else {
      this.medida_estoque = "";
    }
    if (this.estoqueEdit.quantEstoque){
      this.quant_estoque = this.estoqueEdit.quantEstoque
    } else {
      this.quant_estoque = "";
    }
  }

  limpaBuscaEstoque(){
    this.disable_select = false;
    this.cons_nomeProduto = "";
  }

  modificaEstoque(){
    const Estoque = {
      _id: this.estoqueEdit._id,
      quantEstoque: this.quant_estoque,
      medidaEstoque: this.medida_estoque,
    }
    this.postService.modificaEstoque(Estoque).subscribe(data => {
      if(data.success){
        this.limpaBuscaEstoque();
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
        this.router.navigate(['/produtos']);
      } else {
        this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
      }
    });
  }
  
  agrupaDescontos(){

    const desc1_tmp = {
      tipo: "desc1",
      quant: this.quant_desc1,
      medida: this.medida_desc1,
    }
    this.descontos.push(desc1_tmp);

    const desc2_tmp = {
      tipo: "desc2",
      quant: this.quant_desc2,
      medida: this.medida_desc2,
    }
    this.descontos.push(desc2_tmp);

    const desc3_tmp = {
      tipo: "desc3",
      quant: this.quant_desc3,
      medida: this.medida_desc3,
    }
    this.descontos.push(desc3_tmp);

    const desc4_tmp = {
      tipo: "desc4",
      quant: this.quant_desc4,
      medida: this.medida_desc4,
    }
    this.descontos.push(desc4_tmp);

  }

  modificaDesconto(){
    this.agrupaDescontos();
    const Desconto = {
      select_field: this.select_field,
      select_desc: this.select_desc,
      descontos: this.descontos,
    }
    this.postService.modificaDesconto(Desconto).subscribe(data => {
        if(data.success){
          this.limpaBuscaDesconto();
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/produtos']);
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
        }
      });
  }

  editProduto(){
    this.produtoEdit = this.produtos[this.editarProduto];
    this.tipoProduto = this.produtoEdit.tipoProduto;
    this.nomeProduto = this.produtoEdit.nomeProduto;
    this.descricaoProduto = this.produtoEdit.descricaoProduto;
    this.codigoProduto = this.produtoEdit.codigoProduto;
    this.linhaProduto = this.produtoEdit.linhaProduto;
    this.medicaoProduto = this.produtoEdit.medicaoProduto;
    this.capaProduto = this.produtoEdit.capaProduto;
    this.compProduto = this.produtoEdit.compProduto;
    this.largProduto = this.produtoEdit.largProduto;
    this.espProduto = this.produtoEdit.espProduto;
    this.unidCx = this.produtoEdit.unidCx;
    this.cxPallet = this.produtoEdit.cxPallet;
    this.metroCx = this.produtoEdit.metroCx;
    this.metroPallet = this.produtoEdit.metroPallet;
    this.preco_rev_cd1 = this.produtoEdit.precos[0].preco;
    this.desc1_rev_cd1 = this.produtoEdit.precos[0].desc1;
    this.desc2_rev_cd1 = this.produtoEdit.precos[0].desc2;
    this.desc3_rev_cd1 = this.produtoEdit.precos[0].desc3;
    this.desc4_rev_cd1 = this.produtoEdit.precos[0].desc4;
    this.preco_rev_cd3 = this.produtoEdit.precos[1].preco;
    this.desc1_rev_cd3 = this.produtoEdit.precos[1].desc1;
    this.desc2_rev_cd3 = this.produtoEdit.precos[1].desc2;
    this.desc3_rev_cd3 = this.produtoEdit.precos[1].desc3;
    this.desc4_rev_cd3 = this.produtoEdit.precos[1].desc4;
    this.preco_eng_cd1 = this.produtoEdit.precos[2].preco;
    this.desc1_eng_cd1 = this.produtoEdit.precos[2].desc1;
    this.desc2_eng_cd1 = this.produtoEdit.precos[2].desc2;
    this.desc3_eng_cd1 = this.produtoEdit.precos[2].desc3;
    this.desc4_eng_cd1 = this.produtoEdit.precos[2].desc4;
    this.preco_eng_cd3 = this.produtoEdit.precos[3].preco;
    this.desc1_eng_cd3 = this.produtoEdit.precos[3].desc1;
    this.desc2_eng_cd3 = this.produtoEdit.precos[3].desc2;
    this.desc3_eng_cd3 = this.produtoEdit.precos[3].desc3;
    this.desc4_eng_cd3 = this.produtoEdit.precos[3].desc4;
    this.preco_hcka_cd1 = this.produtoEdit.precos[4].preco;
    this.desc1_hcka_cd1 = this.produtoEdit.precos[4].desc1;
    this.desc2_hcka_cd1 = this.produtoEdit.precos[4].desc2;
    this.desc3_hcka_cd1 = this.produtoEdit.precos[4].desc3;
    this.desc4_hcka_cd1 = this.produtoEdit.precos[4].desc4;
    this.preco_hcka_cd3 = this.produtoEdit.precos[5].preco;
    this.desc1_hcka_cd3 = this.produtoEdit.precos[5].desc1;
    this.desc2_hcka_cd3 = this.produtoEdit.precos[5].desc2;
    this.desc3_hcka_cd3 = this.produtoEdit.precos[5].desc3;
    this.desc4_hcka_cd3 = this.produtoEdit.precos[5].desc4;
    this.preco_dist_cd1 = this.produtoEdit.precos[6].preco;
    this.desc1_dist_cd1 = this.produtoEdit.precos[6].desc1;
    this.desc2_dist_cd1 = this.produtoEdit.precos[6].desc2;
    this.desc3_dist_cd1 = this.produtoEdit.precos[6].desc3;
    this.desc4_dist_cd1 = this.produtoEdit.precos[6].desc4;
    this.preco_dist_cd3 = this.produtoEdit.precos[7].preco;
    this.desc1_dist_cd3 = this.produtoEdit.precos[7].desc1;
    this.desc2_dist_cd3 = this.produtoEdit.precos[7].desc2;
    this.desc3_dist_cd3 = this.produtoEdit.precos[7].desc3;
    this.desc4_dist_cd3 = this.produtoEdit.precos[7].desc4;
  }

  modificaProduto(){
    this.agrupa();
    const Produto = {
      _id: this.produtoEdit._id,
      tipoProduto: this.tipoProduto,
      nomeProduto: this.nomeProduto,
      descricaoProduto: this.descricaoProduto,
      codigoProduto: this.codigoProduto,
      linhaProduto: this.linhaProduto,
      medicaoProduto: this.medicaoProduto,
      capaProduto: this.capaProduto,
      compProduto: this.compProduto,
      largProduto: this.largProduto,
      espProduto: this.espProduto,
      unidCx: this.unidCx,
      cxPallet: this.cxPallet,
      metroCx: this.metroCx,
      metroPallet: this.metroPallet,
      precos: this.precos,
      descontos: this.produtoEdit.descontos,
    }
    this.postService.modificaProduto(Produto).subscribe(data => {
        if(data.success){
          this.flashMessage.show('Produto Alterado com Sucesso', {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/produtos']);
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
          this.router.navigate(['/produtos']);
        }
      });
  }

  
  }
