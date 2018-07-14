import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: [],
  }

  getBooks = (e) => {
    const query = e.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.length > 0) {
          this.setState({ searchResults: books })
        } else {
          this.setState({ searchResults: [] })
        }
      })
    } else {
      this.setState({ searchResults: [] })
    }
  }

  render() {
    const { query, searchResults } = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ this.getBooks } />
          </div>
        </div>
        <div className="search-books-results">
          {searchResults.length > 0 && (
            <div>
              <ol className="books-grid">
                {searchResults.map((book) => (
                  <Book
                    book = {book}
                    books = {books}
                    changeShelf = {changeShelf}
                    key = {book.id}
                  />
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Search