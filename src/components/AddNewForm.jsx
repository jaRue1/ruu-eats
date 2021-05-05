import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"


function AddNewForm() {
  const [newRestaurant, setNewRestaurant ] = useState({})
  function SendRestaurant(event) {
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
    <form className="myForm" action="">
        <br />
        <label htmlFor="">
          <br />
          <br />
        </label>
        <label>
          Name :
          <input
            type="text"
            onChange={(event) => setNewRestaurant({ ...newRestaurant, name: event.target.value })
            }
            // value={name}
          />
          <br />
        </label>
        <label>
          Address :
          <input
            type="text"
            onChange={(event) => setNewRestaurant({...newRestaurant,address: event.target.value })
            }
            // value={address}
          />
          <br />
        </label>
        <label>
          Rating :
          <input
            type="text"
            onChange={(event) => setNewRestaurant({ ...newRestaurant, rating: event.target.value })
            }
            // value={rating}
          />
          <br />
        </label>
        <label>
          Cuisine :
          <input
            type="text"
            onChange={(event) => setNewRestaurant({...newRestaurant,cuisine: event.target.value })
            }
            // value={cuisine}
          />
          <br />
        </label>
        <label>
          Photo :
          <input
            type="text"
            onChange={(event) => setNewRestaurant({ ...newRestaurant, photoUrl: event.target.value })
            }
            // value={photo}
          />
        </label>
        <br />
        <br />
        <Button onClick={(event) => SendRestaurant(event)}>Send Post</Button>
      </form>
  )
  
}
export default AddNewForm