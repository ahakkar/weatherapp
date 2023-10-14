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
    private dayWeatherData: Map<string, DayWeather> = new Map(); 

    public constructor() {        
    }


    /**
     * @method ngOnInit
     * @description Angular lifecycle hook that is called after the constructor.
     * This is where we populate the weather data arrays with dummy data.
     */
    public ngOnInit(): void {
        this.populateWeatherData();
        this.populateDayWeatherData();
    }


    /**
     * @method populateWeatherData
     * @description Populates the weather data array with dummy data.
     */
    private populateWeatherData(): void {
        let minTemp: number = 4;
        let maxTemp: number = 18;
        let date: Date = new Date(`2023-10-14T00:00:00Z`)

        for(let hour:number = 0; hour < 24; hour++) {
            for(let day:number = 0; day < 7; day++) {   
                this.data.push(
                    new WeatherData(
                        WeatherDataType.Celsius, 
                        Math.random() * (maxTemp - minTemp) + minTemp, 
                        1, 
                        "Helsinki",
                        new Date(date)
                    )
                );
                // increment by 1 hour
                date.setTime(date.getTime() + (60 * 60 * 1000));    
            }
            // after populating 1 day, increment by 1 day
            date.setDate(date.getDate() + 1);
            date.setHours(date.getHours() - 23);
        }            
    }


    /**
     * @method populateWeekWeatherData
     * @description Filters the weather data array into a map of DayWeather
     * objects.
     */
    private populateDayWeatherData(): void {
        for (let i: number = 0; i < this.data.length; i++) {
            const dataPoint = this.data[i];

            if(!dataPoint) {
                continue;
            }
            const date: Date    = dataPoint.localDateTimeStamp;
            const day: number   = date.getDate();
            const month: number = date.getMonth();
            const year: number  = date.getFullYear();        
            const key: string   = `${day}-${month}-${year}`;

            const existingDayWeather = this.dayWeatherData.get(key);
        
            if (existingDayWeather !== undefined) {
                existingDayWeather.addData(dataPoint);
            }
            else {
                const dayWeather = new DayWeather(date);
                this.dayWeatherData.set(key, dayWeather);
                dayWeather.addData(dataPoint);
            }            
        }
    }
}
