import React from 'react'
import './styles.css'
const Navbar = () => {
  return (
    <header className="main-header clearfix">
      <h1>📘 The Code Magazine</h1>

      <nav className="clearfix">
        <a href="blog.html">Blog</a>
        <a href="#">Challenges</a>
        <a href="./flexbox.html">Flexbox</a>
        <a href="./css-grid.html">CSS Grid</a>
      </nav>
      <div className="clear-float"></div>
      <button className="nav-button-like">❤️ Like</button>
    </header>

  )
}

export default Navbar
