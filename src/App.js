import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AddNewForm from "./components/AddNewForm"
import React, { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"

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
        <AddNewForm className="" />
        <br />
        <button onClick={() => handleSubmit()}>Event Handler</button>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', margin: '3rem 0' }}>
        {!allRestaurants ? (
          <h2>Loading ..... </h2>
        ) : (
          allRestaurants.map((restaurant, index) => {
            return (
              <>
                <div>
                <Card className="bg-dark text-white" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src= {restaurant.photoUrl} />
                  <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>{restaurant.address}</Card.Text>
                    <Card.Text>{restaurant.cuisine}</Card.Text>
                    <Card.Text>{restaurant.rating}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              </>
            )
          })
        )}
      </div>
        <Footer />
      </div>
    </>
  )
}

export default App
