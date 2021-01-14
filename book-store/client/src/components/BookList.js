import React from "react";
import { Card, Button } from "react-bootstrap";
// UI display of book cards
// link card to book detail page
const BookList = ({ books }) => {
  const BACKEND_API = "http://localhost:5000";
  // console.log(`${BACKEND_API}/${books.imageLink}`);
  return (
    // custom css for book display flex
    <div className="books-wrapper">
      {books.map((book) => (
        <Card className="m-2 card-wrapper" key={book.id}>
          <Card.Img
            className="card-image"
            variant="center"
            src={`${BACKEND_API}/${book.imageLink}`}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Author: {book.author}</Card.Text>
            <Card.Text>Language: {book.language}</Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
