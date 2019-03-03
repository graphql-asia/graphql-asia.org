import React from 'react'

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
                        <a className="button next scrolly" target="_blank" rel="noopener noreferrer" href="https://www.townscript.com/e/graphql-asia-020103/booking">Tickets</a>
                        {/* <a href="#one" className="button next scrolly">Read more</a> */}
                    </li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
