import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Email } from './envia-mensagem/envia-mensagem.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  API = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(
    private http: HttpClient
  ) { }

  public sendEmail(email: Email): Observable<Email>{
    return this.http.post<Email>(this.API + "/sending-email", email, this.httpOptions).pipe(take(1));
  }
}
