import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  audio1 = new Audio("../../../assets/Gasolina.mp3");
  audio2 = new Audio("../../../assets/Despacito.mp3");
  audio3 = new Audio("../../../assets/Con Calma.mp3");
  sonar(id:number){
    if (id === 1){
      this.audio1.play();
    }
    if (id === 2){
      this.audio2.play();
    }
    if(id === 3){
      this.audio3.play();
    }
  }

  pausar(id:number){
    if (id === 1){
      this.audio1.pause();
    }
    if (id === 2){
      this.audio2.pause();
    }
    if(id === 3){
      this.audio3.pause();
    }
  }

  recargar(id:number){
    if (id === 1){
      this.audio1.load();
    }
    if (id === 2){
      this.audio2.load();
    }
    if(id === 3){
      this.audio3.load();
    }
  }

}
