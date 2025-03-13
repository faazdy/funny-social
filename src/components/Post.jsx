import React from 'react'
import "../styles/post.css"

function Post({profile, image, description, likes}) {
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
        <button className='like'>{likes}</button>
        <p className='post-description'>{description}</p>
      </div>
    </div>
  )
}

export default Post
