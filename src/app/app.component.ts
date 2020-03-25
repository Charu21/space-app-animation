import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SlideInOutAnimation } from './_animations/animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideInOutAnimation]
})
export class AppComponent {
  title = 'Space App';
  state = 'in';

  toggleShowDiv(){
      console.log(this.state);
      this.state = this.state === 'out' ? 'in' : 'out';
      console.log(this.state);
  }
}
