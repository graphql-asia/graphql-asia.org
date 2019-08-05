import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic03 from '../assets/images/BLR_Chancery_Pavilion_facade1_dbr92l.jpg'

const Venue = (props) => (
    <Layout>
        <Helmet>
            <title>Venue - GraphQL Asia</title>
            <meta name="description" content="Join us in Bengaluru" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>
                          Join us in Bengaluru!
                        </h1>
                        <h3>The conference will take place in Bengaluru.</h3>
                    </header>

                    <span className="image medium"><img src={pic03} alt="Chancery Pavillion" /></span>
                    <p>Named the most dynamic city by the World Economic Forum in 2017, Bengaluru is home to the 3rd highest number of tech startups globally, including unicorns such as Flipkart, Ola & Swiggy as well as several large MNCs and enterprises.</p>
                    <p>If you would like to stay at the hotel, please do reach out to the bookings team with your conference ticket for a <strong>special conference discount!</strong></p>
                    <p>
                    We will be soon updating hotel suggestions curated for 2020 conference attendees.
                    </p> 
                </div>
            </section>
        </div>

    </Layout>
)

export default Venue
