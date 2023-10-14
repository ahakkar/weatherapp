import { WeatherDataType } from '../types/weather-data-type.enum';

export class WeatherData {

    dataType: WeatherDataType;
    value: number;
    interval: number;
    location: string;
    localDateTimeStamp: Date;
  
    constructor(
        dataType: WeatherDataType,
        value: number, 
        interval: number,
        location: string,
        localDateTimeStamp: Date
    ) {
        this.dataType = dataType;
        this.value = value;
        this.interval = interval;
        this.location = location;
        this.localDateTimeStamp = localDateTimeStamp;
    }

}
  