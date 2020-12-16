import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LivroAngular2';
  foto: string = 'favicon.ico';
  desenvolvimento: string [] = ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
  valor: string;

  constructor(private alertaService: AlertaService) {
  }

  enviarMsg(): void {
    this.alertaService.msgAlerta();
  }

  valorPassado(valorPassado): void {
  }
}
