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
            speakerPicture={props.data.KiranKumarAbburi.childImageSharp.fluid}         
            speakerName={'Kiran Kumar Abburi'}
            talkTitle={'Workshop: Introduction to GraphQL'}            
            isAgenda={props.isAgenda}
            time={'08:30 - 10:00'}
            />
            :null
        }
        {
            props.isAgenda === true ?
            <Speaker        
            speakerPicture={props.data.Register.childImageSharp.fluid}       
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
            speakerPicture={props.data.Rajoshi.childImageSharp.fluid}
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
          speakerDescription={'ex-Facebook, ex-Microsoft'}
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
          speakerDescription={'Rewriting and revamping Microsoft\'s fastest growing app i.e. Microsoft Teams using React and Apollo.'}
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
          speakerDescription={'Co-Organizer @graphqlasia and GraphQL Bangkok, Certified AWS Solution Architect, Serverless & GraphQL fanatic'}
          speakerPosition={'Co-Founder & CTO, BrikL'}
          talkTitle={'BrikL - A GraphQL native'}
          twitter={'MeixnerTobias'}
          isAgenda={props.isAgenda}
          time={'12:30 - 1:00'}
        />
        {
            props.isAgenda === true ?
            <Speaker      
                speakerPicture={props.data.Lunch.childImageSharp.fluid}          
                speakerName={'Lunch break'}                                
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'1:00 - 2:00'}
            />
            :null
        }
        {
            props.isAgenda === true ?
            <Speaker      
                speakerPicture={props.data.LucasMunhoz.childImageSharp.fluid}          
                speakerName={'Lucas Munhoz'}   
                speakerDescription={''}
                speakerPosition={''}
                talkTitle={'Workshop: React + GraphQL'}                             
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'1:30 - 3:00'}
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
          speakerDescription={'Akanksha Choudhary is a Tech Lead at Kidovators, developing technology to facilitate 21st Century skills learning.'}
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
          speakerDescription={'Ivan is the maintainer of graphql-js and active contributor to GraphQL Specification.'}
          speakerPosition={'GraphQL consultant, apis.guru'}
          talkTitle={'GraphQL Tools are easy or how to write one in less than 100 lines'}
          twitter={'E1Goncharov'}
          isAgenda={props.isAgenda}
          time={'2:50 - 2:58'}
        />
        {
            props.isAgenda === true ?
            <Speaker             
                speakerPicture={props.data.Coffee.childImageSharp.fluid}          
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
          speakerDescription={'Carlos is a passionate developer and speaker aficionado. While he codes with different B/FE techs, his go-to for every project is his crush: GraphQL. He is very active in the GraphQL ecosystem where he has collaborated with across numerous internal and external projects, such as HowToGraphQL & SpaceX GraphQL API. In his free time he loves stargazing & rocket science, but mostly, help to build a community where everyone could learn about everything!'}
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
          speakerDescription={'Kiran Abburi is a consultant who primarily work with Reactjs and GraphQL. He also organizes Reactjs Bangalore meetup group.'}
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
          speakerDescription={'Uri is the founder of The Guild, a group of open source developers working around the world to help create important open source libraries, mostly around GraphQL and to support large companies go through successful technological transformations.'}
          speakerPosition={'The Guild'}
          talkTitle={'GraphQL where it hurts the most - Practical tools to use GraphQL in the harshest environments'}
          twitter={'urigoldshtein'}
          isAgenda={props.isAgenda}
          time={'5:00 - 5:30'}
        /> 
        <Speaker
          speakerPicture={props.data.RichardThelkard.childImageSharp.fluid}
          speakerName={'Richard Thelkard'}
          isLightningTalk={false}
          speakerDescription={'Richard Threlkeld is a Sr. Engineer in AWS Mobile and was the founding member of AWS AppSync and Amplify teams. Previously he worked in the field helping customers build web and mobile solutions with AWS technologies, including data processing for AdTech and Gaming industries. Today, he is responsible for the end to end experience for customers building mobile and web applications in the Amplify Framework.'}
          speakerPosition={'Sr. Engineer, AWS (Mobile)'}
          talkTitle={'Web and native clients – GraphQL design patterns for realtime and offline app architecture'}
          twitter={'undef_obj'}
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
        {
            props.isAgenda === true ?
            <Speaker      
                // speakerPicture={props.data.LucasMunhoz.childImageSharp.fluid}          
                speakerName={'Tutor to be announced'}   
                speakerDescription={''}
                speakerPosition={''}
                talkTitle={'Workshop: Advanced GraphQL'}                             
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'8:30 - 10:00'}
            />
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
          speakerDescription={'Developing the online advertising server.'}
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
          speakerDescription={'Sidhartha is a full stack developer based out of Mumbai. He\'s part of the Gatsby core OSS team. He\'s worked with several companies in the past including Cleartrip and Insider and has helped them build React apps, PWAs and Node.js microservices. In his free time, he likes scuba diving in the deep seas, playing his guitar and walking his dog.'}
          speakerPosition={'OSS Maintainer, Gatsby'}
          talkTitle={'Gatsby and GraphQL: Today and the Future'}
          twitter={'chatsidhartha'}
          isAgenda={props.isAgenda}
          time={'12:30 - 12:55'}
        />
        {
            props.isAgenda === true ?
            <Speaker         
                speakerPicture={props.data.DigitalOcean.childImageSharp.fluid}          
                speakerName={'Digital Ocean'}                
                isLightningTalk={true}
                isAgenda={props.isAgenda}
                time={'12:55 - 1:00'}
            />
            :null
        }     
        {
            props.isAgenda === true ?
            <Speaker          
                speakerPicture={props.data.Lunch.childImageSharp.fluid}                
                speakerName={'Lunch break'}                                
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'1:00 - 2:00'}
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
          speakerDescription={'Manaswini Das is an undergraduate, pursuing Bachelor\'s in computer science from College of Engineering and Technology, Bhubaneswar, India. She is a former Outreachy intern at Open Humans Foundation. She contributes to open source software and is ambitious of developing futuristic technologies. Her fields of interest include open source and artificial intelligence. Her hobbies include poetry, blogging and basketball. Being a pensive person, she likes diving into the depth of everything that she comes across.'}
          speakerPosition={'Open-source enthusiast'}
          talkTitle={'Hit your target with GraphQL, but not rate limits'}
          twitter={'ManaswiniDas4'}
          isAgenda={props.isAgenda}
          time={'2:30 - 2:38'}
        />
        {/* <Speaker
          speakerPicture={props.data.ManaswiniDas.childImageSharp.fluid}
          speakerName={'Manaswini Das'}
          isLightningTalk={true}
          speakerDescription={'Manaswini Das is an undergraduate, pursuing Bachelor\'s in computer science from College of Engineering and Technology, Bhubaneswar, India. She is a former Outreachy intern at Open Humans Foundation. She contributes to open source software and is ambitious of developing futuristic technologies. Her fields of interest include open source and artificial intelligence. Her hobbies include poetry, blogging and basketball. Being a pensive person, she likes diving into the depth of everything that she comes across.'}
          speakerPosition={'Open-source enthusiast'}
          talkTitle={'Hit your target with GraphQL, but not rate limits'}
          twitter={'ManaswiniDas4'}
          isAgenda={props.isAgenda}
          time={'2:30 - 2:38'}
        /> */}
        
        {
            props.isAgenda === true ?
            <Speaker                
                speakerPicture={props.data.Coffee.childImageSharp.fluid}          
                speakerName={'Coffee break'}                                
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'3:00 - 3:15'}
            />
            :null
        }
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
          speakerPicture={props.data.JonathanJalouzot.childImageSharp.fluid}
          speakerName={'Jonathan Jalouzot'}
          isLightningTalk={false}
          speakerDescription={'Speaker for more than 4 years on many topics such as the webperformance or the application cache, I’m working for over a year with ApolloJs and I advocate GraphQL to the French community through meetups. I animated the GraphQL track during Api Days.'}
          speakerPosition={'Co-Founder, GraphQL Paris'}
          talkTitle={'How to Implement an extension aiming to track and monitor the performance of the GraphQL API'}
          talkAbstract={'How to monitor the performance of your API graph. I propose you to set up an extension in ApolloJS that will allow you to monitor your GraphQl API with your favorite tools such as an ELK'}
          twitter={'CaptainJojo42'}
          isAgenda={props.isAgenda}
          time={'3:47 - 3:55'}
        />        
        {/* <Speaker
          speakerPicture={props.data.JonathanJalouzot.childImageSharp.fluid}
          speakerName={'Jonathan Jalouzot '}
          isLightningTalk={false}
          speakerDescription={'Speaker for more than 4 years on many topics such as the webperformance or the application cache, I’m working for over a year with ApolloJs and I advocate GraphQL to the French community through meetups. I animated the GraphQL track during Api Days.'}
          speakerPosition={'Co-Founder, GraphQL Paris'}
          talkTitle={'How to Implement an extension aiming to track and monitor the performance of the GraphQL API.'}
          talkAbstract={'How to monitor the performance of your API graph. I propose you to set up an extension in ApolloJS that will allow you to monitor your GraphQl API with your favorite tools such as an ELK'}
          twitter={'CaptainJojo42'}
          isAgenda={props.isAgenda}
          time={'3:47 - 3:55'}
        />         */}
        <Speaker
          speakerPicture={props.data.AkashManohar.childImageSharp.fluid}
          speakerName={'Akash Manohar'}
          isLightningTalk={true}
          speakerDescription={''}
          speakerPosition={'Director of Engineering, Synup'}
          talkTitle={'Optimizing GraphQL workload'}
          twitter={'HashNuke'}
          isAgenda={props.isAgenda}
          time={'4:15 - 4:23'}
        />
        <Speaker
          speakerPicture={props.data.TimGriesser.childImageSharp.fluid}
          speakerName={'Tim Griesser'}
          isLightningTalk={false}
          speakerDescription={'Tim is a Senior Software Engineer at Cypress.io. An enthusiast of GraphQL and TypeScript, he enjoys building things for the web and collaborating on open source, creating libraries such as Knex.js and GraphQL Nexus. He is passionate about learning from and teaching the best ideas from different languages and frameworks.'}
          speakerPosition={'Senior Software Engineer, cypress.io'}
          talkTitle={'Paving a New Path for GraphQL Schemas'}
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
      </section>
      </div>
)

export default SpeakerList