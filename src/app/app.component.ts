import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength: number = 0;
  generatedPassword: string = '';
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  enterLength(length: string) {
    const parsedValue = parseInt(length);
    if(!isNaN(parsedValue)) {
      this.passwordLength = parsedValue
    }
  }

  setUseLetters() {
    this.useLetters = !this.useLetters;
  }

  setUseNumbers() {
    this.useNumbers = !this.useNumbers
  }

  setUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onGenerate() {
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.useLetters){
      validChars += letters
    }

    if(this.useNumbers){
      validChars += numbers
    }

    if(this.useSymbols){
      validChars += symbols
    }

    let createPassword = '';

    for(let i=0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      createPassword += validChars[index];
    }

    this.generatedPassword = createPassword;
  }

  getPassword() {
    return this.generatedPassword;
  }
}
