import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import sortBy from 'sort-by'
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
      books: [],
      searchBooksResult: []
    }

    this.moveShelf = this.moveShelf.bind(this)
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
      console.log(books)
    })
  }

  moveShelf = (targetBook, event) => {
    var targetShelf = event.currentTarget.value
    BooksAPI.update(targetBook, targetShelf).then((data) => {
      // Update success -> books state Delete Insert
      var books = this.removeBookFromShelf(this.state.books, targetBook)
      this.addBookToShelf(books, targetBook, targetShelf)
    })
  }

  // remove book from books state, return new books array
  removeBookFromShelf(books, targetBook) {
    return books.filter((book) => book.id !== targetBook.id)
  }

  // add new book (set new books state)
  addBookToShelf(books, targetBook, targetShelf) {
    var newBook = targetBook
    newBook.shelf = targetShelf
    books.push(newBook)
    this.setState((state) => (
      {books: books}
    ))
  }

  search(query) {
    if (!query) {
      return this.setState({searchBooksResult: []})
    }
    BooksAPI.search(query, 20).then((books) => {
      if (books.error !== undefined) {
        return this.setState({searchBooksResult: []})
      }
      books.sort(sortBy('title'))
      this.setState({searchBooksResult: books})
      console.log(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} onMoveShelf={this.moveShelf} />
        )}
        />
        <Route path='/search' render={() => (
          <SearchBooks onMoveShelf={this.moveShelf} search={this.search} books={this.state.searchBooksResult} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
