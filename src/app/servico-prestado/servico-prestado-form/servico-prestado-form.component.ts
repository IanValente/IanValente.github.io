import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from './servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = []
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(
  private clienteService: ClientesService,
  private router: Router,
  private service: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado;
   }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( response => this.clientes = response )
  }

  voltarParaListagem() {
    this.router.navigate(['/servicos-prestados/lista'])
  }

  onSubmit(){
    this.service
    .salvar(this.servico)
    .subscribe(response => {
      this.success = true;
      this.errors = [];
      this.servico =  new ServicoPrestado();
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    }
    )
  }

}
