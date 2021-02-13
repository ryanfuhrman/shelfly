import React, { useState } from "react";
import SearchResults from "../components/SearchResults";
import { GOOGLE_BOOKS_API_KEY } from "../utils/API";

export default function Search() {
  const [searchResults, setSearchResults] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    const searchTerm = document.querySelector(".book-search-input").value;

    const results = getSearchResults(searchTerm);

    setSearchResults(results);
  };

  return (
    <>
      <label htmlFor="book-search" className="book-search-label">
        Search Books
      </label>
      <form action="#" id="book-search" className="book-search">
        <input className="book-search-input" placeholder="Great Expectations" />
        <button className="book-search-button" onClick={handleClick}>
          Search
        </button>
      </form>

      <SearchResults props={searchResults} />
    </>
  );
}

async function getSearchResults(searchTerm) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${GOOGLE_BOOKS_API_KEY}`
  );
  const data = await res.json();

  if (!data) {
    console.log(`Oops... we didn't find anything for ${searchTerm}`);
  }

  const {
    title,
    authors,
    description,
    imageLinks,
    publishedDate,
  } = data.items[0].volumeInfo;

  const resultData = {
    title,
    author: authors[0],
    description,
    publishedDate,
    image: imageLinks.thumbnail,
  };

  return resultData;
}
