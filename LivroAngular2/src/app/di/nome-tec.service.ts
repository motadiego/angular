import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable({
  providedIn: 'root'
})
export class NomeTecService {

  constructor(@Optional() private meuLog: MeuLogService) { }

  getNomeTec() {
    if(this.meuLog)	{
      this.meuLog.setLog('Consultou o array de tecnologias');
    }
    return	['Angular	2',	'TypeScript',	'JavaScript',	'HTML5',	'CSS3',	'Desenvolvendo	com	Angular	2'];
  }

}
