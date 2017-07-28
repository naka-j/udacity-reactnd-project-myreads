import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BooksGrid from './BooksGrid'
import * as ConstantValues from './Constants'

class SearchBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }

        this.search = this.props.search
    }
    
    updateQuery(query) {
        this.setState({query: query.trim()}, this.search(query))
    }
        
    render () {
        const query = this.state.query
        const books = this.props.books
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={query} onChange={(event) => this.updateQuery(event.currentTarget.value, history)} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={books.filter((book) => book.shelf === ConstantValues.ShelfId.NONE)} onMoveShelf={this.props.onMoveShelf} />
                </div>
            </div>
        )
    }
}

export default SearchBooks