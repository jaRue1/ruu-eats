import React from "react"
import { Button, Card } from "react-bootstrap"

function SingleRestaurant(props) {
  return (
    <Card key = {props.restaurant.id} className="Apps-cards-container bg-dark text-white" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.restaurant.photoUrl} />
      <Card.Body>
        <Card.Title>{props.restaurant.name}</Card.Title>
        <Card.Text>{props.restaurant.address}</Card.Text>
        <Card.Text>{props.restaurant.cuisine}</Card.Text>
        <Card.Text>{props.restaurant.rating}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
export default SingleRestaurant
