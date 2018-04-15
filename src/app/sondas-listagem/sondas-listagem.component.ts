import { async } from '@angular/core/testing';
import { SondaService } from './../sonda.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sondas-listagem',
  templateUrl: './sondas-listagem.component.html',
  styleUrls: ['./sondas-listagem.component.css']
})
export class SondasListagemComponent implements OnInit {

  sondas: Array<any>;
  entrada: object = {};
  entradaSonda: Array<any>;
  planalto: string;
  sonda1: string;
  sonda2: string;
  controle1: string;
  controle2: string;
  inserir: object = {};
  inserirSonda: Array<any>;

  teste: string;

  public SendData() {
  
    this.entradaSonda = [
      {
        "sonda": this.sonda1,
        "controle" : this.controle1
      },
      {
        "sonda": this.sonda2,
        "controle" : this.controle2
        },
    ];

    this.entrada = {
      "planalto": this.planalto,
      "entradas" : this.entradaSonda
    };

    this.SondaService.enviar(this.entrada).subscribe(dados => this.sondas = dados, error => console.error(error));

    //this.SondaService.deletar().subscribe(dados => this.sondas = dados, error => console.error(error));

    // this.inserirSonda = [
    //   {
    //     "Posicao_X": 1,
		// 	  "Posicao_Y": 2,
		// 	  "Direcao":"N"
    //   },
    //   {
    //     "Posicao_X": 3,
		// 	  "Posicao_Y": 3,
		//   	"Direcao":"E"
    //   },
    // ];

    // this.inserir = {
    //   "sondas" : this.inserirSonda
    // };
    
    // this.SondaService.inserir(this.inserir).subscribe(dados => this.sondas = dados, error => console.error(error));
    
    this.SondaService.listar().subscribe(dados => this.sondas = dados, error => console.error(error));
  }

  constructor(private SondaService: SondaService) { }

  ngOnInit() {
  }

}