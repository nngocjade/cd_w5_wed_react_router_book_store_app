import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Pagination from "../components/Pagination";
import BookCard from "../components/BookCard";

const HomePage = () => {
  const [errorMsg, setErrorMsg] = useState();
  const [books, setBooks] = useState(new Array[]);
  const [loading, setLoading] = useState(false);
  const totalPageNum = 10;
  const limit = 10;

  // fetch booklist data here
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const url = `${BACKEND_API}/books?_page=${pageNum}&_limit=${limit}`;
        const response = await fetch(url);
        const data = await response.json();
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
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <SearchForm />
      <Pagination />
      <div>
      {books.map((book) => (
        <BookCard book={book} />
))
}
      </div>
     
      
    </div>
  );
};

export default HomePage;
