import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamaho: number = 20;
  valorFonte: string = this.tamaho + 'px';
  validaFonte: boolean = false;
  validaCor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(): void {
    this.tamaho ++;
    this.valorFonte = this.tamaho + 'px';
  }

  mudaFonte(): void {
    this.validaFonte = !this.validaFonte;
  }

  mudaCor(): void {
    this.validaCor = !this.validaCor;
  }

}
