import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  password = "";
  includeLetters=false;
  includeSymbols=false;
  includeNumbers=false;
  length
  onChangeLength(value:string)
  {


    const parsedval=parseInt(value)
    if(parsedval!=NaN)
    {

      this.length=parsedval;

    }
    console.log(this.length)

  }
  onButtonClick() {

    const letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers="1234567890"
    const symbols="!@#$%)(?&"
    let validchars=""
    let localpassword=""
    if(this.includeLetters)
    {
      validchars+=letters
    }
    if(this.includeNumbers) {validchars+=numbers;}
    if(this.includeSymbols){ validchars+=symbols;}
    while(localpassword.length!=this.length)
    {
      localpassword+=validchars[Math.floor(Math.random()*validchars.length)]
    }
    this.password=localpassword;
  }
  onChangeLetters(){
    this.includeLetters=!this.includeLetters;

  }
  onChangeSymbols()
  {
    this.includeSymbols=!this.includeSymbols;
  }
  onchangeNumbers()
  {
    this.includeNumbers=!this.includeNumbers
  }
}
