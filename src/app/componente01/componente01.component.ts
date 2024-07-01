import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.scss'
})
export class Componente01Component {

    //variaveis
    nome:string = 'Marcelo';
    idade:number = 33;

}