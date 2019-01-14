import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/geturlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';
import { pathToFileURL } from 'url';

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


class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMound");
        this.handleUpdateClick();
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
        
        const api_weather = getUrlWeatherByCity(this.state.city);
        
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log("Resultado del handleUpdateClick");
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
        const { onWeatherLocationClick } = this.props;
        const {city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50} />
                }
            </div>
        );
        /* <button onClick={this.handleUpdateClick}>Actualizar</button> */
    }
    
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;