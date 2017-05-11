import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var $:any;

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css']
})
export class RepresentantesComponent implements OnInit {
  
  _id: any;
  cnpj: any;
  razao: any;
  contato: any;
  insc_estadual: any;
  endereco: any;
  bairro: any;
  cidade: any;
  estado = "";
  cep: any;
  telefone: any;
  contato_tel: any;
  operadora: any;
  regiao="";
  regiaoEdit = "";
  categoria = "";
  categoriaEdit = "";
  regArr = [];
  telArr = [];
  catArr = [];
  consulta_id: any;
  consulta_categoria = "";
  consulta_representante = "";
  consulta_regiao = "";
  consulta_cidade = "";
  consulta_estado = "";
  representantes: any;
  info = [];
  regioes = [];

  estados = [{ value : "AC" },{ value : "AL" },{ value : "AM" },{ value : "AP" },{ value : "BA" },{ value : "CE" },{ value : "DF" },{ value : "ES" },{ value : "GO" },{ value : "MA" },{ value : "MT" },{ value : "MS" },{ value : "MG" },{ value : "PA" },{ value : "PB" },{ value : "PR" },{ value : "PE" },{ value : "PI" },{ value : "RJ" },{ value : "RN" },{ value : "RO" },{ value : "RS" },{ value : "RR" },{ value : "SC" },{ value : "SE" },{ value : "SP" },{ value : "TO" },];
  

  constructor(
    private getService: GetService,
    private postService: PostService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {

    this.getService.getRegioes().then((regiao) => {
      this.regioes = regiao;
    });

  }

  limpa(){
    this.cnpj = null;
    this.razao = null;
    this.contato = null;
    this.insc_estadual = null;
    this.endereco = null;
    this.bairro = null;
    this.cidade = null;
    this.estado = "";
    this.cep = null;
    this.telefone = null;
    this.contato_tel = null;
    this.operadora = null;
    this.regiao = "";
    this.regArr.length = null;
    this.categoria = "";
    this.categoriaEdit = "";
    this.telArr.length = null;
    this.catArr.length = null;
    var op = document.getElementById("categoria").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          op[i].disabled = null;
        }
  }

  limpaBusca(){
    this.representantes = null;
    this.consulta_representante = "";
    this.consulta_id = "";
    this.consulta_categoria = "";
    this.consulta_representante = "";
    this.consulta_regiao = "";
    this.consulta_cidade = "";
    this.consulta_estado = "";
  }

  consultaRepresentante(){
    if (this.consulta_representante.length >= 3){
    const consulta_representante = {
      consulta_representante: this.consulta_representante,
    }
    this.postService.consultaRepresentante(consulta_representante).subscribe((representante) => {
        this.representantes = representante;
      });
    }
  }

  consultaRepresentanteID(){
    const consulta_id = {
      consulta_id: this.consulta_id,
    }
    this.postService.consultaRepresentantesID(consulta_id).subscribe((representante) => {
      this.representantes = representante;
    });
  }

  consultaRepresentanteMulti(){
    if(this.consulta_categoria == "" && this.consulta_regiao == "" && this.consulta_cidade == "" && this.consulta_estado == ""){
      let consulta_tmp = {
        all: 1
      }
      this.postService.consultaRepresentantesMulti(consulta_tmp).subscribe((representante) => {
        this.representantes = representante;
      });
    } else { 
        const consulta_tmp = {};
        if (this.consulta_regiao !== ""){
          consulta_tmp["regiao"] = this.consulta_regiao;
          }
        if (this.consulta_cidade !== ""){
          consulta_tmp["cidade"] = this.consulta_cidade;
          }
        if (this.consulta_estado !== ""){
          consulta_tmp["estado"] = this.consulta_estado;
          }
        if (this.consulta_categoria !== ""){
          consulta_tmp["categoria"] = this.consulta_categoria;
          }
        this.postService.consultaRepresentantesMulti(consulta_tmp).subscribe((representante) => {
          this.representantes = representante;
        });
    }
  }

  adicionaTelefone(){
    if (this.telefone == null || this.contato_tel == null || this.operadora == null) { 
    } else {
      const tel_tmp = {
        telefone: this.telefone,
        contato_tel: this.contato_tel,
        operadora: this.operadora,
        }
      this.telArr.push(tel_tmp);
      this.telefone = null;
      this.contato_tel = null;
      this.operadora = null;
    }
  }

  removeTelefone(item){
  var index = this.telArr.indexOf(item);
  this.telArr.splice(index,1);
}

