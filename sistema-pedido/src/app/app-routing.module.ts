import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClienteRoutes} from './clientes';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/clientes/listar',
      pathMatch: 'full'
    },
    ...ClienteRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
