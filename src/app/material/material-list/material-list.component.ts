import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  listaEstudiantes: Estudiante[];

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log("Inicializando componente modelo...");
    //Inicializo el modelo
    this.estudiante1 = {
      id: 1,
      nombre: "Ricardo Amador",
      ciudad: "Guadalajara"
    }

    this.estudiante2 = {
      id: 2,
      nombre: "Juan Perez",
      ciudad: "Toluca"
    }

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2
    ];
  }

  onMouseClick($event: Estudiante){
    console.log("Click on: ", $event.nombre);
  }

}
