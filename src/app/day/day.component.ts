/**
 * @component DayComponent
 * @description The DayComponent is a child component of the BodyComponent.
 * It is responsible for displaying the weather data for a single day.
 *
 * @author Antti Hakkarainen
 */

import { Component, Input } from '@angular/core';
import { DayWeather } from '../model/day-weather.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
    @Input() dayWeatherData!: DayWeather; // angular will handle initialization

}
