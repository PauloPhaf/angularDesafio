import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SondasListagemComponent } from './sondas-listagem/sondas-listagem.component';
import { SondaService } from './sonda.service';

@NgModule({
  declarations: [
    AppComponent,
    SondasListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SondaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
