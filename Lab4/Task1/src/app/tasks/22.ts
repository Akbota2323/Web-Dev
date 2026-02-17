import {UpperCasePipe} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` {{loudMessage | uppercase }} `,
  imports: [UpperCasePipe],
})
export class App {
  loudMessage = 'we think you are doing great!'
};
