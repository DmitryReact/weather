import React, { useState } from 'react'

const AddCityForm = props => {
  const initialFormState = { id: null, name: ''}
  const [gorod, setGorod] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.currentTarget
    setGorod({ ...gorod, [name]: value })
  }

  const handleSubmit = event => {
		event.preventDefault()
    if (!gorod.name) return

    // вызываем addGorod из хука из App
    props.addGorod(gorod)
    // обнуляем форму, с помощью setGorod функции
    // которая у нас взята из хука в данном компоненте [1]
    setGorod(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
		<input type="text" name="name" placeholder="добавление города" value={gorod.name} onChange={handleInputChange} />
		<button>Добавить</button>
    </form>
  )
}

export default AddCityForm;