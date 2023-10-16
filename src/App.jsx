import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
const [meals, setMeals] = useState([]);
const [hp, setHp] = useState(null)

useEffect( ()=> {
  axios({
    method: "GET",
    url:"http://localhost:3000/meals"
  }).then( (response) => {
    setMeals(response.data)
  })
},[])

  return (
    <>
      <h1>My meals App</h1>
      {meals.map((meal) => {
        return (
          <div key={JSON.stringify(meal)}>
            <div>{meal.name}</div>
            <div>{meal.instructions}</div>
          </div>
        )
      })}
      {/* show content here */}
    </>
  )
}

export default App
