import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSpeakers from '../components/BannerSpeakers'
import Speaker from '../components/Speaker'
import LeeByron from '../assets/images/LeeByron.webp'
import JeyandranVenugopal from '../assets/images/JeyandranVenugopal.webp'
import SashaSolomon from '../assets/images/SashaSolomon.webp'
import ManojAwasthi from '../assets/images/ManojAwasthi.webp'
import MarcAndreGiroux from '../assets/images/MarcAndreGiroux.webp'
import AdamMiskiewicz from '../assets/images/AdamMiskiewicz.webp'
import ShrutiKapoor from '../assets/images/ShrutiKapoor.webp'


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
                <Speaker 
                    speakerPicture={SashaSolomon}
                    speakerName={'Sasha Solomon'}
                    speakerDescription={''}
                    speakerPosition={'Senior Software Engineer, Twitter'}
                />
                <Speaker 
                    speakerPicture={ManojAwasthi}
                    speakerName={'Manoj Awasthi'}
                    speakerDescription={''}
                    speakerPosition={'VP of Engineering, Tokopedia'}
                />       
                <Speaker 
                    speakerPicture={MarcAndreGiroux}
                    speakerName={'Marc-Andre Giroux'}
                    speakerDescription={''}
                    speakerPosition={'Senior Platform Engineer, Github'}
                />       
                <Speaker 
                    speakerPicture={AdamMiskiewicz}
                    speakerName={'Adam Miskiewicz'}
                    speakerDescription={''}
                    speakerPosition={'Engineer, Airbnb'}
                />       
                <Speaker 
                    speakerPicture={ShrutiKapoor}
                    speakerName={'Shruti Kapoor'}
                    speakerDescription={''}
                    speakerPosition={'Software Engineer, Paypal'}
                />                   
            </section>            
        </div>

    </Layout>
)

export default Speakers