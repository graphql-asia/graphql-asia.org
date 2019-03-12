import React from 'react'
import Speaker from './Speaker'
const SpeakerList = (props) => (
    <div>
    <section id="two" className={
        props.isAgenda ?
        'spotlights agenda'
        :
        'spotlights'
    }>  
        {
            props.isAgenda === true ?
            <h2>Day 1, 12th April</h2>
            :null
        }
        {
            props.isAgenda === true ?
            <Speaker            
            speakerName={'Registration + Tea/Coffee'}
            talkTitle={''}            
            isAgenda={props.isAgenda}
            time={'09:00 - 10:00'}
            />
            :null
        }
        {
            props.isAgenda === true ?
            <Speaker            
            speakerName={'Welcome by Rajoshi & Tobias'}
            talkTitle={''}            
            isAgenda={props.isAgenda}
            time={'10:00 - 10:20'}
            />
            :null
        }      
        <Speaker
          speakerPicture={props.data.LeeByron.childImageSharp.fluid}
          speakerName={'Lee Byron'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Co-Creator of GraphQL, Senior Software Engineer, Robinhood'}
          talkTitle={'GraphQL Asia Keynote'}
          twitter={'leeb'}
          isAgenda={props.isAgenda}
          time={'10:20 - 11:00'}
        />
        <Speaker
          speakerPicture={props.data.RobertZhu.childImageSharp.fluid}
          speakerName={'Robert Zhu'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'AWS'}
          talkTitle={'Why you should use REST instead of GraphQL'}
          twitter={'rbzhu'}
          isAgenda={props.isAgenda}
          time={'11:00 - 11:30'}
        />
        <Speaker
          speakerPicture={props.data.RajatKhare.childImageSharp.fluid}
          speakerName={'Rajat Khare'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Architect, Intuit'}
          talkTitle={'Running Intuit Quickbooks for 4M customers on Graphql!'}
          twitter={'rajatontwit'}
          isAgenda={props.isAgenda}
          time={'11:30 - 12:00'}
        />    
        <Speaker
          speakerPicture={props.data.TanayPratap.childImageSharp.fluid}
          speakerName={'Tanay Pratap'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Software Engineer, Microsoft'}
          talkTitle={'Rewriting Wiki in Teams with Apollo+GraphQL at Microsoft\'s scale'}
          twitter={'tanaypratap'}
          isAgenda={props.isAgenda}
          time={'12:00 - 12:30'}
        />
        <Speaker
          speakerPicture={props.data.TobiasMeixner.childImageSharp.fluid}
          speakerName={'Tobias Meixner'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Co-Founder & CTO, BrikL'}
          talkTitle={'BrikL - A GraphQL native'}
          twitter={'MeixnerTobias'}
          isAgenda={props.isAgenda}
          time={'12:30 - 1:00'}
        />
        {
            props.isAgenda === true ?
            <Speaker                
                speakerName={'Lunch break'}                                
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'1:00 - 2:00'}
            />
            :null
        }
        <Speaker
          speakerPicture={props.data.ShrutiKapoor.childImageSharp.fluid}
          speakerName={'Shruti Kapoor'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Software Engineer, Paypal'}
          talkTitle={'GraphQL @ Paypal'}
          twitter={'shrutikapoor08'}
          isAgenda={props.isAgenda}
          time={'2:00 - 2:30'}
        />
        <Speaker
          speakerPicture={props.data.AkankshaChoudhary.childImageSharp.fluid}
          speakerName={'Akanksha Choudhary'}
          isLightningTalk={true}
          speakerDescription={''}
          speakerPosition={'Full Stack Web Developer'}
          talkTitle={'The Cost of GraphQL'}
          twitter={'ch_akanksha'}
          isAgenda={props.isAgenda}
          time={'2:30 - 2:38'}
        />
        <Speaker
          speakerPicture={props.data.EeshTyagi.childImageSharp.fluid}
          speakerName={'Eesh Tyagi'}
          isLightningTalk={true}
          speakerDescription={'Lead UI Developer @Cleartrip Takes care of UI UX of different products and innovating usage of upcoming front end technologies. An avid Chelsea football fan and gamer by night.'}
          speakerPosition={'Lead UI, Cleartrip'}
          talkTitle={'Cleartrip reactive journey from 3 to 0.2s using Apollo GraphQL - a Case Study'}
          twitter={'EtEesh'}
          isAgenda={props.isAgenda}
          time={'2:40 - 2:48'}
        />
        <Speaker
          speakerPicture={props.data.IvanGoncharov.childImageSharp.fluid}
          speakerName={'Ivan Goncharov'}
          isLightningTalk={true}
          speakerDescription={''}
          speakerPosition={'GraphQL consultant, apis.guru'}
          talkTitle={'GraphQL Tools are easy or how to write one in less than 100 lines'}
          twitter={'E1Goncharov'}
          isAgenda={props.isAgenda}
          time={'2:50 - 2:58'}
        />
        {
            props.isAgenda === true ?
            <Speaker                
                speakerName={'Coffee break'}                                
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'3:00 - 3:15'}
            />
            :null
        }
        <Speaker
          speakerPicture={props.data.SashaSolomon.childImageSharp.fluid}
          speakerName={'Sasha Solomon'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Senior Software Engineer, Twitter'}
          talkTitle={'Error handling with GraphQL'}
          twitter={'sachee'}
          isAgenda={props.isAgenda}
          time={'3:15 - 3:45'}
        />
        <Speaker
          speakerPicture={props.data.MadhuJahagirdar.childImageSharp.fluid}
          speakerName={'Madhu Jahagirdar'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Principal Architect, Philips'}
          talkTitle={'How GraphQL adds strategic value at every stage of the digital transformation process - stories from Philips Healthcare'}
          twitter={'madhujahagirdar'}
          isAgenda={props.isAgenda}
          time={'3:45 - 4:15'}
        />
        <Speaker
          speakerPicture={props.data.CarlosRufo.childImageSharp.fluid}
          speakerName={'Carlos Rufo'}
          isLightningTalk={false}
          speakerDescription={'OSS Developer 💜 #JavaScript & #GraphQL enthusiast ♻️ ‘The best code is always no code’ believer 🧐 Sporadic stargazer 🌌'}
          speakerPosition={'OSS Developer'}
          talkTitle={'End-to-end Type-Safe GraphQL Apps'}
          twitter={'swcarlosrj'}
          isAgenda={props.isAgenda}
          time={'4:15 - 4:23'}
        />
        
        <Speaker
          speakerPicture={props.data.KiranKumarAbburi.childImageSharp.fluid}
          speakerName={'Kiran Kumar Abburi'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Organiser of @ReactBangalore'}
          talkTitle={'Live Queries implementation with Apollo & GraphQL'}
          twitter={'kiran_abburi'}
          isAgenda={props.isAgenda}          
          time={'4:30 - 5:00'}
        />  
        <Speaker
          speakerPicture={props.data.UriGoldstein.childImageSharp.fluid}
          speakerName={'Uri Goldstein'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'The Guild'}
          talkTitle={'GraphQL where it hurts the most - Practical tools to use GraphQL in the harshest environments'}
          twitter={'urigoldshtein'}
          isAgenda={props.isAgenda}
          time={'5:00 - 5:30'}
        /> 
        
        <Speaker
          speakerPicture={props.data.MarcAndreGiroux.childImageSharp.fluid}
          speakerName={'Marc-Andre Giroux'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Senior Platform Engineer, Github'}
          talkTitle={'GraphQL @ Github'}
          twitter={'__xuorig__'}
          isAgenda={props.isAgenda}
          time={'5:30 - 6:00'}
        />
      </section>
      <section id="three" 
      className={
        props.isAgenda ?
        'spotlights agenda'
        :
        'spotlights'
    }>
        {
            props.isAgenda === true ?
            <h2>Day 2, 13th April</h2>
            :null
        }
        <Speaker
          speakerPicture={props.data.ManojAwasthi.childImageSharp.fluid}
          speakerName={'Manoj Awasthi'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'VP of Engineering, Tokopedia'}
          talkTitle={'GraphQL @ Tokopedia'}
          twitter={'awmanoj'}
          isAgenda={props.isAgenda}
          time={'10:00 - 10:30'}
        />
        <Speaker
          speakerPicture={props.data.TanmaiGopal.childImageSharp.fluid}
          speakerName={'Tanmai Gopal'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Co-Founder, Hasura'}
          talkTitle={'TBD'}
          twitter={'tanmaigo'}
          isAgenda={props.isAgenda}
          time={'10:30 - 11:00'}
        />
        <Speaker
          speakerPicture={props.data.KenjuWagatsuma.childImageSharp.fluid}
          speakerName={'Kenju Wagatsuma'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Software Engineer, Cookpad'}
          talkTitle={'Re-architecture of a decade-old app with BFF/GraphQL'}
          twitter={'itiskj'}
          isAgenda={props.isAgenda}
          time={'11:00 - 11:30'}
        />
        
        <Speaker
          speakerPicture={props.data.KamleshChandnani.childImageSharp.fluid}
          speakerName={'Kamlesh Chandnani'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Associate Frontend Architect, Treebo Hotels'}
          talkTitle={'Subscriptions - A roller coaster ride!'}
          twitter={'_kamlesh_'}
          isAgenda={props.isAgenda}
          time={'11:30 - 12:00'}
        />
        
        {/* <Speaker
          speakerPicture={props.data.AmitRana.childImageSharp.fluid}
          speakerName={'TBD'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'TBD'}
          talkTitle={'TBD'}
          twitter={''}
          isAgenda={props.isAgenda}
          time={'12 - 12:30 '}
        /> */}
        <Speaker
          speakerPicture={props.data.SidharthaChatterjee.childImageSharp.fluid}
          speakerName={'Sidhartha Chatterjee'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'OSS Maintainer, Gatsby'}
          talkTitle={'Gatsby and GraphQL: Today and the Future'}
          twitter={'chatsidhartha'}
          isAgenda={props.isAgenda}
          time={'12:30 - 12:50'}
        />
        {
            props.isAgenda === true ?
            <Speaker                
                speakerName={'Lunch break'}                                
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'12:50 - 2:00'}
            />
            :null
        }
        <Speaker
          speakerPicture={props.data.AmitRana.childImageSharp.fluid}
          speakerName={'Amit Rana'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Director of Engineering, Myntra'}
          talkTitle={'Scaling Myntra API Gateway to 30kqps built on Go lang with GraphQL'}
          twitter={''}
          isAgenda={props.isAgenda}
          time={'2:00 - 2:30'}
        /> 
        <Speaker
          speakerPicture={props.data.ManaswiniDas.childImageSharp.fluid}
          speakerName={'Manaswini Das'}
          isLightningTalk={true}
          speakerDescription={''}
          speakerPosition={'Open-source enthusiast'}
          talkTitle={'Hit your target with GraphQL, but not rate limits'}
          twitter={'ManaswiniDas4'}
          isAgenda={props.isAgenda}
          time={'2:30 - 2:38'}
        />
        {
            props.isAgenda === true ?
            <Speaker                
                speakerName={'Digital Ocean'}                
                isLightningTalk={true}
                isAgenda={props.isAgenda}
                time={'2:40 - 2:45'}
            />
            :null
        }     
        {
            props.isAgenda === true ?
            <Speaker                
                speakerName={'Coffee break'}                                
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'3:00 - 3:15'}
            />
            :null
        }   
        {/* <Speaker
                    speakerPicture={props.data.TBD.childImageSharp.fluid}
                    speakerName={'TBD'}
                    isLightningTalk={false}
                    speakerDescription={''}
                    speakerPosition={'TBD'}
                    talkTitle={'TBD'}
                /> */}
        <Speaker
          speakerPicture={props.data.AndreasMarek.childImageSharp.fluid}
          speakerName={'Andreas Marek'}
          isLightningTalk={false}
          speakerDescription={'Creator and maintainer of GraphQL Java. Working on GraphQL at Atlassian. Living in Sydney.'}
          speakerPosition={'Senior Developer, Atlassian'}
          talkTitle={'GraphQL execution in-depth'}
          twitter={'andimarek'}
          isAgenda={props.isAgenda}
          time={'3:15 - 3:45'}
        />
        <Speaker
          speakerPicture={props.data.RichardThelkard.childImageSharp.fluid}
          speakerName={'Richard Thelkard'}
          isLightningTalk={false}
          speakerDescription={'Richard Threlkeld is a Sr. Engineer in AWS Mobile and was the founding member of AWS AppSync and Amplify teams. Previously he worked in the field helping customers build web and mobile solutions with AWS technologies, including data processing for AdTech and Gaming industries. Today, he is responsible for the end to end experience for customers building mobile and web applications in the Amplify Framework.'}
          speakerPosition={'Sr. Engineer, AWS (Mobile)'}
          talkTitle={'TBD'}
          twitter={'undef_obj'}
          isAgenda={props.isAgenda}
          time={'3:45 - 4:15'}          
        />        
        <Speaker
          speakerPicture={props.data.AkashManohar.childImageSharp.fluid}
          speakerName={'Akash Manohar'}
          isLightningTalk={true}
          speakerDescription={''}
          speakerPosition={'Director of Engineering, Synup'}
          talkTitle={'Notes from a year of GraphQL at Synup'}
          twitter={'HashNuke'}
          isAgenda={props.isAgenda}
          time={'4:15 - 4:23'}
        />
        <Speaker
          speakerPicture={props.data.TimGriesser.childImageSharp.fluid}
          speakerName={'Tim Griesser'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Senior Software Engineer, cypress.io'}
          talkTitle={'Paving a New Path for GraphQL Schemas '}
          twitter={'tgriesser'}
          isAgenda={props.isAgenda}
          time={'4:30 - 5:00'}
        />      
        <Speaker
          speakerPicture={props.data.NavyaAgarwal.childImageSharp.fluid}
          speakerName={'Navya Agarwal'}
          isLightningTalk={false}
          speakerDescription={'A polyglot developer working with Adobe Experience Cloud.'}
          speakerPosition={'MTS-II, Adobe'}
          talkTitle={'A glimpse of GraphQL: Front end developers’ life is easy now!'}
          twitter={''}
          isAgenda={props.isAgenda}
          time={'5:00 - 5:30'}
        />
        <Speaker
          speakerPicture={props.data.AdamMiskiewicz.childImageSharp.fluid}
          speakerName={'Adam Miskiewicz'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Engineer, Airbnb'}
          talkTitle={'GraphQL @ Airbnb'}
          twitter={'skevy'}
          isAgenda={props.isAgenda}
          time={'5:30 - 6:00'}
        />
        
        
        

        

        {/* Day 1 */}
        
     
      </section>
      </div>
)

export default SpeakerList