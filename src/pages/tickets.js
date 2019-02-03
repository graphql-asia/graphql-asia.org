import Iframe from 'react-iframe'

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Tickets = (props) => (
    <Layout>
        <Helmet>
            <title>Tickets</title>
            <meta name="description" content="GraphQL Asia speaker line up" />
        </Helmet>

        {/* <BannerSpeakers /> */}

        <div id="main">
            {/* <section id="one">
                <div className="inner">
                    <header className="major">                    
                    </header>                    
                <p>
                
                </p>
                </div>
            </section> */}
                <Iframe url="https://www.townscript.com/widget/graphql-asia-020103"
                    // width="450px"
                    height="600px"
                    // id="myId"
                    // className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                />
        </div>

    </Layout>
)

export default Tickets