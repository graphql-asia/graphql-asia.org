import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSpeakers from '../components/BannerSpeakers'
import Speaker from '../components/Speaker'
import LeeByron from '../assets/images/LeeByron.webp'
// import JeyandranVenugopal from '../assets/images/JeyandranVenugopal.webp'
import SashaSolomon from '../assets/images/SashaSolomon.webp'
import ManojAwasthi from '../assets/images/ManojAwasthi.webp'
import MarcAndreGiroux from '../assets/images/MarcAndreGiroux.webp'
import AdamMiskiewicz from '../assets/images/AdamMiskiewicz.webp'
import ShrutiKapoor from '../assets/images/ShrutiKapoor.webp'
import UriGoldstein from '../assets/images/UriGoldstein.png'
import AkankshaChoudhary from '../assets/images/AkankshaChoudhary.jpg'
import AndreasMarek from '../assets/images/AndreasMarek.jpeg'
import CarlosRufo from '../assets/images/CarlosRufo.jpg'
import EeshTyagi from '../assets/images/EeshTyagi.jpg'
import IvanGoncharov from '../assets/images/IvanGoncharov.jpg'
import KamleshChandnani from '../assets/images/KamleshChandnani.jpg'
import KenjuWagatsuma from '../assets/images/KenjuWagatsuma.jpeg'
import KiranKumarAbburi from '../assets/images/KiranKumarAbburi.jpg'
import MadhuJahagirdar from '../assets/images/MadhuJahagirdar.jpeg'
import ManaswiniDas from '../assets/images/ManaswiniDas.jpg'
import NavyaAgarwal from '../assets/images/NavyaAgarwal.jpg'
import RajatKhare from '../assets/images/RajatKhare.jpeg'
import RichardThelkard from '../assets/images/RichardThelkard.jpg'
import RobertZhu from '../assets/images/RobertZhu.jpg'
import SidharthaChatterjee from '../assets/images/SidharthaChatterjee.jpg'
import TanayPratap from '../assets/images/TanayPratap.jpg'
import TanmaiGopal from '../assets/images/TanmaiGopal.jpg'
import TobiasMeixner from '../assets/images/tobias-meixner.jpg'
// import AkashManohar from '../assets/images/'

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
                    talkTitle={'GraphQL Asia Keynote'}
                    twitter={''}
                />
                <Speaker 
                    speakerPicture={RobertZhu}
                    speakerName={'Robert Zhu'}
                    speakerDescription={''}
                    speakerPosition={'AWS'}
                    talkTitle={'Why you should use REST instead of GraphQL'}
                    twitter={'rbzhu'}
                />
                <Speaker 
                    speakerPicture={KiranKumarAbburi}
                    speakerName={'Kiran Kumar Abburi'}
                    speakerDescription={''}
                    speakerPosition={'Organiser of @ReactBangalore'}
                    talkTitle={'How Apollo client works ?'}
                    twitter={'kiran_abburi'}
                />
                <Speaker 
                    speakerPicture={TanayPratap}
                    speakerName={'Tanay Pratap'}
                    speakerDescription={''}
                    speakerPosition={'Microsoft'}
                    talkTitle={'Rewriting Wiki in Teams with Apollo+GraphQL at Microsoft\'s scale'}
                />
                <Speaker 
                    speakerPicture={TobiasMeixner}
                    speakerName={'Tobias Meixner'}
                    speakerDescription={''}
                    speakerPosition={'Co-Founder & CTO, BrikL'}
                    talkTitle={'BrikL - A GraphQL native'}
                />
                <Speaker 
                    speakerPicture={ShrutiKapoor}
                    speakerName={'Shruti Kapoor'}
                    speakerDescription={''}
                    speakerPosition={'Software Engineer, Paypal'}
                    talkTitle={''}
                />
                <Speaker 
                    speakerPicture={AkankshaChoudhary}
                    speakerName={'Akanksha Choudhary'}
                    speakerDescription={''}
                    speakerPosition={'Full Stack Web Developer'}
                    talkTitle={'The Cost of GraphQL'}
                />
                <Speaker 
                    speakerPicture={EeshTyagi}
                    speakerName={'Eesh Tyagi'}
                    speakerDescription={''}
                    speakerPosition={'Cleartrip'}
                    talkTitle={'Cleartrip reactive journey from 3 to 0.2s using Apollo GraphQL - a Case Study'}
                />
                <Speaker 
                    speakerPicture={IvanGoncharov}
                    speakerName={'Ivan Goncharov'}
                    speakerDescription={''}
                    speakerPosition={'GraphQL consultant, apis.guru'}
                    talkTitle={'GraphQL Tools are easy or how to write one in less than 100 lines'}
                />
                <Speaker 
                    speakerPicture={SashaSolomon}
                    speakerName={'Sasha Solomon'}
                    speakerDescription={''}
                    speakerPosition={'Senior Software Engineer, Twitter'}
                    talkTitle={''}
                />
                <Speaker 
                    speakerPicture={MadhuJahagirdar}
                    speakerName={'Madhu Jahagirdar'}
                    speakerDescription={''}
                    speakerPosition={'Principal Architec, Philips'}
                    talkTitle={'How GraphQL adds strategic value at every stage of the digital transformation process - stories from Philips Healthcare'}
                />
                <Speaker 
                    // speakerPicture={AkashManohar}
                    speakerName={'Akash Manohar'}
                    speakerDescription={''}
                    speakerPosition={'Director of Engineering, Synup'}
                    talkTitle={'Notes from a year of GraphQL'}
                />


                
                <Speaker 
                    speakerPicture={MarcAndreGiroux}
                    speakerName={'Marc-Andre Giroux'}
                    speakerDescription={''}
                    speakerPosition={'Senior Platform Engineer, Github'}
                    talkTitle={''}
                />  
            </section>
            <section id="three" className="spotlights">
                <Speaker 
                    speakerPicture={ManojAwasthi}
                    speakerName={'Manoj Awasthi'}
                    speakerDescription={''}
                    speakerPosition={'VP of Engineering, Tokopedia'}
                    talkTitle={''}
                />
                <Speaker 
                    speakerPicture={TanmaiGopal}
                    speakerName={'Tanmai Gopal'}
                    speakerDescription={''}
                    speakerPosition={'Co-Founder, Hasura'}
                    talkTitle={''}
                />
                <Speaker 
                    speakerPicture={RajatKhare}
                    speakerName={'Rajat Khare'}
                    speakerDescription={''}
                    speakerPosition={'Architect, Intuit'}
                    talkTitle={'Running Intuit Quickbooks for 4M customers on Graphql!'}
                />
                <Speaker 
                    speakerPicture={KamleshChandnani}
                    speakerName={'Kamlesh Chandnani'}
                    speakerDescription={''}
                    speakerPosition={'Associate Frontend Architect, Treebo Hotels'}
                    talkTitle={'Subscriptions - A roller coaster ride!'}
                />
                {/* <Speaker 
                    speakerPicture={TBD}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={''}
                    talkTitle={'TBD'}
                />                 */}
                <Speaker 
                    speakerPicture={SidharthaChatterjee}
                    speakerName={'Sidhartha Chatterjee'}
                    speakerDescription={''}
                    speakerPosition={'OSS Maintainer, Gatsby'}
                    talkTitle={'Gatsby and GraphQL: Today and the Future'}
                    twitter={'chatsidhartha'}
                />
                {/* <Speaker 
                    speakerPicture={TBD}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={''}
                    talkTitle={'TBD'}
                />                 */}
                <Speaker 
                    speakerPicture={ManaswiniDas}
                    speakerName={'Manaswini Das'}
                    speakerDescription={''}
                    speakerPosition={'Open-source enthusiast'}
                    talkTitle={'Hit your target with GraphQL, but not rate limits'}
                />
                {/* <Speaker 
                    speakerPicture={TBD}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={'TBD'}
                    talkTitle={''}
                /> */}
                <Speaker 
                    speakerPicture={AndreasMarek}
                    speakerName={'Andreas Marek'}
                    speakerDescription={''}
                    speakerPosition={'Senior Developer, Atlassian'}
                    talkTitle={'GraphQL execution in-depth'}
                />
                <Speaker 
                    speakerPicture={KenjuWagatsuma}
                    speakerName={'Kenju Wagatsuma'}
                    speakerDescription={''}
                    speakerPosition={'Software Engineer, Cookpad'}
                    talkTitle={'Re-architecture of a decade-old app with BFF/GraphQL'}
                />      
                <Speaker 
                    speakerPicture={CarlosRufo}
                    speakerName={'Carlos Rufo'}
                    speakerDescription={''}
                    speakerPosition={'OSS Developer'}
                    talkTitle={'End-to-end Type-Safe GraphQL Apps'}
                />
                {/* <Speaker 
                    speakerPicture={TBD}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={''}
                    talkTitle={'TBD'}
                />                 */}
                <Speaker 
                    speakerPicture={NavyaAgarwal}
                    speakerName={'Navya Agarwal'}
                    speakerDescription={''}
                    speakerPosition={'MTS-II, Adobe'}
                    talkTitle={'A glimpse of GraphQL: Front end developers’ life is easy now!'}
                />                 
                
                <Speaker 
                    speakerPicture={AdamMiskiewicz}
                    speakerName={'Adam Miskiewicz'}
                    speakerDescription={''}
                    speakerPosition={'Engineer, Airbnb'}
                    talkTitle={''}
                />             

                {/* Day 1 */}
                
                <Speaker 
                    speakerPicture={RichardThelkard}
                    speakerName={'Richard Thelkard'}
                    speakerDescription={'Richard Threlkeld is a Sr. Engineer in AWS Mobile and was the founding member of AWS AppSync and Amplify teams. Previously he worked in the field helping customers build web and mobile solutions with AWS technologies, including data processing for AdTech and Gaming industries. Today, he is responsible for the end to end experience for customers building mobile and web applications in the Amplify Framework.'}
                    speakerPosition={'Sr. Engineer, AWS (Mobile)'}
                    talkTitle={''}
                />
                <Speaker 
                    speakerPicture={UriGoldstein}
                    speakerName={'Uri Goldstein'}
                    speakerDescription={''}
                    speakerPosition={'The Guild'}
                    talkTitle={'GraphQL where it hurts the most - Practical tools to use GraphQL in the harshest environments'}
                    twitter={'urigoldshtein'}
                />                                       
            </section>            
        </div>

    </Layout>
)

export default Speakers