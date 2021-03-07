import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherinfoComponent } from './components/weatherinfo/weatherinfo.component';
import { WeathercardsComponent } from './components/weathercards/weathercards.component';
import { WeathercardComponent } from './components/weathercard/weathercard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherinfoComponent,
    WeathercardsComponent,
    WeathercardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
