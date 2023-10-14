import { Component } from '@angular/core';
import { WeatherData } from '../model/weather-data.model';
import { DayWeather } from '../model/day-weather.model';
import { WeatherDataType } from '../types/weather-data-type.enum';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

    private data: Array<WeatherData> = [];
    private weekWeatherData: Array<DayWeather> = []; 

    public constructor() {        
    }


    public ngOnInit(): void {
        this.populateWeatherData();
        this.populateWeekWeatherData();
    }


    /**
     * @method populateWeatherData
     * @description Populates the weather data array with dummy data.
     */
    private populateWeatherData(): void {
        this.data.push(
            new WeatherData(
                WeatherDataType.Celsius, 
                2, 
                3, 
                "Helsinki", new Date('2021-12-31T12:34:56Z')
            )
        );
    }


    /**
     * @method populateWeekWeatherData
     * @description Populates the week weather data array with dummy data.
     */
    private populateWeekWeatherData(): void {

    }

}
