import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import { url_base_forecast, api_key } from './../constants/api_url';
import './styles.css';

/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
};*/

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    // Se ejecuta la primera vez que se carga el componente, pero no cuando se actualizan las propiedades del componente
    componentDidMount() {
        this.updateCity(this.props.city);
    }

    // Se ejecuta cuando se actualizan las propiedades del componente pero no la primera vez que se carga el componente.
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        console.log(url_forecast);
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log("weather_data:",weather_data);
                const forecastData = transformForecast(weather_data);
                console.log("forecastData: ",forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>) )
    }

    renderProgress() {
        return <h3>Cargando pronóstico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                { forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;