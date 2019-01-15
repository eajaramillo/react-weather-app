import React, { Component } from 'react';
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  //'Pereira,col',
  'Manizales,col',
  'Medellín,col',
  //'Barranquilla,col',
  //'Bogota,col',
  //'Pasto,col',
];

class App extends Component {
  
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
              <LocationListContainer cities={cities}/>
            </Col>
            <Col xs={12} md={6} >
              <Paper elevation={4} >
                <div className="details">
                    <ForecastExtendedContainer />
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

//export default App;


export default App;