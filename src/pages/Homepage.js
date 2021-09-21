import React from 'react'

import {Link} from 'react-router-dom'
export default function Homepage() {
    return (
        <div>
           <section className="section-body">
              <div className="section-info">
                  <h2>Design Your Comfort Zone</h2>
                  <p>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.Iusto,
                    at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                     odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                  </p>
                  <Link to="/products">
                      <button style={{'cursor':'pointer'}}>
                        SHOP NOW
                     </button>
                  </Link>
              </div>
              <div >
                  <img id="img1" src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg" alt=""/>
                  <img  id="img2" src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg" alt=""/>
              </div>
           </section> 
        </div>
    )
}
