import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  result: number | null = null;

  // Les valeurs des champs HTML arrivent sous forme de texte.
  private toNumber(value: string): number {
    const number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  // Première moitié du labo : addition et soustraction.
  add(firstValue: string, secondValue: string): void {
    this.result = this.toNumber(firstValue) + this.toNumber(secondValue);
  }

  subtract(firstValue: string, secondValue: string): void {
    this.result = this.toNumber(firstValue) - this.toNumber(secondValue);
  }

  multiply(firstValue:string, secondValue:string):void {
    this.result = this.toNumber(firstValue)*this.toNumber(secondValue);
  }

  divide(firstValue:string,secondValue:string){
    if( this.toNumber(secondValue) != 0){
      this.result = this.toNumber(firstValue)/this.toNumber(secondValue);
    }else{
      //Can be seen when looking at the console in the inspect panel of a web browser
      console.error("Division by 0 should not be done");
    }
  }


}
