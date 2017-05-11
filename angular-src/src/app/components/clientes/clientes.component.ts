import { Component, OnInit, ViewChild } from '@angular/core';
import { GetService } from '../../services/get.service';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CadastroGuard } from '../../guards/cadastro.guard';
import { AuthService } from '../../services/auth.service';
declare var $:any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  _id: any;
  cnpj: any;
  razao: any;
  categoria = "";
  contato: any;
  insc_estadual: any;
  regiao: any;
  endereco: any;
  bairro: any;
  cidade: any;
  estado = "";
  cep: any;
  telefone: any;
  contato_tel: any;
  operadora: any;
  cpf: any;
  nome_cpf: any;
  endArr = [];
  telArr = [];
  cpfArr = [];
  consulta_cliente: any;
  consulta_id: any;
  consulta_categoria = "";
  consulta_representante = "";
  consulta_regiao = "";
  consulta_cidade = "";
  consulta_estado = "";
  clientes: any;
  info = [];

  regioes = [
    {id: 1, nome: "centro"},
    {id: 2, nome: "oeste"}
  ];

  representantes = [
    {id: 1, nome: "centro"},
    {id: 2, nome: "oeste"}
  ];

  estados = [{ value : "AC" },{ value : "AL" },{ value : "AM" },{ value : "AP" },{ value : "BA" },{ value : "CE" },{ value : "DF" },{ value : "ES" },{ value : "GO" },{ value : "MA" },{ value : "MT" },{ value : "MS" },{ value : "MG" },{ value : "PA" },{ value : "PB" },{ value : "PR" },{ value : "PE" },{ value : "PI" },{ value : "RJ" },{ value : "RN" },{ value : "RO" },{ value : "RS" },{ value : "RR" },{ value : "SC" },{ value : "SE" },{ value : "SP" },{ value : "TO" },];
  
  idEmpresa: any;

  constructor(
    private getService: GetService,
    private postService: PostService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private cadastroGuard: CadastroGuard,
    private authService: AuthService,
  ) {}

  ngOnInit() {

    this.authService.getProfile().subscribe(usuario => {
      this.idEmpresa = usuario.user.idEmpresa;
      if  (usuario.user.acesso == "admin"){
        document.getElementById('abaCadastro').setAttribute('class', 'active');
        document.getElementById('cadastrar_Cliente').setAttribute('class', 'tab-pane fade active in');
        document.getElementById('consultar_Cliente').setAttribute('class', 'tab-pane fade');
      } else {
        if (usuario.user.acesso == "cadastro"){
          document.getElementById('abaCadastro').setAttribute('class', 'active');
          document.getElementById('cadastrar_Cliente').setAttribute('class', 'tab-pane fade active in');
          document.getElementById('consultar_Cliente').setAttribute('class', 'tab-pane fade');
        } else {
          document.getElementById('abaCadastro').setAttribute('class', 'disabled');
          document.getElementById('abaCadastro').style.display = 'none';
          document.getElementById('cadastrar_Cliente').style.display = 'none';
          document.getElementById('abaConsulta').setAttribute('class', 'active');
          document.getElementById('consultar_Cliente').setAttribute('class', 'tab-pane fade active in');
          }
        }
      },
      err => {
        console.log(err);
        return false;
    });
    


  }


  limpa(){
    this.cnpj = null;
    this.razao = null;
    this.categoria = "";
    this.contato = null;
    this.insc_estadual = null;
    this.regiao = null;
    this.endereco = null;
    this.bairro = null;
    this.cidade = null;
    this.estado = "";
    this.cep = null;
    this.telefone = null;
    this.contato_tel = null;
    this.operadora = null;
    this.cpf = null;
    this.nome_cpf = null;
    this.endArr.length = null;
    this.telArr.length = null;
    this.cpfArr.length = null;
  }

  limpaBusca(){
    this.clientes = null;
    this.consulta_cliente = "";
    this.consulta_id = "";
    this.consulta_categoria = "";
    this.consulta_representante = "";
    this.consulta_regiao = "";
    this.consulta_cidade = "";
    this.consulta_estado = "";
  }

  infoCliente(cliente){
    this.info = cliente;
  }

  editCliente(cliente){
    this._id = cliente._id;
    this.cnpj = cliente.cnpj;
    this.razao = cliente.razao;
    this.categoria = cliente.categoria;
    this.contato = cliente.contato;
    this.insc_estadual = cliente.insc_estadual;
    this.regiao = cliente.regiao;
    this.endereco = null;
    this.bairro = null;
    this.cidade = null;
    this.estado = "";
    this.cep = null;
    this.telefone = null;
    this.contato_tel = null;
    this.operadora = null;
    this.cpf = null;
    this.nome_cpf = null;
    this.endArr = cliente.enderecos;
    this.telArr = cliente.telefones;
    this.cpfArr = cliente.cpfs;
  }

  consultaCliente(){
    if (this.consulta_cliente.length >= 3){
    const consulta_cliente = {
      consulta_cliente: this.consulta_cliente,
    }
    this.postService.consultaClientes(consulta_cliente).subscribe((cliente) => {
        this.clientes = cliente;
      });
    }
  }

  consultaClienteID(){
    const consulta_id = {
      consulta_id: this.consulta_id,
    }
    this.postService.consultaClientesID(consulta_id).subscribe((cliente) => {
      this.clientes = cliente;
    });
  }

  consultaClienteMulti(){
    if(this.consulta_categoria == "" &&  this.consulta_representante == "" && this.consulta_regiao == "" && this.consulta_cidade == "" && this.consulta_estado == ""){
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
        if (this.consulta_representante !== ""){
          consulta_tmp["representante"] = this.consulta_representante;
          }
        this.postService.consultaClientesMulti(consulta_tmp).subscribe((cliente) => {
          this.clientes = cliente;
        });
    }
  }

  adicionaEndereco(){
    if (this.endereco == null || this.bairro == null || this.cidade == null || this.estado == null || this.cep == null) {
    } else{
      const end_tmp = {
        endereco: this.endereco,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
        cep: this.cep,
        }
      this.endArr.push(end_tmp);
      this.endereco = null;
      this.bairro = null;
      this.cidade = null;
      this.estado = null;
      this.cep = null;
    }
  }

  removeEndereco(item){
  var index = this.endArr.indexOf(item);
  this.endArr.splice(index,1);
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

  adicionaCPF(){
    if (this.cpf == null || this.nome_cpf == null) {
    } else {
      const cpf_tmp = {
        cpf: this.cpf,
        nome_cpf: this.nome_cpf,
        }
      this.cpfArr.push(cpf_tmp);
      this.cpf = null;
      this.nome_cpf = null;
    }
  }

  removeCPF(item){
  var index = this.cpfArr.indexOf(item);
  this.cpfArr.splice(index,1);
  }

  adicionaCliente(){
    this.adicionaEndereco();
    this.adicionaTelefone();
    this.adicionaCPF();
    const Cliente = {
      cnpj: this.cnpj,
      razao: this.razao,
      categoria: this.categoria,
      contato: this.contato,
      insc_estadual: this.insc_estadual,
      regiao: this.regiao,
      endArr: this.endArr,
      telArr: this.telArr,
      cpfArr: this.cpfArr,
    }
    this.postService.adicionaCliente(Cliente).subscribe(data => {
        if(data.success){
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/clientes']);
          this.limpa();
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
          this.router.navigate(['/clientes']);
        }
      });
  }

  modificaCliente(){
    this.adicionaEndereco();
    this.adicionaTelefone();
    this.adicionaCPF();
    const Cliente = {
      _id: this._id,
      cnpj: this.cnpj,
      razao: this.razao,
      categoria: this.categoria,
      contato: this.contato,
      insc_estadual: this.insc_estadual,
      regiao: this.regiao,
      endArr: this.endArr,
      telArr: this.telArr,
      cpfArr: this.cpfArr,
    }
    this.postService.modificaCliente(Cliente).subscribe(data => {
        if(data.success){
          this.limpa();
          $("#edit").modal('hide');
          this.limpaBusca();
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
        }
      });
  }

  removeCliente(cliente){
    const Cliente = {
      _id: cliente._id
    }
    this.postService.removeCliente(Cliente).subscribe(data => {
    if(data.success){
      $("#remove").modal('hide');
      this.limpaBusca();
      this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:5000});
    } else {
        this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
      }
    })
  }

}
