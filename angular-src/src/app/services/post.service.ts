import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http:Http) { }

  adicionaProduto(produto) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('produtos/adiciona', produto, {headers: headers})
      .map(res => res.json());
  }

  modificaDesconto(desconto) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('produtos/desconto', desconto, {headers: headers})
      .map(res => res.json());
  }

  adicionaCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('clientes/adiciona', cliente, {headers: headers})
      .map(res => res.json());
  }

  consultaClientes(consulta_cliente){
    return this.http.post('clientes/consulta', consulta_cliente)
        .map(res => res.json())
  }

  consultaClientesID(consulta_id){
    return this.http.post('clientes/consultaid', consulta_id)
        .map(res => res.json())
  }

  consultaClientesMulti(consulta_tmp){
    return this.http.post('clientes/consultamulti', consulta_tmp)
        .map(res => res.json())
  }

  modificaCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('clientes/modifica', cliente, {headers: headers})
      .map(res => res.json());
  }

  removeCliente(cliente) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('clientes/remove', cliente, {headers: headers})
      .map(res => res.json());
  }

  adicionaRepresentante(representante) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('representantes/adiciona', representante, {headers: headers})
      .map(res => res.json());
  }

  consultaRepresentante(consulta_representante){
    return this.http.post('representantes/consulta', consulta_representante)
        .map(res => res.json())
    }

  consultaRepresentantesID(consulta_id){
    return this.http.post('representantes/consultaid', consulta_id)
        .map(res => res.json())
  }

  consultaRepresentantesMulti(consulta_tmp){
    return this.http.post('representantes/consultamulti', consulta_tmp)
        .map(res => res.json())
  }

  modificaRepresentante(representante) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('representantes/modifica', representante, {headers: headers})
      .map(res => res.json());
  }

  removeRepresentante(representante) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('representantes/remove', representante, {headers: headers})
      .map(res => res.json());
  }

  adicionaRegiao(regiao) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('regioes/adiciona', regiao, {headers: headers})
      .map(res => res.json());
  }

  consultaRegiao(consulta_regiao){
    return this.http.post('regioes/consulta', consulta_regiao)
        .map(res => res.json())
    }

  modificaRegiao(regiao){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('regioes/modifica', regiao, {headers: headers})
      .map(res => res.json());
  }

  removeRegiao(regiao){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('regioes/remove', regiao, {headers: headers})
      .map(res => res.json());
  }


}
