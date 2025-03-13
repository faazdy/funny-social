import React from 'react'

function Story({username, pic}) {
  return (
    <div className='story'>
        <div className="img">
            <img src={pic} alt={`pic ${username}`} />
        </div>
        <strong className='story-user'>{username}</strong>
    </div>
  )
}

export default Story
