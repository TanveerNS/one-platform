import React from 'react'

const PostBody = ({active, postActive}) => {
    const postHandler = (e) =>{
        active(e)
    }
    return (
        <div className="quick-post-body">
            <form className="form">
                <div className="form-row">
                    <div className="form-item">
                        <div className="form-textarea">
                            <textarea onClick={postHandler} id="quick-post-text" name={`quick-post-text ${postActive && 'active'}`} placeholder="Hi Marina! Share your post here..."></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PostBody