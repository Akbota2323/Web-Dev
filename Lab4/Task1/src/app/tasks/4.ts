import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
      <p>Yes , the server is running isServerRunning true</p>
    }@else{
      <p> No,server is not running </p>
    }
  `,
})
export class App {
  isServerRunning = true;
}