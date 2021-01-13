import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
// UI display of book cards
// link card to book detail page
const BookCard = () => {
  return (
    <CardDeck>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default BookCard;
