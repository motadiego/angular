import { Routes ,  RouterModule} from '@angular/router';

import { FilmesComponent } from './componentes/filmes/filmes.component';
import { PessoasComponent } from './componentes/pessoas/pessoas.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { RacasComponent } from './componentes/racas/racas.component';
import { VeiculosComponent } from './componentes/veiculos/veiculos.component';
import { NavesModule } from './componentes/naves/naves.module';

export const appRoutes: Routes = [
    {
        path: 'pessoas',
        component: PessoasComponent
    },
    {
        path: 'filmes',
        component: FilmesComponent
    },
    {
        path: 'planetas',
        component: PlanetasComponent
    },
    {
        path: 'racas',
        component: RacasComponent
    },
    {
        path: 'veiculos',
        component: VeiculosComponent
    },
    {
        path: 'naves',
        component: NavesModule
    }
];

export const Routing = RouterModule.forChild(appRoutes);
