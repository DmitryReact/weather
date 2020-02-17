import React, { Component } from "react";
import './App.css';

class Card extends React.Component {

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
  
    return (
      
        <div className="divdayz">
          <h3>{weekdayName}</h3>          
          <h2>{Math.round(this.props.day.main.temp)} °C</h2>
          <p>{this.props.day.weather[0].description}</p> 
		  <p>Скорость ветра: {this.props.day.wind.speed} м/с</p>
		  <hr />
        </div>
      
    )
  }
}

export default Card