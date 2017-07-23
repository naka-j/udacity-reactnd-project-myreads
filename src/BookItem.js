import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookItem extends Component {
    
    static propTypes = {
        book: PropTypes.object.isRequired,
        onMoveShelf: PropTypes.func.isRequired
    }
    
    render () {
        const book = this.props.book
        const moveShelf = this.props.onMoveShelf
        const bookImageURL = (book.imageLinks === undefined ? "" : book.imageLinks.thumbnail)
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover">
                        <img src={bookImageURL} alt='' style={{maxHeight: 193, verticalAlign: `bottom`}} />
                    </div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => moveShelf(book, event)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookItem