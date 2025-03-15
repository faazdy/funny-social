import React from 'react'
import "../styles/post.css"
import { useState } from 'react'

function Post({profile, image, description, likes}) {
  const [isLike, setIsLike] = useState(false);

  const handleLike = ()=>{
    setIsLike(!isLike)
  }
  return (
    <div className='post'>
      <div className="post-profile">
        <img src={profile.pic} alt={`${profile.name} pic`} />
        <strong className='username-post'>{profile.username}</strong>
      </div>
      <div className="post-image">
        <img src={image} alt="post image" />
      </div>
      <div className="post-info">
        <button className={isLike ? 'like-btn islike' : 'like-btn'} onClick={handleLike}>
          {isLike ? '♥️' : '🖤'} {isLike ? likes + 1 : likes}
          </button>
        <p className='post-description'>{description}</p>
      </div>
    </div>
  )
}

export default Post
