import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  WeatherData:any;
  message: any;
  subscription: any;

  constructor(
    private searchData : SearchService,
    private http: HttpService) { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      weather: [{
        description:"No data!",
        icon:"01d"
      }]
    };

    this.subscription = this.searchData.currentMessage.subscribe(message => {
      if(message)
        this.getWeatherData(message);

    })
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getWeatherData(message:string){
    this.http.getData('http://localhost:8080/get-weather',{"city":message.toString()}).subscribe((resp:any) => {
      console.log(resp.weather)
      if(resp.success){
        this.setWeatherData(resp.weather)
      } else {
        this.WeatherData = {
          main : {},
          weather: [{
            description:"City not Found!",
            icon:"01d"
          }]
        }
      }
     })
  } 

  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
