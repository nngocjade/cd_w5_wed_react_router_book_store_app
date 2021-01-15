import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// UI display of book cards
// link card to book detail page
const BookList = ({ books }) => {
  const BACKEND_API = "http://localhost:5000";
  // console.log(`${BACKEND_API}/${books.imageLink}`);
  return (
    // custom css for book display flex
    <div className="books-wrapper">
      {books.map((book) => (
        <Link to={`/books/${book.id}`} key={book.id}>
          <Card className="m-2 card-wrapper">
            <Card.Img
              className="card-image"
              variant="top"
              src={`${BACKEND_API}/${book.imageLink}`}
            />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Author: {book.author}</Card.Text>
              <Card.Text>Language: {book.language}</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
