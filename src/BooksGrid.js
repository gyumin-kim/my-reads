import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeShelf } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          // Each of books
          <Book
            book = {book}
            books = {books}
            changeShelf = {changeShelf}
            key = {book.id}
          />
        ))}
      </ol>
    )
  }
}

export default BooksGrid