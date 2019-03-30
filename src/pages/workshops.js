import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import LucasMunhoz from '../assets/images/LucasMunhoz.jpg'
import Kiran from '../assets/images/KiranKumarAbburi.jpg'
import GerardSans from '../assets/images/GerardSans.jpg'
import Hasura from '../assets/images/Hasura.png'
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
                    <div className="grid-wrapper">                        
                        <div className="col-3">
                        <span className="image fit"><img src={Kiran} alt="Kiran" /></span>
                        </div>
                        <div className="col-9">                            
                            <strong>Day 1 - 8:30 - 10:00</strong>
                            <p>
                                This workshop will be held by Kiran, Co-Organiser of React Bangalore, giving an introduction to GraphQL and advanced concepts of GraphQL.
                            </p>
                        </div>
                    </div>
                    <h2>2. React + GraphQL using Apollo Client and Typescript    
                    </h2> 
                    <div className="grid-wrapper">                        
                        <div className="col-3">
                        <span className="image fit"><img src={LucasMunhoz} alt="Lucas Munhoz" /></span>
                        </div>
                        <div className="col-9">                            
                        <strong>Day 1 - 1:30 - 3:00</strong>  
                            <p>
                            Lucas Munhoz will be teaching you on getting started with React and GraphQL using Apollo Client.
                            </p>
                            <p>
                    Lucas Munhoz is a full-stack developer and organiser of GraphQL Bangkok meetup.
                    </p>
                        </div>
                    </div>
                    <br/>                    
                    <h2>3. AppSync</h2>     
                    <div className="grid-wrapper">                        
                        <div className="col-3">
                        <span className="image fit"><img src={GerardSans} alt="AppSync" /></span>
                        </div>
                        <div className="col-9">                            
                            <strong>Day 2 - 8:30 - 10:00</strong>  
                            <p>    
                            In this workshop we will be introducing AWS Amplify a modern toolchain, libraries and UI components to build modern Fullstack Serverless Apps. You will be building a fully featured Application from development to production. 
                            </p>
                        </div>
                    </div>
                    <h2>4. Realtime chat app with GraphQL subscriptions using Hasura.</h2>                    
                    <div className="grid-wrapper">                        
                        <div className="col-3">
                        <span className="image fit"><img src={Hasura} alt="Lucas Munhoz" /></span>
                        </div>
                        <div className="col-9">                            
                        <strong>Day 2 - 1:30 - 3:00</strong>  
                            <p>
                                In this workshop you will be building a sample chat app using Hasura GraphQL service to enable real-time subscriptions in your app.
                            </p>
                        </div>
                    </div>                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Venue