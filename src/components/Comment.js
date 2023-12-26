import React from 'react'

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 m-2 rounded-lg w-3/4'>
            <img alt="logo" className='h-10' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment;


// recursive manner
export const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => {
        return <div>
            <Comment data={comment} key={"comment_" + index} />
            <div className='ml-6 border-l-4'>
                <CommentsList key={index + "_reply"} comments={comment.replies} />
            </div>
        </div>
    })
}