import { Component } from '@angular/core';
import { TypeFinished } from './shared/type-finished.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  gameInProgress: boolean;
  typeFinished: TypeFinished;

  constructor() {
    this.title = 'learning-english';
    this.gameInProgress = true;
  }
  onFinishTheGame(result: TypeFinished) {
    this.gameInProgress = false;
    this.typeFinished = result;
  }

  resetGame() {
    this.gameInProgress = true;
    this.typeFinished = null;
  }

  get isWin(): boolean {
    return this.typeFinished === TypeFinished.WIN;
  }
}
