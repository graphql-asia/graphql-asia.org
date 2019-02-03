import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSpeakers from '../components/BannerSpeakers'
import Speaker from '../components/Speaker'
import LeeByron from '../assets/images/LeeByron.webp'
import JeyandranVenugopal from '../assets/images/JeyandranVenugopal.webp'
import pic10 from '../assets/images/pic10.jpg'

const Speakers = (props) => (
    <Layout>
        <Helmet>
            <title>Speakers - GraphQL Asia</title>
            <meta name="description" content="GraphQL Asia speaker line up" />
        </Helmet>

        <BannerSpeakers />

        <div id="main">
            {/* <section id="one">
                <div className="inner">
                    <header className="major">                    
                    </header>                    
                <p>
                
                </p>
                </div>
            </section> */}
            <section id="two" className="spotlights">
                <Speaker 
                    speakerPicture={LeeByron}
                    speakerName={'Lee Byron'}
                    speakerDescription={''}
                    speakerPosition={'Co-Creator of GraphQL, Senior Software Engineer, Robinhood'}
                />    
                <Speaker 
                    speakerPicture={JeyandranVenugopal}
                    speakerName={'Jeyandran Venugopal'}
                    speakerDescription={''}
                    speakerPosition={'CTO, Myntra'}
                />                   
            </section>            
        </div>

    </Layout>
)

export default Speakers