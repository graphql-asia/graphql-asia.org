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
            <section style={{
                position: 'relative'
            }} id="one">
                <div className="inner">
                    <header className="major">                    
                    <h1>Tickets</h1>
                    </header>                                    
                </div>
            </section>  
            <div style={{
                    height: '600px',
                    fontSize: '3rem',
                    textAlign: 'center',
                    position: 'absolute',
                    width: '100%',
                    top: '400px',
                    zIindex: 0
                }}>Loading...</div>              
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