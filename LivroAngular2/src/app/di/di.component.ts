import { Component, OnInit } from '@angular/core';
import { NomeTecService } from './nome-tec.service';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

  tecnologias:	string	[]	=	[];

  constructor(
    private nomeTecService: NomeTecService,
    private alertaService: AlertaService) { }

  ngOnInit(): void {
    this.tecnologias = this.nomeTecService.getNomeTec();
    this.alertaService.msgAlerta();
  }

}
