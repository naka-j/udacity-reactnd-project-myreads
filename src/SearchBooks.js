import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'
import * as ConstantValues from './Constants'

class SearchBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            searchBooksResult: []
        }

        this.search = this.search.bind(this)
    }
    search() {
        if (this.state.query === "") {
            this.setState({searchBooksResult: []})
            return
        }
        BooksAPI.search(this.state.query, 100).then((books) => {
            this.setState({searchBooksResult: books})
            console.log(books)
        })
    }
    updateQuery(query) {
        this.setState({query: query.trim()}, this.search)
    }
        
    render () {
        const query = this.state.query
        const books = this.state.searchBooksResult
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" value={query} onChange={(event) => this.updateQuery(event.currentTarget.value)} placeholder="Search by title or author"/>
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