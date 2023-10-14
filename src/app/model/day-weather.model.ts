export class DayWeather {
    date: string;
    minTemperature: number;
    maxTemperature: number;

    constructor(date: string, minTemperature: number, maxTemperature: number) {
        this.date = date;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
    }
}