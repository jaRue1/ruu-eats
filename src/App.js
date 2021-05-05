import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AddNewForm from "./components/AddNewForm"
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

  return (
    <>
      <div className="App App-header">
        <Header />
        Example :
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <h3>{text}</h3>
        <AddNewForm />
        <br />
        <button onClick={() => handleSubmit()}>Event Handler</button>
        {!allRestaurants ? (
          <h2>Loading ..... </h2>
        ) : (
          allRestaurants.map((restaurant, index) => {
            return (
              <div className="App-header restaurant-card" key={restaurant.id}>
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
        <Footer />
      </div>
    </>
  )
}

export default App
