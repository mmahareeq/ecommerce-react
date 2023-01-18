import React from 'react'

import {Link} from 'react-router-dom';
import image2 from '../assests/hero-bcg-2.789918645915c8acb36f.jpeg';
import image1 from '../assests/hero-bcg.a876f19f6786a3aca992.jpeg';

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
                  <img id="img1" src={image1} alt=""/>
                  <img  id="img2" src={image2} alt=""/>
              </div>
           </section> 
        </div>
    )
}
