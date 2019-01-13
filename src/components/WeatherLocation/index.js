import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
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


class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Manizales',
            data: data,
        };
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMound");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillMount() {
        console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            //console.log(data);
            const newWeather = transformWeather(data);
            console.log(newWeather);
            //debugger;
            this.setState({
                city: data.name,
                data: newWeather
            });
         });
    }

    render(){
        console.log("render");
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