import React from 'react'
import BookItem from '../BookItem'

function BooksGrid(props) {
    return(
        <ol className="books-grid">
            {props.books.map((book) => {
                return (
                    <BookItem history={props.history} onClickBookItem={props.onClickBookItem} key={book.id} book={book} onMoveShelf={props.onMoveShelf} />
                )}
            )}
        </ol>
    )
}

export default BooksGrid