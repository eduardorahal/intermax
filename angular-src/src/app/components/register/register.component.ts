import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: String;
  lastName: String;
  email: String;
  idEmpresa = "";
  telefone: String;
  acesso = "";
  username: String;
  password: String;
  if_admin: any;

  representantes = [];

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private getService: GetService,
  ) { }

  ngOnInit() {
    this.getService.getRepresentantes().then((representante) => {
      this.representantes = representante;
    });
  }

  onRegisterSubmit(){
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        idEmpresa: this.idEmpresa,
        telefone: this.telefone,
        acesso: this.acesso,
        username: this.username,
        password: this.password,
      }

      if(!this.validateService.validateRegister(user)){
        this.flashMessage.show('Preencha todos os campos', {cssClass: 'alert-danger', timeout:3000});
        return false;
      }

      if(!this.validateService.validateEmail(user.email)){
        this.flashMessage.show('Insira um Email válido', {cssClass: 'alert-danger', timeout:3000});
        return false;
      }

      //Register User
      this.authService.registerUser(user).subscribe(data => {
        if(data.msg == 'Username já existe'){
          this.flashMessage.show('Utilize outro Username', {cssClass: 'alert-danger', timeout:5000});
        } else {
        if(data.success){
          this.flashMessage.show('Usuário Cadastrado com Sucesso', {cssClass: 'alert-success', timeout:5000});
          this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('Ocorreu um erro inesperado', {cssClass: 'alert-danger', timeout:5000});
          this.router.navigate(['/register']);
        }
      }});

  }

  admin(){
    if (this.acesso == "admin"){
    this.if_admin = true;
    this.idEmpresa = "intermax"
    } else {
      this.if_admin = false;
      this.idEmpresa = "";
    }
  }


}
