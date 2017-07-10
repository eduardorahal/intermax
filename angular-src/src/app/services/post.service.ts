import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http:Http) { }

  adicionaProduto(produto) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/produtos/adiciona', produto, {headers: headers})
      .map(res => res.json());
  }

  modificaProduto(produto) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/produtos/modifica', produto, {headers: headers})
      .map(res => res.json());
  }

  modificaDesconto(desconto) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/produtos/desconto', desconto, {headers: headers})
      .map(res => res.json());
  }

  modificaEstoque(estoque) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/produtos/estoque', estoque, {headers: headers})
      .map(res => res.json());
  }

  adicionaCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/clientes/adiciona', cliente, {headers: headers})
      .map(res => res.json());
  }

  consultaClientes(consulta_cliente){
    return this.http.post('http://localhost:3000/clientes/consulta', consulta_cliente)
        .map(res => res.json())
  }

  consultaClientesID(consulta_id){
    return this.http.post('http://localhost:3000/clientes/consultaid', consulta_id)
        .map(res => res.json())
  }

  consultaClientesMulti(consulta_tmp){
    return this.http.post('http://localhost:3000/clientes/consultamulti', consulta_tmp)
        .map(res => res.json())
  }

  modificaCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/clientes/modifica', cliente, {headers: headers})
      .map(res => res.json());
  }

  removeCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/clientes/remove', cliente, {headers: headers})
      .map(res => res.json());
  }

  adicionaRepresentante(representante) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/representantes/adiciona', representante, {headers: headers})
      .map(res => res.json());
  }

  consultaRepresentante(consulta_representante){
    return this.http.post('http://localhost:3000/representantes/consulta', consulta_representante)
        .map(res => res.json())
    }

  consultaRepresentantesID(consulta_id){
    return this.http.post('http://localhost:3000/representantes/consultaid', consulta_id)
        .map(res => res.json())
  }

  consultaRepresentantesMulti(consulta_tmp){
    return this.http.post('http://localhost:3000/representantes/consultamulti', consulta_tmp)
        .map(res => res.json())
  }

  modificaRepresentante(representante) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/representantes/modifica', representante, {headers: headers})
      .map(res => res.json());
  }

  removeRepresentante(representante) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/representantes/remove', representante, {headers: headers})
      .map(res => res.json());
  }

  adicionaRegiao(regiao) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/regioes/adiciona', regiao, {headers: headers})
      .map(res => res.json());
  }

  consultaRegiao(consulta_regiao){
    return this.http.post('http://localhost:3000/regioes/consulta', consulta_regiao)
        .map(res => res.json())
    }

  modificaRegiao(regiao){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/regioes/modifica', regiao, {headers: headers})
      .map(res => res.json());
  }

  removeRegiao(regiao){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/regioes/remove', regiao, {headers: headers})
      .map(res => res.json());
  }


}
