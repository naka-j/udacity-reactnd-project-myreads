import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import * as ConstantValues from './Constants'

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
                    <BookShelf shelfTitle='Currently Reading' books={books.filter((b) => b.shelf === ConstantValues.ShelfId.CURRENT)} onMoveShelf={moveShelf} />
                    <BookShelf shelfTitle='Want to Read' books={books.filter((b) => b.shelf === ConstantValues.ShelfId.WANT_TO_READ)} onMoveShelf={moveShelf} />
                    <BookShelf shelfTitle='Read' books={books.filter((b) => b.shelf === ConstantValues.ShelfId.READ)} onMoveShelf={moveShelf} />
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