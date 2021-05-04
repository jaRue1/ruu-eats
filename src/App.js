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
  function handleSubmit() {
    console.log("Your have Handled your Submit: ", text)
  }
  function sendRestaurant(event) {
    event.preventDefault()

    const newRestaurants = {
      name: "Carrabbas Italian Grill",
      address: "6909 SW 18th St",
      cuisine: "Italian Food",
      rating: 3,
      photoUrl: "http://pennsylvaniarestaurantinspections.com/wp-content/uploads/2020/02/carrabbas-italian-grill-lancaster-restaurant-food-safety-inspection.jpg"
    }
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRestaurants),
    })
      .then((response) => response.json())
      .then((status) => console.log(status))
  }

  return (
    <div className="App App-header">
      <br />
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <h3>{text}</h3>
      <br />
      <button onClick={() => handleSubmit()}>Event Handler</button>
      <br />
      <button onClick={(event) => sendRestaurant(event)}>Send Post</button>
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
