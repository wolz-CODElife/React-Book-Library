import React from 'react'

// CSS
import './Booklist.css'

// JS
import { books } from './books'
import Book from './Book'

const Booklist = () => {
    return (
        <>
            <h1 className="siteTitle">Books Library</h1>
            <section>
                {books.map((book) => {
                    return (
                        <Book key={book.id} {...book} />
                    )
                })}
            </section>
        </>
    )
}


export default Booklist
