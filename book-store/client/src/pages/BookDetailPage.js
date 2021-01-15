import React, { useState, useEffect } from "react"; // imrse -shortcut
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const BookDetailPage = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const BACKEND_API = "http://localhost:5000";

  useEffect(() => {
    if (!id) {
      return;
    }
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${BACKEND_API}/books/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          console.log("data", data);
          setBookDetails(data);
        } else {
          setErrorMsg(`FETCH BOOK DETAIL ERROR: ${data.message}`);
        }
      } catch (error) {
        setErrorMsg(`FETCH BOOK DETAIL ERROR: ${error.message}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [id]);
  // console.log(bookDetails.id);
  // console.log(
  //   "bookdetailImg",
  //   `${BACKEND_API}/books/${id}/${bookDetails.imageLink}`
  // );
  return (
    <div className="book-detail-wrapper">
      <Card className="m-2 card-wrapper" key={bookDetails.id}>
        <Card.Img
          variant="top"
          src={`${BACKEND_API}/${bookDetails.imageLink}`}
        />
        <Card.Body>
          <Card.Title>{bookDetails.title}</Card.Title>
          <Card.Text>Author: {bookDetails.author}</Card.Text>
          <Card.Text>Language: {bookDetails.language}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookDetailPage;
