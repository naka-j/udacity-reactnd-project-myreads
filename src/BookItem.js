import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookItem extends Component {
    
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }
    
    render () {
        const book = this.props.book
        const changeShelf = this.props.onChangeShelf
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`, backgroundColor: `transparent`, backgroundRepeat: `no-repeat`, backgroundPosition: `bottom` }}></div>
                    <div className="book-shelf-changer">
                    <select onChange={changeShelf(book, this)}>
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