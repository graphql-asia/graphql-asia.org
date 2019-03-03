import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Sponsors from '../components/Sponsors'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import graphqlconfLogo from '../assets/images/graphqlconf-logo-color.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="GraphQL Asia - Conference"
                    meta={[
                        { name: 'description', content: 'GraphQL Asia is going to be the first Asian GraphQL conference, with 2 full days of everything GraphQL. Location: Bangalore, India Date: April 12-13, 2019' },
                        { name: 'keywords', content: 'GraphQL, Asia, Conference, Tech, Event, India, Bangalore' },
                        { name: 'google-site-verification', content: '0swMWogAzErcNEr2q0dVwCn9zI16r0fMi37eb7S-jz8' },
                    ]}
                >
                </Helmet>                
                <Banner bannerImage={this.props.data.bannerImage.childImageSharp.fluid} />
                <div id="main">
                    <section id="one" className="tiles">
                        <article>
                            <header className="major">
                                <h3>Speakers</h3>
                                <p>Our line up</p>
                            </header>
                            <Link to="/speakers" className="link primary"></Link>
                            <div className="homeBanner">
                                <Img fluid={this.props.data.speakerStageImage.childImageSharp.fluid} />
                            </div>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Tickets</h3>
                                <p>Get your ticket now</p>
                            </header>
                            <a className="link primary" target="_blank" rel="noopener noreferrer" href="https://www.townscript.com/e/graphql-asia-020103/booking"></a>
                            {/* <Link to="/tickets" className="link primary"></Link> */}
                            <div className="homeBanner">
                                <Img fluid={this.props.data.ticketImage.childImageSharp.fluid} />
                            </div>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Sponsor</h3>
                                <p>Be part of this unique conference</p>
                            </header>
                            <Link to="/sponsor" className="link primary"></Link>
                            <div className="homeBanner">
                                <Img fluid={this.props.data.sponsorImage.childImageSharp.fluid} />
                            </div>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Venue</h3>
                                <p>Join us in Bengaluru!</p>
                            </header>
                            <Link to="/venue" className="link primary"></Link>
                            <div className="homeBanner">
                                <Img fluid={this.props.data.venueImage.childImageSharp.fluid} />
                            </div>
                        </article>                       
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
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Partners</h2>
                            </header>         
                            <div>      
                              <h3>GraphQL Conf, Berlin, June 20-21 2019</h3>
                              <ul className="actions">
                                  <li>
                                      <a style={{
                                          border:'none'
                                      }} href="https://www.graphqlconf.org/">
                                      <img style={{
                                          background: 'white',
                                          height: '150px',
                                          width: '150px',
                                          objectFit: 'contain',
                                          padding: '.5em'
                                      }} src={graphqlconfLogo} alt="Graphql Conf" />                                    
                                      </a>
                                  </li>
                              </ul>
                            </div>
                            <p>
                            <a href="#contact-us">Interested to partner with us? Contact us</a>
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
    bannerImage: file(relativePath: { eq: "bengaluru-castle.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # https://unsplash.com/photos/bzdhc5b3Bxs
    speakerStageImage: file(relativePath: { eq: "conference-stage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }  
    # https://unsplash.com/photos/yB5cYEq7y2U 
    ticketImage: file(relativePath: { eq: "ticket.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }  
    venueImage: file(relativePath: { eq: "BLR_Chancery_Pavilion_facade1_dbr92l.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }  
    # https://unsplash.com/photos/Dnkr_lmdKi8 
    sponsorImage: file(relativePath: { eq: "sponsor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }      
  }
`