import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weather';

const data = {
    temperature: 19,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 3,
    weatherState: WINDY,
    humidity: 60,
    wind: '12 m/s',
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Manizales',
            data: data,
        };
    }

    handleUpdateClick = () => {
        console.log("actualizado");
        this.setState({
            //city: 'Pereira',
            data: data2,
        });
    }

    render(){
        const {city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
    
}

export default WeatherLocation;