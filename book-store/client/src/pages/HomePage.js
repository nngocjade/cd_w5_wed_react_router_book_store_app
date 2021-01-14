import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Pagination from "../components/Pagination";
import BookCard from "../components/BookCard";
import { Container } from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";

const HomePage = () => {
  const [errorMsg, setErrorMsg] = useState();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalPageNum = 10;
  const limit = 10;
  const BACKEND_API = "http://localhost:5000";
  const pageNum = 1;
  const [searchInput, setSearchInput] = useState();
  const [query, setQuery] = useState();

  // fetch booklist data here
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${BACKEND_API}/books?_page=${pageNum}&_limit=${limit}`;
        const response = await fetch(url);
        const data = await response.json();
        if (query) {
          url += `&q=${query}`;
        }
        if (response.ok) {
          console.log(data);
          setBooks(data);
        } else {
          setErrorMsg(`FETCH BOOKS ERROR: ${data.message}`);
        }
      } catch (error) {
        setErrorMsg(`FETCH BOOKS ERROR: ${error.message}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [query]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setQuery(searchInput);
  };

  console.log("handle form submit", handleSearchFormSubmit);

  return (
    <div>
      <h1>Home Page</h1>
      <SearchForm
        handleSearchInputChange={handleSearchInputChange}
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
      <Pagination />
      <Container>
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </Container>
    </div>
  );
};

export default HomePage;
