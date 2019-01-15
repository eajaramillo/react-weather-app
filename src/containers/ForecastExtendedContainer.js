import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        //console.log("******************\n",this.props);
        return (
            this.props.city1 &&
            <ForecastExtended city={this.props.city1} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city1: PropTypes.string.isRequired,
};

const mapStateToProps = ({city}) => ({ city1: city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);