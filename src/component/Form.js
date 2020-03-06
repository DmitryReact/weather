import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder="погода в городе..." name="place" />
            <button>Посмотреть</button>
        </form>
    )
}



export default Form; 