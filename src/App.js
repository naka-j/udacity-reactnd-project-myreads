import React from 'react'
import {Route, Switch} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import BookDetail from './components/BookDetail'
import {Book} from './Models'
import sortBy from 'sort-by'
import './App.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


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
      searchBooksResult: [],
      backUrl: '/',
      showingBook: Book,
      showDetail: false
    }

    this.moveShelf = this.moveShelf.bind(this)
    this.search = this.search.bind(this)
    this.viewDetail = this.viewDetail.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  moveShelf = (targetBook, event) => {
    const targetShelf = event.currentTarget.value
    BooksAPI.update(targetBook, targetShelf).then((data) => {
      // Update success -> books state Delete Insert
      const books = this.removeBookFromShelf(this.state.books, targetBook)
      this.addBookToShelf(books, targetBook, targetShelf)
    })
  }

  // remove book from books state, return new books array
  removeBookFromShelf(books, targetBook) {
    return books.filter((book) => book.id !== targetBook.id)
  }

  // add new book (set new books state)
  addBookToShelf(books, targetBook, targetShelf) {
    const newBook = targetBook
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
    })
  }

  viewDetail(history, id) {
    // keep back url before replacing url
    BooksAPI.get(id).then(book => {
      this.setState({showingBook: book, showDetail: true})
      if (history.location.pathname === '/' || history.location.pathname === '/search') {
        this.setState({backUrl: history.location.pathname})
      }
      history.push('/detail/'+id)
    })
  }

  render() {
    return (
      <div className="app">
        <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
        <Switch key={location.pathname} location={location}>
          <Route exact path='/' render={({history}) => (
            <ListBooks history={history} 
                      onClickBookItem={this.viewDetail} 
                      books={this.state.books} 
                      onMoveShelf={this.moveShelf} 
                      />
          )}
          />
          <Route path='/search' render={({history}) => (  
            <SearchBooks history={history} 
                        onClickBookItem={this.viewDetail} 
                        onMoveShelf={this.moveShelf} 
                        search={this.search} 
                        books={this.state.searchBooksResult} 
                        />
          )}
          />
          <Route path='/detail/:id' render={({match, history}) => (
            <BookDetail onClickBookItem={this.viewDetail} 
                      onMoveShelf={this.moveShelf}
                      history={history}
                      match={match} 
                      backUrl={this.state.backUrl} 
                      books={this.state.backUrl === '/search' ? this.state.searchBooksResult : this.state.books}  
                      book={this.state.showingBook}
                      showDetail={this.state.showDetail}
                      />
          )}
          />
        </Switch>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default BooksApp
