import { Routes ,  RouterModule} from '@angular/router';

import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PostsComponent } from './componentes/posts/posts.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { AlbumsComponent } from './componentes/albums/albums.component';
import { FotosComponent } from './componentes/fotos/fotos.component';

export const appRoutes: Routes = [
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
      path: 'posts',
      component: PostsComponent
    },
    {
      path: 'comentarios',
      component: ComentariosComponent
    },
    {
      path: 'albums',
      component: AlbumsComponent
    },
    {
      path: 'fotos',
      component: FotosComponent
    }
];

export const Routing = RouterModule.forChild(appRoutes);
