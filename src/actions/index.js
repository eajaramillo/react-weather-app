import { url_base_forecast, api_key } from './../constants/api_url';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({type: SET_CITY, payload});

export const fetchForecast = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        
        // Activar en el estado un indicador de búsqueda de datos
        console.log(url_forecast);
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log("forecastData: ",forecastData);

                //Modificar el estado con el resultado de la promise (fetch)
            }
        );
    };
};