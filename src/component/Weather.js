import React from 'react'

const Weather = ({description, temperature, windspeed}) => {
    return (
        <div>
            <h2>{temperature && <p>{Math.round(temperature)}°C</p>}</h2>
            <b>{description && <p> {description}</p>}</b>
			<b>{windspeed && <p>Скорость ветра: {windspeed} м/с</p>}</b>
        </div>
    )
}


export default Weather; 