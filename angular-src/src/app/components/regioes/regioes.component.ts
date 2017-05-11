import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.service';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var $:any;

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.component.html',
  styleUrls: ['./regioes.component.css']
})
export class RegioesComponent implements OnInit {

  id_regiao:any;
  nome: any;
  estado = "";
  cidade: any;
  locArr = [];
  consulta_regiao: any;
  regioes: any;
  info = [];

  estados = [{ value : "AC" },{ value : "AL" },{ value : "AM" },{ value : "AP" },{ value : "BA" },{ value : "CE" },{ value : "DF" },{ value : "ES" },{ value : "GO" },{ value : "MA" },{ value : "MT" },{ value : "MS" },{ value : "MG" },{ value : "PA" },{ value : "PB" },{ value : "PR" },{ value : "PE" },{ value : "PI" },{ value : "RJ" },{ value : "RN" },{ value : "RO" },{ value : "RS" },{ value : "RR" },{ value : "SC" },{ value : "SE" },{ value : "SP" },{ value : "TO" },];

  constructor(
    private getService: GetService,
    private postService: PostService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {

  }

  limpa(){
    this.nome = "";
    this.estado = "";
    this.cidade = "";
    this.locArr.length = null;
  }

  adicionaLocal(){
    if (this.estado == null || this.cidade == null) { 
    } else {
      const loc_tmp = {
        estado: this.estado,
        cidade: this.cidade,
        }
      this.locArr.push(loc_tmp);
      this.cidade = null;
      document.getElementById("cidade").focus();
    }
  }

  removeLocal(item){
    var index = this.locArr.indexOf(item);
    this.locArr.splice(index,1);
  }

  adicionaRegiao(){
    this.adicionaLocal();
    const Regiao = {
      nome: this.nome,
      locArr: this.locArr,
    }
    this.postService.adicionaRegiao(Regiao).subscribe(data => {
        if(data.success){
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/regiao']);
          $("#adicionar").modal('hide');
          this.limpa();
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
        }
      });
  }

  consultaRegiao(){
    if (this.consulta_regiao.length >= 3){
    const consulta_regiao = {
      consulta_regiao: this.consulta_regiao,
    }
    this.postService.consultaRegiao(consulta_regiao).subscribe((regiao) => {
        this.regioes = regiao;
      });
    }
  }

  infoRegiao(regiao){
    this.info = regiao;
  }

  editRegiao(regiao){
    this.id_regiao = regiao._id;
    this.nome = regiao.nome;
    this.locArr = regiao.locais;
  }

  modificaRegiao(){
    this.adicionaLocal();
    const Regiao = {
      _id: this.id_regiao,
      nome: this.nome,
      locArr: this.locArr,
    }
    this.postService.modificaRegiao(Regiao).subscribe(data => {
        if(data.success){
          this.limpa();
          $("#edit").modal('hide');
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/regioes']);
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
        }
      });
  }

  removeRegiao(regiao){
    const Regiao = {
      _id: regiao._id
    }
    this.postService.removeRegiao(Regiao).subscribe(data => {
    if(data.success){
      $("#remove").modal('hide');
      this.router.navigate(['/regioes']);
      this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
    } else {
        this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
      }
    })
  }

}
