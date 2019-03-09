import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>GraphQL Asia</h1><h2>Asia's first GraphQL conference</h2>
            </header>
            <div className="content">                
                <p>12th &amp; 13th April, Bangalore, India</p>
                <ul className="actions">
                    <li>
                        <Link className="button next" to="/tickets">Tickets</Link>
                        {/* <a className="button next scrolly" target="_blank" rel="noopener noreferrer" href="https://www.townscript.com/e/graphql-asia-020103/booking">Tickets</a> */}
                        {/* <a href="#one" className="button next scrolly">Read more</a> */}
                    </li>                   
                </ul>
            </div>                        
        </div>
        <div style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'block',
            zIndex: 0
        }}>
        <Img fluid={props.bannerImage} backgroundColor={'#777777'} />
        </div>        
    </section>
)

export default Banner
