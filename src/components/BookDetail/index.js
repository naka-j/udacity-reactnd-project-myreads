import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import DetailMain from './DetailMain'
import OtherBooks from './OtherBooks'

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
                <Header book={book} backUrl={this.props.backUrl} onMoveShelf={this.props.onMoveShelf} />
                <div className='book-detail'>
                    {this.props.showDetail && (
                        <div>
                        <DetailMain book={book} />
                        {candidateBooks.length && (
                            <OtherBooks books={candidateBooks} book={book} history={this.props.history} onClickBookItem={this.props.onClickBookItem} />
                        )}
                        </div>
                    )}
                    
                </div>

                
            </div>
        )
    }
}

export default BookDetail