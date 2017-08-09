import React from 'react'
import ShelfChanger from '../BookItem/ShelfChanger'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className='detail-header'>
            <Link className="close-detail" to={props.backUrl ? props.backUrl : '/'}>Close</Link>
            <ShelfChanger book={props.book} onMoveShelf={props.onMoveShelf} />
        </div>
    )
}

export default Header