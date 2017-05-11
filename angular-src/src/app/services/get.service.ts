import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {

  produto: any;
  cliente: any;
  representante: any;
  regiao: any;

  constructor(private http:Http,) { 
    this.produto = null;
    this.cliente = null;
    this.representante = null;
    this.regiao = null;
  }
  
  getProdutos(){
    if (this.produto) {
      return Promise.resolve(this.produto);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/produtos/consulta')
        .map(res => res.json())
        .subscribe(produto => {
          this.produto = produto;
          resolve(this.produto);
        });
    });
  }

  getClientes(){

  }

  getRepresentantes(){
    if (this.representante) {
      return Promise.resolve(this.representante);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/representantes/consulta')
        .map(res => res.json())
        .subscribe(representante => {
          this.representante = representante;
          resolve(this.representante);
        });
    });
  }

  getRegioes(){
    if (this.regiao) {
      return Promise.resolve(this.regiao);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/regioes/consulta')
        .map(res => res.json())
        .subscribe(regiao => {
          this.regiao = regiao;
          resolve(this.regiao);
        });
    });
  }


}
