import React, { Component } from 'react';
import './App.css';

import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "56ae336f89cfc122f6ec1a3780077259";

class App extends Component {
    getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;

      const api_call = 
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
      const data = await api_call.json();
      console.log(data);
    };

    render() {
        return (
            <div className="App">
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        );
    }
}

export default App;
