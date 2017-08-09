import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

class BookItem extends Component {
    
    static propTypes = {
        book: PropTypes.object.isRequired,
        onMoveShelf: PropTypes.func.isRequired
    }
    
    render () {
        const book = this.props.book
        const bookImageURL = (book.imageLinks === undefined ? "" : book.imageLinks.thumbnail)
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div onClick={() => this.props.onClickBookItem(this.props.history, book.id)}>
                        <div className="book-cover">
                            <img src={bookImageURL} alt='' style={{maxHeight: 193, verticalAlign: `bottom`}} />
                        </div>
                    </div>
                    <ShelfChanger book={book} onMoveShelf={this.props.onMoveShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookItem