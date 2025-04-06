import React from 'react'

const PostHeader = () => {
    return (
        <div className="quick-post-header">
            <div className='option-items'>
                <div className='option-item active'>
                    <p className="option-item-title">Status</p>
                </div>
                <div className='option-item'>
                    <p className="option-item-title">Blog Post</p>
                </div>
                <div className='option-item'>
                    <p className="option-item-title">Poll</p>
                </div>
            </div>
        </div>
    )
}

export default PostHeader