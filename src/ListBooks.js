import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

const SHELF_CURRENT = 'currentlyReading'
const SHELF_WANT_TO = 'wantToRead'
const SHELF_READ = 'read'
const SHELF_NONE = 'none'

class ListBooks extends Component {
    render () {
        const books = this.props.books
        const moveShelf = this.props.onMoveShelf
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <BookShelf shelfTitle='Currently Reading' books={books.filter((b) => b.shelf === SHELF_CURRENT)} onMoveShelf={moveShelf} />
                    <BookShelf shelfTitle='Want to Read' books={books.filter((b) => b.shelf === SHELF_WANT_TO)} onMoveShelf={moveShelf} />
                    <BookShelf shelfTitle='Read' books={books.filter((b) => b.shelf === SHELF_READ)} onMoveShelf={moveShelf} />
                </div>
                </div>
                <div className="open-search">
                <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;