import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondasListagemComponent } from './sondas-listagem.component';

describe('SondasListagemComponent', () => {
  let component: SondasListagemComponent;
  let fixture: ComponentFixture<SondasListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondasListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
