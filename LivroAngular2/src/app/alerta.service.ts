import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  msgAlerta(): void {
    alert('Livro Angular 2');
  }
}
