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
  length=0
  onChangeLength(value:string)
  {

    const parsedval=parseInt(value)
    if(!(parsedval===NaN))
    {
      this.length=parsedval;

    }

  }
  onButtonClick() {
    this.password = "myPassword";
    console.log(this.includeLetters)
    console.log(this.includeNumbers)
    console.log(this.includeSymbols)
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
