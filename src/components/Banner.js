import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const date1 = new Date("4/12/2019");
const date2 = new Date();
const timeDiff = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="datedisplay">
          <div className="datetile">{diffDays}</div>
          <div className="daysleft">
            days left
            <div className="whiteCircle">
            </div>
          </div>
        </div>
        <div className="inner">
            <header className="major">
                <h1>GraphQL Asia 2019</h1>
                <h2>
                  BENGALURU
                  <div className="whiteCircle">
                  </div>
                </h2>

            </header>
            <div className="content">
                <p>Asia’s first GraphQL conference is happening <br/>On 12th &amp; 13th April, Bengaluru</p>
                <ul className="actions">
                    <li>
                        <Link className="button bannerButton next" to="/tickets">Get your tickets now</Link>
                        <div className="whiteCircle">
                        </div>
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
