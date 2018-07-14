import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class ListBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    shelfChange: false
  }
  
  render() {
    const { books, changeShelf } = this.props
    const shelfTitles = [
      { 
        type: 'currentlyReading', 
        title: 'Currently Reading' 
      },
      { 
        type: 'wantToRead', 
        title: 'Want to Read' 
      },
      { 
        type: 'read', 
        title: 'Read'
      }
    ]

    return (
      <div className="list-books-content">
        {shelfTitles.map((shelf, index) =>  {
          // Categorize all books by their type
          const shelfBooks = books.filter( (book) => book.shelf === shelf.type)

          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              
              <div className="bookshelf-books">
                <BooksGrid
                  books = { shelfBooks }
                  changeShelf = { changeShelf }
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListBook