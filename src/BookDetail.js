import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import {Book} from './BookModel'
import {Link} from 'react-router-dom'

class BookDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onClickBookItem(this.props.history, this.props.match.params.id)
    }

    static propTypes = {
        onMoveShelf: PropTypes.func.isRequired
    }

    render() {
        const book = this.props.book
        const candidateBooks = this.props.books
        return (
            <div>
                <Link className="close-search" to={this.props.backUrl ? this.props.backUrl : '/'}>Close</Link>
                <div className='book-detail'>
                    {this.props.showDetail && (
                        <div>
                        <div className='detail-main'>
                            <div className="book-thumbnail">
                                <img src={book.imageLinks === undefined ? "" : book.imageLinks.thumbnail} alt='' style={{maxHeight: 193, verticalAlign: `bottom`}} />
                            </div>
                            <div className='book-description'>
                                <div className='detail-title'>
                                    <h1>{book.title}<span className='book-subtitle'>{book.subtitle}</span></h1>
                                </div>
                                <div className='explanation'>
                                    {book.description}
                                </div>
                                <div className='book-info'>
                                    <div className='row'>
                                        <div className='col col-3 col-title'>author</div>
                                        <div className='col col-6'>{book.authors}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col col-3 col-title'>Category</div>
                                        <div className='col col-6'>{book.categories}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col col-3 col-title'>Page</div>
                                        <div className='col col-6'>{book.pageCount}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {candidateBooks.length && (
                            <div className='other-books'>
                                <ul className='other-books-list'>
                                    {candidateBooks.filter((b) => b.id !== book.id).map((b) => {
                                        const bookImageURL =  (b.imageLinks === undefined ? "" : b.imageLinks.thumbnail)
                                        return (
                                            <li key={b.id} className='candidate'>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div onClick={() => this.props.onClickBookItem(this.props.history, b.id)}>
                                                            <div className="book-cover">
                                                                <img src={bookImageURL} alt='' style={{maxHeight: 193, verticalAlign: `bottom`}} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{b.title}</div>
                                                    <div className="book-authors">{b.authors}</div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                        </div>
                    )}
                    
                </div>
            </div>
        )
    }
}

export default BookDetail