import React, { Component } from 'react';
import { connect } from 'react-redux';
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

const cities = [
  //'Pereira,col',
  'Manizales,col',
  'Medellín,col',
  //'Barranquilla,col',
  //'Bogota,col',
  //'Pasto,col',
];

class App extends Component {
  constructor(){
    super();
    this.state = {city: null};
  }

  handleSelectionLocation = city => {
    this.setState({city: city});
    console.log(`handleSelectionLocation > (${city})`);
    
    this.props.dispatchSetCity(city);
  }

  render() {
    const { city } = this.state;
    return (
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weahter App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6} >
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectionLocation}/>
            </Col>
            <Col xs={12} md={6} >
              <Paper elevation={4} >
                <div className="details">
                  {
                    !city ?
                      null:
                      <ForecastExtended city={city} />
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

//export default App;

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
  dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(App);