  adicionaRegiao(){
    if (this.regiao == null || this.regiao == "") {
    } else {
        const reg_tmp = {
          _id: this.regioes[this.regiao]._id,
          nome: this.regioes[this.regiao].nome,
        };
        this.regArr.push(reg_tmp);
        var op = document.getElementById("regiao").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].value == this.regiao){
            op[i].disabled = true;
          }
        }
        this.regiao = "";
        }
    }

  removeRegiao(item){
    var index = this.regArr.indexOf(item);
    this.regArr.splice(index,1);
    var op = document.getElementById("regiao").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].innerHTML == item.nome){
            op[i].disabled = false;
          }
        }
  }

  adicionaRegiaoEdit(){
    if (this.regiaoEdit == null || this.regiaoEdit == "") {
    } else {
        const reg_tmp = {
          _id: this.regioes[this.regiaoEdit]._id,
          nome: this.regioes[this.regiaoEdit].nome,
        };
        this.regArr.push(reg_tmp);
        var op = document.getElementById("regiaoEdit").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].value == this.regiaoEdit){
            op[i].disabled = true;
          }
        }
        this.regiaoEdit = "";
        }
    }

  removeRegiaoEdit(item){
    var index = this.regArr.indexOf(item);
    this.regArr.splice(index,1);
    var op = document.getElementById("regiaoEdit").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].innerHTML == item.nome){
            op[i].disabled = false;
          }
        }
  }

  adicionaCategoria(){
    if (this.categoria == null || this.categoria == "") {
    } else {
        const cat_tmp = {
          categoria: this.categoria
          }
        this.catArr.push(cat_tmp);
        var op = document.getElementById("categoria").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].value == this.categoria){
            op[i].disabled = true;
          }
        }
        this.categoria = "";
        }
    }

  removeCategoria(item){
    var index = this.catArr.indexOf(item);
    this.catArr.splice(index,1);
    var op = document.getElementById("categoria").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].value == item.categoria){
            op[i].disabled = false;
          }
        }
  }

  adicionaCategoriaEdit(){
    if (this.categoriaEdit == null || this.categoriaEdit == "") {
    } else {
        const cat_tmp = {
          categoria: this.categoriaEdit
          }
        this.catArr.push(cat_tmp);
        var op = document.getElementById("categoriaEdit").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].value == this.categoriaEdit){
            op[i].disabled = true;
          }
        }
        this.categoriaEdit = "";
        }
    }

  removeCategoriaEdit(item){
    var index = this.catArr.indexOf(item);
    this.catArr.splice(index,1);
    var op = document.getElementById("categoriaEdit").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++){
          if (op[i].value == item.categoria){
            op[i].disabled = false;
          }
        }
  }

  adicionaRepresentante(){
    this.adicionaTelefone();
    this.adicionaCategoria();
    const Representante = {
      cnpj: this.cnpj,
      razao: this.razao,
      contato: this.contato,
      insc_estadual: this.insc_estadual,
      endereco: this.endereco,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      cep: this.cep,
      regArr: this.regArr,
      telArr: this.telArr,
      catArr: this.catArr,
    }
    this.postService.adicionaRepresentante(Representante).subscribe(data => {
        if(data.success){
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/representantes']);
          this.limpa();
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
          this.router.navigate(['/representantes']);
        }
      });
  }

  infoRepresentante(representante){
    this.info = representante;
  }

  editRepresentante(representante){
    this._id = representante._id;
    this.cnpj = representante.cnpj;
    this.razao = representante.razao;
    this.contato = representante.contato;
    this.insc_estadual = representante.insc_estadual;
    this.endereco = representante.endereco;
    this.bairro = representante.bairro;
    this.cidade = representante.cidade;
    this.estado = representante.estado;
    this.cep = representante.cep;
    this.telefone = null;
    this.contato_tel = null;
    this.operadora = null;
    this.regiaoEdit = "";
    this.categoriaEdit = "";
    this.telArr = representante.telefones;
    this.regArr = representante.regioes;
      var reg = document.getElementById("regiaoEdit").getElementsByTagName("option");
      for (var x = 0; x < reg.length; x++){
        for (var y = 0; y < this.regArr.length; y++){
          if (reg[x].innerHTML == this.regArr[y].nome){
          reg[x].disabled = true;
          }
        }
      }
    this.catArr = representante.categorias;
      var op = document.getElementById("categoriaEdit").getElementsByTagName("option");
      for (var i = 0; i < op.length; i++){
        for (var j = 0; j < this.catArr.length; j++){
          if (op[i].value == this.catArr[j].categoria){
          op[i].disabled = true;
          }
        }
      }
  }

  modificaRepresentante(){
    this.adicionaTelefone();
    this.adicionaCategoria();
    const Representante = {
      _id: this._id,
      cnpj: this.cnpj,
      razao: this.razao,
      contato: this.contato,
      insc_estadual: this.insc_estadual,
      endereco: this.endereco,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      cep: this.cep,
      telArr: this.telArr,
      catArr: this.catArr,
    }
    this.postService.modificaRepresentante(Representante).subscribe(data => {
        if(data.success){
          this.limpa();
          $("#edit").modal('hide');
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/representantes']);
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
        }
      });
  }

  removeRepresentante(representante){
    const Representante = {
      _id: representante._id
    }
    this.postService.removeRepresentante(Representante).subscribe(data => {
    if(data.success){
      $("#remove").modal('hide');
      this.router.navigate(['/representantes']);
      this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
    } else {
        this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
      }
    })
  }

}
