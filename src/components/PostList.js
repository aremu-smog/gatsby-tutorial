import React from 'react'

const PostList = ({title, date}) => {
    return(
        <li>
            <h2>{title}</h2>
            <p>{date}</p>
        </li>
    )
}

export default PostList