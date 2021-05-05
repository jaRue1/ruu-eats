import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AddNewForm from "./components/AddNewForm"
import React, { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import SingleRestaurant from "./components/SingleRestaurant"

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
    
      <div className="App App-header">
        <Header />
        Example :
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <h3>{text}</h3>
        <AddNewForm className="" />
        <br />
        <Button onClick={() => handleSubmit()}>Event Handler</Button>
        <div className="">
          {!allRestaurants ? (
            <h2>Loading ..... </h2>
          ) : (
            allRestaurants.map((restaurant, index) => {
              return (
                <>
                  <SingleRestaurant restaurant={restaurant} />
                </>
              )
            })
          )}
        </div>
        <Footer />
      </div>
  )
}

export default App
