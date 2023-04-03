import React from 'react'
import './styles.css'
const Navbar = () => {
  return (
    <div className='container'>
     <header class="main-header clearfix">
      <h1>📘 The Code Magazine</h1>

      <nav class="clearfix">
        {/* <!-- <strong >This is the Navegation</strong> --> */}
        <a href="blog.html">Blog</a>
        <a href="#">Challenges</a>
        <a href="./flexbox.html">Flexbox</a>
        <a href="./css-grid.html">CSS Grid</a>
      </nav>
      <div class="clear-float"></div>
      <button className="like_button">❤️ Like</button>
    </header>
    </div>
  )
}

export default Navbar
