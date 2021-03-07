import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'WeatherAppAngular';
  cards = [];
  display = false;

  showCards(cards) {
    console.log("I GOT CARDS FROM CHILD")
    console.log(cards)
    this.cards = cards;
    this.display = true;
  }
}
