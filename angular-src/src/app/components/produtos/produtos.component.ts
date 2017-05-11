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
    metroContainer: String;
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

  adicionaProduto(){
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
      metroContainer: this.metroContainer,
      preco_rev_cd1: this.preco_rev_cd1,
      desc1_rev_cd1: this.desc1_rev_cd1,
      desc2_rev_cd1: this.desc2_rev_cd1,
      desc3_rev_cd1: this.desc3_rev_cd1,
      desc4_rev_cd1: this.desc4_rev_cd1,
      preco_rev_cd3: this.preco_rev_cd3,
      desc1_rev_cd3: this.desc1_rev_cd3,
      desc2_rev_cd3: this.desc2_rev_cd3,
      desc3_rev_cd3: this.desc3_rev_cd3,
      desc4_rev_cd3: this.desc4_rev_cd3,
      preco_eng_cd1: this.preco_eng_cd1,
      desc1_eng_cd1: this.desc1_eng_cd1,
      desc2_eng_cd1: this.desc2_eng_cd1,
      desc3_eng_cd1: this.desc3_eng_cd1,
      desc4_eng_cd1: this.desc4_eng_cd1,
      preco_eng_cd3: this.preco_eng_cd3,
      desc1_eng_cd3: this.desc1_eng_cd3,
      desc2_eng_cd3: this.desc2_eng_cd3,
      desc3_eng_cd3: this.desc3_eng_cd3,
      desc4_eng_cd3: this.desc4_eng_cd3,
      preco_hcka_cd1: this.preco_hcka_cd1,
      desc1_hcka_cd1: this.desc1_hcka_cd1,
      desc2_hcka_cd1: this.desc2_hcka_cd1,
      desc3_hcka_cd1: this.desc3_hcka_cd1,
      desc4_hcka_cd1: this.desc4_hcka_cd1,
      preco_hcka_cd3: this.preco_hcka_cd3,
      desc1_hcka_cd3: this.desc1_hcka_cd3,
      desc2_hcka_cd3: this.desc2_hcka_cd3,
      desc3_hcka_cd3: this.desc3_hcka_cd3,
      desc4_hcka_cd3: this.desc4_hcka_cd3,
      preco_dist_cd1: this.preco_dist_cd1,
      desc1_dist_cd1: this.desc1_dist_cd1,
      desc2_dist_cd1: this.desc2_dist_cd1,
      desc3_dist_cd1: this.desc3_dist_cd1,
      desc4_dist_cd1: this.desc4_dist_cd1,
      preco_dist_cd3: this.preco_dist_cd3,
      desc1_dist_cd3: this.desc1_dist_cd3,
      desc2_dist_cd3: this.desc2_dist_cd3,
      desc3_dist_cd3: this.desc3_dist_cd3,
      desc4_dist_cd3: this.desc4_dist_cd3,
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
    

  cadastraDesconto(){
    const Desconto = {
      select_field: this.select_field,
      select_desc: this.select_desc,
      quant_desc1: this.quant_desc1,
      medida_desc1: this.medida_desc1,
      quant_desc2: this.quant_desc2,
      medida_desc2: this.medida_desc2,
      quant_desc3: this.quant_desc3,
      medida_desc3: this.medida_desc3,
      quant_desc4: this.quant_desc4,
      medida_desc4: this.medida_desc4,
    }
    this.postService.modificaDesconto(Desconto).subscribe(data => {
        if(data.success){
          this.limpaBusca();
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/produtos']);
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
        }
      });
  }

  
  }
