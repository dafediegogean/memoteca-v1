import { Component, OnInit } from '@angular/core';

import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  pensamentos: Pensamento[] = [];

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((pensamentos) => {
      this.pensamentos = pensamentos;
    });
  }

  isPensamento(): boolean {
    if (this.pensamentos.length == 0) {
      return false;
    }
    return true;
  }

}
