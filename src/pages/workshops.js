import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import LucasMunhoz from '../assets/images/LucasMunhoz.jpg'

const Venue = (props) => (
    <Layout>
        <Helmet>
            <title>GraphQL Workshop @ GraphQL Asia</title>
            <meta name="description" content="We will offer workshops at GraphQL Asia from beginner to advanced workshops." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>GraphQL Workshops</h1>                        
                    </header>
                    <p>We will be offering several workshops alongside the conference from beginner to advanced workshops free to attend with your conference ticket.</p>
                    <h2>1. Intro to GraphQL and Advanced GraphQL concepts</h2>
                    <p>
                        
                    </p>
                    <h2>2. React + GraphQL using Apollo Client and Typescript    
                    </h2>   
                    <p><span className="image left"><img src={LucasMunhoz} alt="Lucas Munhoz" /></span>
                    Lucas Munhoz will be teaching you on getting started with React and GraphQL using Apollo Client.
                    </p>                                     
                    <p>
                    Lucas Munhoz is a full-stack developer and organiser of GraphQL Bangkok meetup.                        
                    </p>
                    <br/>
                    <h2>3. Realtime chat app with GraphQL subscriptions using Hasura.</h2>                    
                    <p>
                        In this workshop you will be building a sample chat app using Hasura GraphQL service to enable real-time subscriptions in your app.
                    </p>
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Venue