import React, {useState} from 'react'
import Weather from './Weather';
import Form from './Form';

const CityTable = props => {

	
  const handleDeleteUser = id => {
    let answer = window.confirm("Вы уверены что хотите удалить город из избранного?")

    if (answer) {
		props.deleteUser(id)
    }
  }

	const [weather,setWeather] = useState([])
	const APIKEY = 'edf961b1679397a511e7f5b49df164ec'
	
			
	async function fetchData(e, x) {
		
		let place;
		if (x){
			place = e;			
		} else if (e) {
			place = e.target.elements.place.value;
			e.preventDefault();
		} 

		const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${APIKEY}&units=metric&lang=ru&type=like`)
			.then( res => res.json())
			.then(data => data)
			
			setWeather({
				place: apiData.place,
				description: apiData.weather[0].description,
				temperature: apiData.main.temp,
				windspeed: apiData.wind.speed
			})
	}

//const weekdayName = new Date().toLocaleString('ru', {weekday: 'long'}); //Определение дня недели

return (
	<div >
		<br />
		<Form getWeather={fetchData} />
		<br />
		{props.gorod.length > 0 ? (
			props.gorod.map(city => (
				<div className="divdayz" key={city.id} >
								<button onClick={() => fetchData(city.name, city.name)}>{city.name}</button>
								<button title="Удалить" onClick={() => handleDeleteUser(city.id)}>x</button>
				</div>
					))
					) : (
						<p>Все города удалены!</p>
					)
				}
			<div className="center2">	
				<Weather
					description={weather.description}
					temperature={weather.temperature}
					windspeed={weather.windspeed}
				/>	
			</div>	
	</div>		
)
  
}
export default CityTable;