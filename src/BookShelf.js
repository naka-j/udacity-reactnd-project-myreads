import React from 'react'
import BookItem from './BookItem'

function BookShelf(props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => {
                        return (
                            <BookItem book={book} />
                        )}
                    )}
                </ol>
            </div>
        </div>
    )
}
export default BookShelf