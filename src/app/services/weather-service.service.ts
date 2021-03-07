import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { WeatherinfoComponent } from '../components/weatherinfo/weatherinfo.component';
import { WeatherInfoCard } from '../models/weatherInfoCard';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

  parseResponse(response) {
    let temps = {};
    let weathers = {};
    let responseDays = response.list;
    for (let i = 0; i < Number(response.cnt); i++) {
      let currResponse = responseDays[i];
      let currDate = currResponse["dt_txt"].split(" ")[0];
      if (temps[currDate]) {
        temps[currDate].push(currResponse.main.temp);
        weathers[currDate].push(currResponse.weather[0].main);
      } else {
        temps[currDate] = [currResponse.main.temp];
        weathers[currDate] = [currResponse.weather[0].main];
      }
    }

    let weatherInfoCards = [];

    console.log("BFROE", temps, weathers)

    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    for (let tempObj in temps) {
      temps[tempObj] = average(temps[tempObj]);
      weathers[tempObj] = this.mode(weathers[tempObj]);
      weatherInfoCards.push(
        {
          date: tempObj,
          temp: temps[tempObj],
          weather: weathers[tempObj]
        }
      );
    }

    return weatherInfoCards;
  }

  getWeatherUrl(zipcode: string) {
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode + ',us&units=imperial&appid=' + 'API-KEY';
    return weatherUrl;
  }

  getWeatherCardInfo(zipcode: string) : Observable<any> {
    return this.http.get(this.getWeatherUrl(zipcode)).pipe(map((response: any) => {
      return this.parseResponse(response);
    }));
  };
}
