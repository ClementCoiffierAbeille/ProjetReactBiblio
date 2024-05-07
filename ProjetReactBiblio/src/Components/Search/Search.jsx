import React, { useState } from 'react';
import axios from 'axios';
import Book from '../Book/Book.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import './Search.scss';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredBook, setHoveredBook] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyB-uTvgStlvlaeJEcLtGkT6gxy4rgwMh_Q&maxResults=10`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleMouseEnter = (book) => {
    setHoveredBook(book);
  };

  const handleMouseLeave = () => {
    setHoveredBook(null);
  };

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Rechercher un livre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="buttonSearch" onClick={handleSearch}>Rechercher</button>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {searchResults.length > 0 ? (
            <div className="book-container">
              {searchResults.map((book) => (
                <div
                  key={book.id}
                  className="book"
                  onMouseEnter={() => handleMouseEnter(book)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Book books={[book]} />
                  {hoveredBook === book && (
                    <div className="book-title">{book.volumeInfo.title}</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun résultat trouvé pour cette recherche.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
