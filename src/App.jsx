import React from 'react'
import Story from './components/Story'
import Post from './components/Post'
import { profiles } from './data/data'
import { posts } from './data/data'

function App() {
  return (
    <main className='main-body-content'>
      <header>
        <h1>Funny social</h1>
        <div className="options">
          <ul>
            <li>Ja</li>
            <li>JA</li>
            <li>ja</li>
          </ul>
        </div>
      </header>
      <main className='main-content'>
        <section className="stories-container">
          {profiles.map(profile => {
            return <Story key={profile.id} username={profile.username} pic={profile.pic}/>
          })}
        </section>
        <section className='post-container'>
          {posts.map(post => {
            return <Post key={post.id} profile={post.profile} image={post.image} description={post.description} likes={post.likes}/>
          })}
        </section>
      </main>
    </main>
  )
}

export default App
