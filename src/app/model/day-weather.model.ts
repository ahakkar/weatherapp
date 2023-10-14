/**
 * DayWeather model stores the weather data for a single day.
 * @author Antti Hakkarainen
 */
import { WeatherData } from "./weather-data.model";

export class DayWeather {
    date: Date;
    data: Array<WeatherData> = [];

    public constructor(date: Date) {
        this.date = date;
    }

    public addData(data: WeatherData): void {
        this.data.push(data);
    }

    public getData(): Array<WeatherData> {
        return this.data;
    }
}