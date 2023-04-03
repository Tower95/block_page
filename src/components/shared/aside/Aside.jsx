import React from 'react'

const Aside = () => {
  return (
    <div className='row'>

      <aside>
        <h4>Related posts</h4>

        <ul class="related">
          <li class="related-post">
            <img src="img/related-1.jpg" alt="Person programming" width="75" height="75" />
            <div>
              <a href="#" class="related-link">How to Learn Web Development</a>
              <p class="related-author">By Jonas Schmedtmann</p>
            </div>
          </li>
          <li class="related-post">
            <img src="img/related-2.jpg" alt="Lightning" width="75" height="75" />
            <div>
              <a href="#" class="related-link">The Unknown Powers of CSS</a>
              <p class="related-author">By Jim Dillon</p>
            </div>
          </li>
          <li class="related-post">
            <img src="img/related-3.jpg" alt="JavaScript code on a screen" width="75" height="75" />
            <div>
              <a href="#" class="related-link">Why JavaScript is Awesome</a>
              <p class="related-author">By Matilda</p>
            </div>
          </li>
        </ul>
      </aside>
      
    </div>
  )
}

export default Aside
