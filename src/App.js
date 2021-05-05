import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import React, { useState, useEffect } from "react"

function App() {
  const [allRestaurants, setAllRestaurants] = useState()
  const [text, setText] = useState("Mutable Text")
  const [newRestaurant, setNewRestaurant] = useState({})
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
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((status) => console.log(status))
  }

  return (
    <div className="App App-header">
      <Header/>
      <form action="">
        <br />
        <label htmlFor="">
          Example :
          <input
            type="text"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
          <br />
          <br />
        </label>
        <label>
          Name :
          <input
            type="text"
            onChange={(event) =>
              setNewRestaurant({ ...newRestaurant, name: event.target.value })
            }
            // value={name}
          />
          <br />
        </label>
        <label>
          Address :
          <input
            type="text"
            onChange={(event) =>
              setNewRestaurant({
                ...newRestaurant,
                address: event.target.value,
              })
            }
            // value={address}
          />
          <br />
        </label>
        <label>
          Rating :
          <input
            type="text"
            onChange={(event) =>
              setNewRestaurant({ ...newRestaurant, rating: event.target.value })
            }
            // value={rating}
          />
          <br />
        </label>
        <label>
          Cuisine :
          <input
            type="text"
            onChange={(event) =>
              setNewRestaurant({
                ...newRestaurant,
                cuisine: event.target.value,
              })
            }
            // value={cuisine}
          />
          <br />
        </label>
        <label>
          Photo :
          <input
            type="text"
            onChange={(event) =>
              setNewRestaurant({ ...newRestaurant, photo: event.target.value })
            }
            // value={photo}
          />
        </label>
        <br />
        <br />
        <button onClick={(event) => sendRestaurant(event)}>Send Post</button>
      </form>
      <h3>{text}</h3>
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
  )
  
}

export default App
