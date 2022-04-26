import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrosComponent } from './erros/erros.component';
import { SharedComponent } from './shared/shared.component';
import { ViewsComponent } from './views/views.component';
import { EnvioDeMensagemComponent } from './views/envio-de-mensagem/envio-de-mensagem.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrosComponent,
    SharedComponent,
    ViewsComponent,
    EnvioDeMensagemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
