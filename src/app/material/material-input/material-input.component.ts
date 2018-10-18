import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: "Ricardo"
  }
  constructor() { }

  ngOnInit() {
  }

  //Event binding (manda del componente a la vista ante eventos)
  onKeyUp($event){
    console.log("Datos del evento: \n" + $event);
  }

  onBlur($event){
    console.log("Datos del evento: \n" + $event);
  }

}
