import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EnvioDeMensagemComponent } from './views/envio-de-mensagem/envio-de-mensagem.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ErrosModule } from './erros/erros/erros.module';
import {AccordionModule} from 'primeng/accordion'; 
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    EnvioDeMensagemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ErrosModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    AccordionModule,
    ToastModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule

    
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
