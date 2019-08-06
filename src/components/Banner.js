import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <div className="presents"><a href="https://hasura.io/">Hasura</a> presents:</div>
            <header className="major">
                <h1>GraphQL Asia 2020</h1>
                <h2>
                  BENGALURU
                  <div className="whiteCircle">
                  </div>
                </h2>

            </header>
            <div className="content">
                <p>Second edition of the GraphQL Asia conference is happening<br/>On 21st &amp; 22nd February, Bengaluru</p>
                <ul className="actions">
                    <li>
                        <a className="button" color={'#FFFFFF'} href="https://www.twitter.com/graphqlasia">Follow us on Twitter</a>
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