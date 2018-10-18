import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  //Test para binding
  formulario = {
    valido: true
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() =>{
      this.formulario.valido = false;
    }, 3000);
  }

  onClick(){
    console.log("Dio click");
  }

}
