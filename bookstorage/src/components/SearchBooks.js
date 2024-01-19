import React, { useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/api/books/search?title=${searchTerm}`);
      setSearchResults(response.data.data);
      setError('');
    } catch (error) {
      console.error('Error searching for books:', error.message);
      setSearchResults([]);
      setError('Error searching for books. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title"
          className="w-full p-2 border rounded-md mr-2 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>

      {error && <div className="text-red-500 mt-2">{error}</div>}

      {searchResults.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <ul>
            {searchResults.map((book) => (
              <li key={book._id} className="mb-2">
                <strong>{book.title}</strong> by {book.author} ({book.publishYear})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBooks;
