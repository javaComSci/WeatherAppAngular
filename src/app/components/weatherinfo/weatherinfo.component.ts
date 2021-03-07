import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeatherServiceService } from '../../services/weather-service.service';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.less']
})
export class WeatherinfoComponent {

  @Output() cardsEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private weatherService: WeatherServiceService
  ) { }

  sendParentEvent(cards) {
    this.cardsEvent.emit(cards);
  }

  submitHandler(value: any) {
    this.weatherService.getWeatherCardInfo(value.zipcode).subscribe(cards => {
      console.log(cards);
      this.sendParentEvent(cards);
    });
  }
}
