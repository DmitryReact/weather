import React, { useState } from 'react'
import  AddUserForm from './component/AddUserForm'
import  UserTable from './component/UserTable'
import './App.css'

const App = () => {
  const PLACES = [
	{id: 1, name: "Кемерово"},
	{id: 2, name: "Москва"},
	{id: 3, name: "Магадан"},
	{id: 4, name: "Якутск"},
	{id: 5, name: "Конго"}
];

  const [gorod, setGorod] = useState(PLACES) //[1]

  const addGorod = city => {
    city.id = gorod.length + 1
    setGorod([...gorod, city])
  }

  // удаление города
  // вызываем setGorod [1]
  // и передаем в setGorod массив без элемента, который нужно удалить
  const deleteUser = id => {
    setGorod(gorod.filter(city => city.id !== id))
  }

  return (
    <div className="center">
		<h1>CRUD WEATHER APP with Hooks</h1>
		<div className="">
			<div className="">
				<AddUserForm addGorod={addGorod} />
			</div>
			<div className="">
				<UserTable gorod={gorod} deleteUser={deleteUser} />
			</div>
		</div>
    </div>
  )
}
export default App;