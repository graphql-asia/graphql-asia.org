import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Sponsors from '../components/Sponsors'

import pic01 from '../assets/images/conference-stage.jpg' // https://unsplash.com/photos/bzdhc5b3Bxs
import pic02 from '../assets/images/ticket.jpg' // https://unsplash.com/photos/yB5cYEq7y2U
import pic03 from '../assets/images/BLR_Chancery_Pavilion_facade1_dbr92l.jpg'
import pic04 from '../assets/images/sponsor.jpg' //https://unsplash.com/photos/Dnkr_lmdKi8
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'
import Img from "gatsby-image"

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="GraphQL Asia - Conference"
                    meta={[
                        { name: 'description', content: 'GraphQL Asia is going to be the first Asian GraphQL conference, with 2 full days of everything GraphQL. Location: Bangalore, India Date: April 12-13, 2019' },
                        { name: 'keywords', content: 'GraphQL, Asia, Conference, Tech, Event, India, Bangalore' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Speakers</h3>
                                <p>Our line up</p>
                            </header>
                            <Link to="/speakers" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Tickets</h3>
                                <p>Get your ticket now</p>
                            </header>
                            <a className="link primary" target="_blank" rel="noopener noreferrer" href="https://www.townscript.com/e/graphql-asia-020103/booking"></a>
                            {/* <Link to="/tickets" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Sponsor</h3>
                                <p>Be part of this unique conference</p>
                            </header>
                            <Link to="/sponsor" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Venue</h3>
                                <p>Join us in Bengaluru!</p>
                            </header>
                            <Link to="/venue" className="link primary"></Link>
                        </article>
                        {/* <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>                    
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Sponsors</h2>
                            </header>
                            <Sponsors />     
                            <p>
                            <Link to="/sponsor">Become a sponsor</Link>                 
                            </p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
export const query = graphql`
  query {
    file(relativePath: { eq: "../assets/images/brikl-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`