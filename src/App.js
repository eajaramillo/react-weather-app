import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Pereira,col',
  'Manizales,col',
  'Medellín,col',
  'Barranquilla,col',
  'Bogota,col',
  'Pasto,col',
]

class App extends Component {
  constructor(){
    super();
    this.state = {city: 'Nueva ciudad'};
  }

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation(${city})`);
  }
  render() {
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
            <Paper zDepth={4} >
              <div className="details">
                <ForecastExtended city={this.state.city} />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
