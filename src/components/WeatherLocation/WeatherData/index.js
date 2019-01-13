import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weather';
import './styles.css';

const WeatherData = ({data}) => {
    const { temperature, weatherState, humidity, wind } = data;
    return (<div className="weatherDataCont" >
        <WeatherTemperature
            temperature={temperature}
            weatherState={weatherState}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};

export default WeatherData;