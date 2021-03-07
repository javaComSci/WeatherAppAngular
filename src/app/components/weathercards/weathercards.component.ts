import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weathercards',
  templateUrl: './weathercards.component.html',
  styleUrls: ['./weathercards.component.less']
})
export class WeathercardsComponent implements OnInit {
  @Input() weatherCards;

  constructor() {
   }

  ngOnInit(): void {
  }

}
