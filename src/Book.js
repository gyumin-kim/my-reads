import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
// import noCover from './icons/no-cover-image.png'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props
    // add fallbacks for missing cover images and title
    const coverImage = book.imageLinks.thumbnail
    // const coverImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
    const title = book.title
    // ? book.title : "No title available"

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

              <div className="book-title">{ title }</div>
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