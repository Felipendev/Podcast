import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDeMensagemComponent } from './envio-de-mensagem.component';

describe('EnvioDeMensagemComponent', () => {
  let component: EnvioDeMensagemComponent;
  let fixture: ComponentFixture<EnvioDeMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioDeMensagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioDeMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
