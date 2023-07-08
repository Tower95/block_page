import React from 'react'
import related_1 from '../../../assets/img/related-1.jpg'
import related_2 from '../../../assets/img/related-2.jpg'
import related_3 from '../../../assets/img/related-3.jpg'
import './styles.css'
const Aside = () => {
  return (
    <div className='row'>

      <aside>
        <h4>Related posts </h4>

        <ul className="related">
          <li className="related-post">
            <img src={related_1} alt="Person programming" width="75" height="75" />
            <div>
              <a href="#" className="related-link">How to Learn Web Development</a>
              <p className="related-author">By Jonas Schmedtmann</p>
            </div>
          </li>
          <li className="related-post">
            <img src={related_2} alt="Lightning" width="75" height="75" />
            <div>
              <a href="#" className="related-link">The Unknown Powers of CSS</a>
              <p className="related-author">By Jim Dillon</p>
            </div>
          </li>
          <li className="related-post">
            <img src={related_3} alt="JavaScript code on a screen" width="75" height="75" />
            <div>
              <a href="#" className="related-link">Why JavaScript is Awesome</a>
              <p className="related-author">By Matilda</p>
            </div>
          </li>
        </ul>
      </aside>
      
    </div>
  )
}

export default Aside
