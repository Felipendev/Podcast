import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Email } from 'src/app/shared/envia-mensagem/envia-mensagem.model';

import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmailService } from 'src/app/shared/email.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-envio-de-mensagem',
  templateUrl: './envio-de-mensagem.component.html',
  styleUrls: ['./envio-de-mensagem.component.css'],
  providers: [DialogService, ConfirmationService, MessageService]
})
export class EnvioDeMensagemComponent implements OnInit {

  form!: FormGroup;
  email!: Email; 
  emails!: Observable<Email[]>;
  position!: string;
  progres = 0;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private service: EmailService,
    private messageService: MessageService,) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      ownerRef: ["Desenvolvedor JAVA"],
      emailFrom: ["dev.especialista.java@gmail.com"],
      emailTo: ["fhps.dev@gmail.com"],
      subject: ["PODCAST Pode Questionar"],
      text: [null, [this.validarObrigatoriedade]]
    });
  }

  enviaEmail() {
    this.service.sendEmail(this.form.value).subscribe(success => {
      console.log("Pergunta enviada com sucesso!")
      this.messageService.add({ severity: 'success', summary: 'Tudo certo!', detail: 'Pergunta enviada com sucesso!' });
      setTimeout(function () {
        window.location.reload();
      }, 100);
    },
      error => {
        console.log("Falha ao enviar pergunta!")
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Error ao enviar pergunta, tente novamente!' }),
      () => console.log('Pergunta enviada com sucesso!')});
  }


  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }

  toggleLoading = () => {
    this.isLoading = true;
  }

}
