import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import {Book} from './BookModel'
import {Link} from 'react-router-dom'

class BookDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: Book,
            showDetail: false
        }
    }

    componentDidMount() {
        BooksAPI.get(this.props.match.params.id).then(book => {
            this.setState({book: book, showDetail: true})
        })
    }

    static propTypes = {
        onMoveShelf: PropTypes.func.isRequired
    }

    render() {
        const book = this.state.book
        return (
            <div>
                <Link className="close-search" to='/'>Close</Link>
                <div className='book-detail'>
                    {this.state.showDetail && (
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
                    )}
                </div>
            </div>
        )
    }
}

export default BookDetail