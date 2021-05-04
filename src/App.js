import "./App.css"
import React, { useState, useEffect } from "react"

function App() {
  const [allRestaurants, setAllRestaurants] = useState()
  const [text, setText] = useState("Mutable Text")
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((promise) => setAllRestaurants(promise))
      .catch((err) => console.log(err))
  }, [])
  // console.log(allRestaurants)
  function handleSubmit(){
    console.log("Your have Handled your Submit")
  }


  return (
    <div className="App App-header">
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h3>{text}</h3>
      <br />
      <button onClick={() => handleSubmit()}>Event Handler</button>
      {!allRestaurants ? (
        <h2>Loading ..... </h2>
      ) : (
        allRestaurants.map((restaurant, index) => {
          return (
            <div className="App-header" key={restaurant.id}>
              <h3>Name :{restaurant.name}</h3>
              <span>Address : {restaurant.address}</span>
              <span>Cuisine :{restaurant.cuisine}</span>
              <span>Rating : {restaurant.rating}</span>
              <br />
              <img
                alt={`${restaurant.name}`}
                src={restaurant.photoUrl}
                style={{ maxWidth: "300px", borderRadius: "25%" }}
              />
            </div>
          )
        })
      )}
    </div>
  )
}

export default App
