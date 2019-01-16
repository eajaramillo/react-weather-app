import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
// import getUrlWeatherByCity from './../../services/geturlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
//import { pathToFileURL } from 'url';

// import {
//     CLOUD,
//     CLOUDY,
//     SUN,
//     RAIN,
//     SNOW,
//     WINDY,
// } from './../../constants/weather';

// const data = {
//     temperature: 19,
//     weatherState: SUN,
//     humidity: 10,
//     wind: '10 m/s',
// }

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ?
            <WeatherData data={data}></WeatherData> :
            <CircularProgress size={50} />
        }
    </div>
    /* <button onClick={this.handleUpdateClick}>Actualizar</button> */
);

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;