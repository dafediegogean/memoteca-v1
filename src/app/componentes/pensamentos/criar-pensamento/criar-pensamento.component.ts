import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.pensamentoService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamento"]);
    });
  }

  cancelarPensamento() {
    
  }

}
