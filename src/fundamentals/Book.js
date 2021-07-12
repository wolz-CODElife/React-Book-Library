import React from 'react'

const Book = ({ img, title, author, link }) => {
    // const { img, title, author, link } = props
    return (
        <article>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <a href={link} className="button">Reference >></a>
        </article>
    )
}

export default Book