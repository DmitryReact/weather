import React, { Component } from "react";
import Card from './Card';
import './App.css';

const PLACES = [
	{ name: "Кемерово"},
	{ name: "Москва"},
	{ name: "Магадан"},
	{ name: "Якутск"},
	{ name: "Конго"}
];

var town;

class WeekContainer extends React.Component {
	state = {
    days: [],
	value: '',
    length: 0
  }
 

	formatCards = () => {
		return this.state.days.map((day, index) => <Card day={day} key={index}/>)
	}
 
 
	componentDidMount = () => {	
		const name = this.props.name;
		
		const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ name +"&lang=ru&units=metric&type=like&APPID=edf961b1679397a511e7f5b49df164ec";
				
		fetch(weatherURL).then(res => res.json()).then(data => {
			const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
			this.setState({days: dailyData})
		})
	}
	 
	 
	buttonClick = () => {
		const text1 = this.input.value;
		town = text1;
		
		
		if(text1 && text1.length > 0){
			const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ text1 +"&lang=ru&units=metric&type=like&APPID=edf961b1679397a511e7f5b49df164ec";
				
			fetch(weatherURL).then(res => res.json()).then(data => {
				const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
				this.setState({days: dailyData})
			})
			
		} else{
			alert(`Ничего не введено`);
		}
	}


	render() {
		
		var gorod = this.props.name;
		var gorod2;
		
		if (town){
			gorod2 = town;
		} else if(!town) {
			gorod2 = gorod;
		} 
		
		return (
			<div>
				<div>
					<input type="text" placeholder="введите город для поиска" ref={ref => this.input = ref}/>
					<button className="" type="button" onClick={this.buttonClick}>Найти!</button>
				</div>
				<h1>Прогноз погоды на 5 дней</h1>
				<h1>
					{town = null}
					{gorod2}
				</h1>
				<div>
					{this.formatCards()}
				</div>
			</div>
		)
	}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
		activePlace: 0
    };
  }
   
  render() {
    const activePlace = this.state.activePlace;
    return (
    <div>
        {PLACES.map((place, index) => (
			<button key={index} onClick={() => 
					{
						this.setState({ activePlace: index });
					}
				} > {place.name}
			</button>
        ))}
			<WeekContainer  key={activePlace} name={PLACES[activePlace].name} />
			<br />
    </div>
    );
  }
}

export default App;