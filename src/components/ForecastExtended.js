import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return(<div>Pronóstico Extendido para {city}</div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;