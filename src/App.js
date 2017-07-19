import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */

  // }
  
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }

    this.moveShelf = this.moveShelf.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
      console.log(books)
    })

  }

  moveShelf = (targetBook, event) => {
    var newBooks = Object.assign([], this.state.books)
    newBooks.map((book) => {
      if (book.id === targetBook.id) {
        book.shelf = event.currentTarget.value
      }
    })
    this.setState((state) => (
      {books: newBooks}
    ))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} onMoveShelf={this.moveShelf} />
        )}
        />
        <Route path='/search' render={() => (
          <SearchBooks />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
