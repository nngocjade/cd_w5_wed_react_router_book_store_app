import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
// UI display of book cards
// link card to book detail page
const BookCard = ({ book }) => {
  const BACKEND_API = "http://localhost:5000";
  console.log(`${BACKEND_API}/${book.imageLink}`);
  return (
    <CardDeck>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${BACKEND_API}/${book.imageLink}`} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.author}</Card.Text>
          <Card.Text>{book.country}</Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default BookCard;
