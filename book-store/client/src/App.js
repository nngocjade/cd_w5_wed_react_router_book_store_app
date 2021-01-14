import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookDetailPage from "./pages/BookDetailPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ReadingPage from "./pages/ReadingPage";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;

  return (
    <div className="App">
      <PublicNavbar />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/books/:id" component={BookDetailPage} />
            <Route exact path="/reading" component={ReadingPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
