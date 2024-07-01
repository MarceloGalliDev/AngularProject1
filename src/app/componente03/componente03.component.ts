import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.scss'
})
export class Componente03Component {
    // variavel dde image
    imagem:string = 'images/logo-1.png'

    // função de manipulação
    alterarImagem(){
        if(this.imagem === 'images/logo-1.png'){
            this.imagem = 'images/logo-2.png';
        }else{
            this.imagem = 'images/logo-1.png';
        }
    }
}
