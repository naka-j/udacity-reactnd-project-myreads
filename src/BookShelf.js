import React, {Component} from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
    render () {
        const props = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={props.books} onMoveShelf={props.onMoveShelf} />
                </div>
            </div>
        )
    }
}
export default BookShelf