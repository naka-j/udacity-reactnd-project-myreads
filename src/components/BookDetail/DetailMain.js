import React from 'react'

function DetailMain(props) {
    const book = props.book
    return (
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
    )
}

export default DetailMain