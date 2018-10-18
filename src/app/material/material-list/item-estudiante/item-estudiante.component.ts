import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  @Input() // SE EXPONE ESTUDIANTE A COMPONENTES EXTERNOS
  estudiante: Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>(); //Importar emmitter en angular core

  constructor() { }

  ngOnInit() {
  }

  onClick(e: Estudiante){
    this.onMouseClick.emit(e);
  }

}
