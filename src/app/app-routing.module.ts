import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { EnvioDeMensagemComponent } from './views/envio-de-mensagem/envio-de-mensagem.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EnvioDeMensagemComponent
  },
  {
    path: 'home',
    component: EnvioDeMensagemComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'not-found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
