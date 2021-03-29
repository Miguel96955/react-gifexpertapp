import React from 'react'

export const GifGrideItem = ({ id, title, url }) => {

    console.log( id, title, url )

    return (
        <div className="card animate__animated animate__pulse">
            <img src={ url } alt={ title } />
            <p> { title} </p>
        </div>
    )
}
