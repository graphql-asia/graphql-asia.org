import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Sponsors from '../components/Sponsors'
// import pic11 from '../assets/images/pic11.jpg'

const Sponsor = (props) => (
    <Layout>
        <Helmet>
            <title>Sponsors</title>
            <meta name="description" content="Sponsor" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>
                          Sponsors
                        </h1>
                    </header>
                    <p>Learn from experts responsible for GraphQL’s incredible tooling, speak to architects who have implemented GraphQL at their own organisations, showcase your technology & forge connections with the forward-looking engineers who have made GraphQL the tech to watch in 2020 at GraphQL Asia.</p>
                    <p>Leave us your email and we will get back to you with the sponsorship details. You could also get in touch with us at anubha@hasura.io</p>
                    <h3>
                      Our past sponsors
                    </h3>
                    <Sponsors />
                </div>
            </section>
        </div>

    </Layout>
)

export default Sponsor
