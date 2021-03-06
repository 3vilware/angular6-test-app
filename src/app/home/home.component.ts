import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod1: Apod;
  constructor(private nasaApi: NasaApiService) { } //angulR SE ENCARGA DE INYECTAR EL SERVICIO

  ngOnInit() {
    console.log("Iniciando apod");
    this.apod1 = this.nasaApi.getApod();
  }

}
