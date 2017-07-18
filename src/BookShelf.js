import React, {Component} from 'react'
import BookItem from './BookItem'

class BookShelf extends Component {
    render () {
        const props = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map((book) => {
                            return (
                                <BookItem key={book.id} book={book} onChangeShelf={props.onChangeShelf} />
                            )}
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookShelf