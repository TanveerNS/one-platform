import React,{useState, useEffect} from 'react'
import $ from "jquery";
import PostHeader from './PostHeader'
import PostBody from './PostBody'
const Post = () => {
  const [postActive, setPostActive]=useState(false)
  const activeHandler = () => {
    console.log('hit erer')
    setPostActive(true);
  }

  useEffect(()=>{

  })

  return (
    <div className={`quick-post ${postActive && 'active'} `}>
        <PostHeader />
        <PostBody postActive={postActive} active={activeHandler} />
    </div>
  )
}

export default Post