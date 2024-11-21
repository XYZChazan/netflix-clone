import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math-game',
  standalone: true,
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.css'],
  imports: [CommonModule, FormsModule],
})
export class MathGameComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  operator: string = '+';
  answer: number | null = null;
  userInput: number | null = null;
  message: string = '';
  showImage: boolean = false;

  constructor() {
    this.generateEquation();
  }

  generateEquation() {
    this.firstNumber = Math.floor(Math.random() * 20) + 1;
    this.secondNumber = Math.floor(Math.random() * 20) + 1;
    this.operator = Math.random() > 0.5 ? '+' : '-';

    if (this.operator === '+') {
      this.answer = this.firstNumber + this.secondNumber;
    } else {
      this.answer = this.firstNumber - this.secondNumber;
    }

    this.userInput = null;
    this.message = '';
    this.showImage = false;
  }

  checkAnswer() {
    let expectedResult: number = this.answer! - this.firstNumber;

    if (this.userInput === expectedResult) {
      this.message = 'Correto! Parabéns!';
      this.showImage = true;
    } else {
      this.message = 'Incorreto. Tente novamente!';
      this.showImage = false;
    }
  }
}
