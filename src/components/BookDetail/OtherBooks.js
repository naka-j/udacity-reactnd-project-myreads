import React from 'react'

function OtherBooks(props) {
    return (
        <div className='other-books'>
            <ul className='other-books-list'>
                {props.books.filter((b) => b.id !== props.book.id).map((b) => {
                    const bookImageURL =  (b.imageLinks === undefined ? "" : b.imageLinks.thumbnail)
                    return (
                        <li key={b.id} className='candidate'>
                            <div className="book">
                                <div className="book-top">
                                    <div onClick={() => props.onClickBookItem(props.history, b.id)}>
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
    )
}

export default OtherBooks 