import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
import noImage from './icons/no-image.png'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props
    const coverImage = (book.imageLinks && book.imageLinks.thumbnail) ? 
    book.imageLinks.thumbnail : noImage;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${coverImage})`}}>
            </div>
            <ShelfChanger
              book = { book }
              books = { books }
              changeShelf = {changeShelf }
            />
          </div>
          
          <div className="book-title">{ book.title }</div>
          {book.authors && book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
          ))}
        </div>
      </li>
    )
  }

}

export default Book