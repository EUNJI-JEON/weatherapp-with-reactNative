import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from "./Weather";


const API_KEY = "8482f9d9f7746a2d890257ec289ea896";

export default class App extends Component {
  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({
        error:error
      });
    }
   );
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json=> {
      console.log(json);
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded: true
      });
    });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}></StatusBar>
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} />
        ) : (
        <View style={styles.loading}>

          <Text style={styles.loadingText}>Getting the weather</Text>
          {error? <Text style={styles.errorText}>Error</Text> : null}
        </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText:{
    color:"red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading:{
    flex:1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
