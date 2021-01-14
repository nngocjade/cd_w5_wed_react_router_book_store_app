import React from "react";
import { Card, Button, Row } from "react-bootstrap";
// UI display of book cards
// link card to book detail page
const BookList = ({ books }) => {
  const BACKEND_API = "http://localhost:5000";
  // console.log(`${BACKEND_API}/${books.imageLink}`);
  return (
    // custom css for book display flex
    <Row>
      {books.map((book) => (
        <Card style={{ width: "18rem" }} key={book.id}>
          <Card.Img variant="top" src={`${BACKEND_API}/${book.imageLink}`} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Author: {book.author}</Card.Text>
            <Card.Text>Language: {book.language}</Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};

export default BookList;
