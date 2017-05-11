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

  constructor(
    private getService: GetService,
    private postService: PostService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private cadastroGuard: CadastroGuard,
    private authService: AuthService,
  ) { }

  ngOnInit() {
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
  }

}
