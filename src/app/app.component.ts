import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  buttonToggle : boolean = false;
  counter = 0;
  myArray = [];

  onDisplayDetails() {
    ++this.counter;
    this.myArray.push(this.counter);
    if(this.buttonToggle) {
      this.buttonToggle = false;
    }
    else {
      this.buttonToggle = true;
    }
  }

  getDynamicStyle() {
    if(this.counter >= 5) {
      return 'blue';
    }
  }

  getBackColor() {
    if(this.counter >= 5) {
      return 'blue';
    }    
  }
}
