import React from 'react'
import BooksGrid from './BooksGrid'

function BookShelf(props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <BooksGrid history={props.history} onClickBookItem={props.onClickBookItem} books={props.books} onMoveShelf={props.onMoveShelf} />
            </div>
        </div>
    )
}
export default BookShelf