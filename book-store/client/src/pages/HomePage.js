import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Pagination from "../components/Pagination";
import BookList from "../components/BookList";

const HomePage = () => {
  const [errorMsg, setErrorMsg] = useState();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalPageNum = 10;
  const limit = 10;
  const BACKEND_API = "http://localhost:5000";
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  // fetch booklist data here
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${BACKEND_API}/books?_page=${pageNum}&_limit=${limit}&q=${query}`;
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
  }, [query, pageNum]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setQuery(searchInput);
    alert("search btn clicked");
    console.log("searchinput", searchInput);
  };
  const onPageChange = (pageNumArg) => {
    setPageNum(pageNumArg);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <SearchForm
        handleSearchInputChange={handleSearchInputChange}
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
      <Pagination
        totalItemsCount={totalPageNum * limit}
        handlePageChange={onPageChange}
        pageNum={pageNum}
      />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
