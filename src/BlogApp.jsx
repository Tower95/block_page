import React from 'react'
import Navbar from './components/shared/navbar/Navbar'
import Post from './components/shared/post/Post'
import Footer from './components/shared/footer/Footer'
import Aside from './components/shared/aside/Aside'

const BlogApp = () => {
  return (
    <div className='container'>
      <Navbar />
      <Post />
      <Aside />
      <Footer />  
    </div>
  )
}

export default BlogApp
