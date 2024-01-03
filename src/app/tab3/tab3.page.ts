import { Component } from '@angular/core';

@Component({
  template: `
    <app-navbar></app-navbar>
    <ion-content>
      <!-- tab 2 content -->
    </ion-content>
  `  ,
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  colores = ['#5B734C', '#D6FF4C', '#00290B', '#D6734C', '#864DB5'];
  constructor() {}

}
