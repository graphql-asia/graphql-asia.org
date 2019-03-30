import React from 'react'
import Speaker from './Speaker'
const SpeakerList = (props) => (
    <div>
    <section id="dayone" className={
        props.isAgenda ?
        'spotlights agenda'
        :
        'spotlights'
    }>
        {
            props.isAgenda === true ?
            <h2>
              <div className="pinkCircle"></div>
              Day 1, 12th April
            </h2>
            :null
        }
        {
            props.isAgenda === true ?
            <Speaker
            speakerPicture={props.data.Register.childImageSharp.fluid}
            speakerName={'Registration + Tea/Coffee'}
            talkTitle={''}
            isAgenda={props.isAgenda}
            time={'08:00 - 10:00'}
            />
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
            speakerPicture={props.data.GraphQLAsiaRajoshiTobias.childImageSharp.fluid}
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
          talkAbstract={'In this talk, my goal is to equip you with steel man arguments for using REST instead of GraphQL so that you are prepared for common counter-arguments to GraphQL adoption. We’ll discuss REST fundamentals and how it compares to GraphQL on multiple dimension with hands-on examples.'}
          talkDescription={`
          “He who knows only his own side of the case knows little of that” -John Stuart Mill

          How will you convince your teammates and customers to use GraphQL? Chances are, they’re already familiar with REST. In this talk, my goal is to equip you with steel man arguments for using REST instead of GraphQL so that you are prepared for common counter-arguments to GraphQL adoption. We’ll discuss REST fundamentals and how it compares to GraphQL on multiple dimension with hands-on examples.
          `}
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
          talkAbstract={'Teams is the fastest growing product of Microsoft. The talk is about how we rewrote the existing Angular+REST based Wiki App into React+Apollo+GraphQL at Microsoft’s scale and we have a story to tell. A story, which I wished someone had told me before I got into leading this effort.'}
          talkDescription={'Teams is the fastest growing product of Microsoft. The talk is about how we rewrote the existing Angular+REST based Wiki App into React+Apollo+GraphQL. This is a full stack rewrite of an app at Microsoft’s scale and we have a story to tell. The story which starts from stack selection, goes through deep diving into it while writing the app and figuring out tonnes of stuff along the way which someone would’t find in docs, blogs, tutorials, courses or anywhere. Think about creating the first ever GraphQL backend in Teams, even getting the leadership to agree was a big task. At Microsoft, we don’t run behind anything shiny, we have to prove that this is the best possible solution. Once, we were done with that we had to figure out the entire stack, how would a C#( also, why not NodeJS?) based GraphQL server interact with Apollo based frontend. You don’t get all the benefits which Apollo provides. Even simple things like schema sharing, type generation (yes! the entire frontend is in typescript), error code sharing are things which you have to figure out yourself. There are the challenges of writing any app in any stack which you have to figure out for this one as well, like, schema finalization, iterative growth, code flow, best practices, unit testing at both ends, integration testing, performance measurement and tuning and a lot of other things. Like for performance tuning, we ran internal experiments, went through the entire source code of Apollo. How to use Apollo Client middle-wares to extract common logic out? Query as component or client.query? Multiple questions ensured a lot of us was left on us to figure out. Also, this app is a co-authoring app, so how do you do locking/unlocking without doing subscription? How do you listen to GraphQL at one end and also respond to some of the old REST endpoints. As if that was not enough, there are services dependency on long poll. I am telling you things mount over each other so quick! These are recipes, one will encounter only when one solves such hard problems. This is a story, which I wished someone had told me before I got into leading this effort.'}
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
          talkTitle={'GraphQL and State Management'}
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
          talkAbstract={'REST has been around for a while now and implementing GraphQL into existing apps take time. Cost of GraphQL is basically the time it is taking for startups to adapt GraphQL. Akanksha is a developer at Kidovators (an eduTech startup for kids) and Akanksha will share her story of adapting GraphQL in her company.'}
          talkDescription={'REST has been around for a while now and implementing GraphQL into existing apps take time. Cost of GraphQL is basically the time it takes for a small startup to adapt GraphQL over the entire stack. I am the solo developer at Kidovators (an eduTech startup for kids) and I want to share my story of adapting Apollo/GraphQL in my company. We’re using Redux+REST for our app but the ever growing features in it forced us to re-think our strategy. There are two main reasons any startup scaling in India should adapt Apollo/GraphQL strategy: 1. API calls don’t increase with the number of features. 2. Eliminating over-fetching saves precious data on client. Like for our case, our app is being used by kids from schools in rural areas across India. This was a great motivator to shift to GraphQL.'}
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
          talkAbstract={'We are building a single GraphQL endpoint @Cleartrip to remove the dependency of the react client with the Rest API. This will avoid the unnecessary over fetching of verbose data and manipulation on the client, making the react client cleaner and faster (3 → 0.2s document load).'}
          talkDescription={`
          We migrated from old legacy code to React Progressive Web App for Cleartrip hotels but the page load time was still significantly high. Problems were two-fold.

          First Problem.
          We were doing multiple API calls and fetching extra data not required by mobile as the API is common across the website and mobile. Our first solution was to create another API for PWA client to give less data. We quickly realized it is not scalable and the turnaround time and maintenance effort for creating a separate version of API for PWA was huge.

          Second Problem.
          The data received was from different API calls and verbose in nature because of which the client ended up in calculating the derived data required to render fields. For example - the logic to filter and sort the data was implemented on the client which was creating unnecessary overhead on the browser.

          Solution.
          GraphQL with Apollo client and Apollo server.

          We created our own GraphQL endpoint whose source of truth will be all the current API’s needed to render hotels. This transformation layer will give the client only that derived data which is required. Not a single thing more or less.

          No manipulation required in client side , all fields given by GraphQL are the formated fields that the client renderer requires.

          The intended audience for this talk is anyone, React specialists or not.

          I’ll start the talk by explaining how GraphQl can make the life of a frontend developer easier by not depending on API versioning system and getting exactly what they need. Then I will briefly explain the Apollo client and server wrapper around GraphQL and how to use it with React.

          I will talk about the implementation of the cursor based pagination using GraphQL which led to 3 → 0.2 s document load time in Cleartrip Hotels list page.

          This whole talk will be justified by real time metrics captured while in development and production.

          `}
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
          talkAbstract={'It’s the exciting time for GraphQL ecosystem. New tools appear almost every day and you may have a few ideas for your own. But working with queries and type system looks scary at first sight. In my talk, I will prove the opposite and demonstrate how you can write a useful tool in <100 lines'}
          talkDescription={`
          It’s the exciting time for GraphQL ecosystem. New tools appear almost every day and you may have a few ideas for your own. But working with queries and type system looks scary at first sight. In my talk, I will prove the opposite and demonstrate how you can write a useful tool in less than 100 lines of code. I will explain a few useful concepts like Introspection, AST, schema and how to use graphql-js utils to work with them.
          `}
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
          talkAbstract={'Discover all the steps & benefits for adding End-to-end Type-Safety to your GraphQL Apps with this demo-based lightning talk. At the end of such, you’ll want to refactor your codebase in order to take all the advantages of GraphQL, TypeScript & React working together on a SpaceX demo 🚀'}
          talkDescription={`Building applications using type-safety is the new challenge nowadays. JavaScript, as most popular dynamic typed language, comes at the cost of making many mistakes (such as typos, misspellings, etc), here’s where TypeScript comes in. Having a strongly typed GraphQL schema as Single Source of Truth, we’d want to keep the data structures in sync over the whole application to reduce the propensity of errors. This talk discusses the tools and best practices for building full type-safe applications with GraphQL, touching on topics like schema-based code generation, type-safe resolvers, client-documents types and more! *All examples will be based on SpaceX data 🚀`}
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
          talkAbstract={'Apollo simplifies data fetching and state management in frontend apps. However, implementing subscriptions for real time updates is hard. Implementing Live Queries with GraphQL and Apollo will make real times updates declarative and easy to maintain.'}
          talkDescription={'Subscriptions are useful to implement real time updates. However, Implementing subscriptions is time consuming and hard to maintain. It also effects performance of app as the number of subscriptions increase. Live queries is an alternative proposal to implement real-time updates. @live directive on a regular GraphQL query makes it a Live Query. Frameworks should take care of keeping the data of live queries in sync between client and server. But Apollo don’t support live queries yet. So, we implemented our own live query system with GraphQL & Apollo. In this talk, I will present how to implement Live Query system that keeps data in sync between Client and server automatically.'}
          twitter={'kiran_abburi'}
          isAgenda={props.isAgenda}
          time={'4:30 - 5:00'}
        />
        <Speaker
          speakerPicture={props.data.UriGoldshtein.childImageSharp.fluid}
          speakerName={'Uri Goldshtein'}
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
          speakerName={'Richard Threlkeld'}
          isLightningTalk={false}
          speakerDescription={'Richard Threlkeld is a Sr. Engineer in AWS Mobile and was the founding member of AWS AppSync and Amplify teams. Previously he worked in the field helping customers build web and mobile solutions with AWS technologies, including data processing for AdTech and Gaming industries. Today, he is responsible for the end to end experience for customers building mobile and web applications in the Amplify Framework.'}
          speakerPosition={'Sr. Engineer, AWS (Mobile)'}
          talkTitle={'Web and native clients – GraphQL design patterns for realtime and offline app architecture'}
          twitter={'undef_obj'}
          isAgenda={props.isAgenda}
          time={'5:30 - 6:00'}
        />


      </section>
      <section id="daytwo"
      className={
        props.isAgenda ?
        'spotlights agenda'
        :
        'spotlights'
    }>
        {
            props.isAgenda === true ?
            <h2>
              <div className="pinkCircle"></div>
              Day 2, 13th April
            </h2>
            :null
        }
        {
            props.isAgenda === true ?
            <Speaker
            speakerPicture={props.data.Register.childImageSharp.fluid}
            speakerName={'Registration + Tea/Coffee'}
            talkTitle={''}
            isAgenda={props.isAgenda}
            time={'08:00 - 10:00'}
            />
            :null
        }
        {
            props.isAgenda === true ?
            <Speaker
                speakerPicture={props.data.AppSync.childImageSharp.fluid}
                speakerName={'Tutor to be announced'}
                speakerDescription={''}
                speakerPosition={''}
                talkTitle={'Workshop: AppSync'}
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
          talkAbstract={'We re-architected a decade-old application in 1 year, and the codebase has been improved drastically. Audiences will see how to refactor “Legacy System” by… - abstracting business logic to BFF - implementing BFF layer with GraphQL (micro services) - handling complex state management and so on.'}
          talkDescription={`
          We re-architected a decade-old application in 1 year, and the codebase has been improved drastically.

          Audiences will see how to refactor “Legacy System” by… - abstracting business logic to BFF - implementing BFF layer with GraphQL (micro services) - handling complex state management - introducing static analysis/CI/CD/Unit Testing/BDD, etc.

          There were NO JavaScript tests at all. jQuery was 1.x (the latest version was 3.x then), and many other libraries are far behind the latest. So many dead codes and not used libraries.

          I believe that, audiences can learn a lot from our experiences & knowledges to refactor Legacy Systems in practices.

          TOC
          This talk will be composed from 3 parts:

          [Introduction] Describe our app architecture & share the background
          [Technical Parts] Explain our new architecture (BFF/GraphQL/React)
          [Theory Parts] Practical lessons for refactoring “Legacy System”
          `}
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
          talkAbstract={'All of us know GraphQL subscriptions are meant to build real time applications. But what’s behind the scenes is rarely talked about. What are subscriptions really? Why do they exist? How do we make a case for subscriptions to our managers? Let’s ride a roller coaster!'}
          talkDescription={`
          Imagine you’ve an application of a Hotel Booking System which is being used by a front desk manager at the Hotel Reception. Now your PM has a requirement and this how the the conversation begins:

          Manager: Hey, we have a page of Booking Details and we want to keep it up to date in real time.
          Developer (Immediate response): Can’t the user refresh the page or can’t we refresh the page at certain interval? 🤔
          Manager: Eyebrows up and weird look!! 😠
          Developer (After scratching his head): since I’ve a GraphQL query for fetching the total number of bookings for a particular hotel I’ll add polling to the query and I’ll be done 🚀
          Manager: Awesome go ahead.

          Developer implements the feature and now comes the time for UAT
          Manager: This doesn’t really feels real time though!
          Developer: Okay I’ll change the polling frequency.
          Manager: Naah still doesn’t feels like real time though!
          Developer: What to do now 🤦🏻‍♂️!! Already messed up with the codebase.
          Developer (To Himself): I think subscriptions can solve this? But I’m not sure. I don’t really know what all it will take? Also I don’t know how to make a case and convince my manager that subscriptions are the one shot go for all these use cases.

          So this talk is about demonstrating what all pieces are required to create a real time application and why do we need all those pieces, so at the end of the day you can go back to work and convince your managers what value subscriptions can bring in to your products.
          `}
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
          talkAbstract={'Gatsby uses GraphQL in a pretty unique way — type inference, automatic filter and connection generation. This talk will be a deep dive in we use GraphQL to support querying data from hundreds of different source plugins. We’ll also look at the future of GraphQL at Gatsby and exciting new features.'}
          talkDescription={'Gatsby (amongst other things) is a static site generator with a performance first mindset. Anyone who has used Gatsby has likely used GraphQL because it’s the default way to consume data in Gatsby! Gatsby uses GraphQL in a pretty unique way though. With hundreds of different data sources with different shapes, it is really hard to scale with a type first model. We solve this with type inference in Gatsby. Taking it a step further, we also create connections automatically and generate filters for rich querying! In this talk, we’ll do a deep dive into how Gatsby uses GraphQL. We’ll look at how we do type inference today. We’ll also look at limitations of our current approach and how we’re looking at solving them so that users and plugin authors have a great inference system with solid extension capabilities. Finally, we’ll discuss our plans for the future of GraphQL in Gatsby and exciting upcoming features.'}
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
        {
            props.isAgenda === true ?
            <Speaker
                speakerPicture={props.data.Hasura.childImageSharp.fluid}
                speakerName={''}
                speakerDescription={''}
                speakerPosition={''}
                talkTitle={'Workshop: Hasura'}
                isLightningTalk={false}
                isAgenda={props.isAgenda}
                time={'1:30 - 3:00'}
            />
            :null
        }
        <Speaker
          speakerPicture={props.data.NavyaAgarwal.childImageSharp.fluid}
          speakerName={'Navya Agarwal'}
          isLightningTalk={false}
          speakerDescription={'Navya is a polyglot developer working with Adobe Experience Cloud. She currently looks after the authentication and orchestration part of the stack with the broad goal of optimizing the performance and scalability of the system. I have tried my hands-on trending technologies and introduced the same in my projects. Over the past years, Navya has dabbled with multiple tech stacks and has worked on various innovative ideas within the team.'}
          speakerPosition={'MTS-II, Adobe'}
          talkTitle={'A glimpse of GraphQL: Front end developers’ life is easy now!'}
          talkAbstract={'Aim is to instill within audience the feeling:”REST APIs are now #RestInPeace APIs Long live GraphQL” by showcasing a case-study.But the journey to GraphQL is not all sunshine & rainbows.The road has certainly been bumpy at times,but in the end we’re really able to recognize the benefits of GraphQL.'}
          talkDescription={`
          In this talk we’ll walk through our journey to GraphQL at Adobe, and highlight a few of our successes and failures along the way.

          Use Case: We at Adobe Experience Cloud, wanted to redefine our customer’s experience, and as part of this redesign we wanted to focus on surfacing more data (but not at the cost of a performance overhead). This new redesign now required a mix of data from different sources to be rendered on the screen and we began to face many problems around performance, documentation, and general ease-of-use. On many pages, we found ourselves making four or five round-trips to the server to fetch the data and nit picking it at the client side in order to render it.

          Solving the problem with GraphQL: After some investigation, we thought of integrating GraphQL to our architecture— we decided to add a GraphQL proxy layer on top of our REST APIs. This was a pretty easy process- we built some utilities around making downstream REST calls to fetch data in our resolver, and wrote up some rules around converting our existing models into GraphQL and within a matter of days were ready to call our GraphQL pilot a success.

          But the real challenges begin now: One of our REST API rolled back to a previous version and suddenly every GraphQL query started failing. And what about caching? The solution to these problems and others that came across as we switched to GraphQL are covered next.
          `}
          twitter={''}
          isAgenda={props.isAgenda}
          time={'2:00 - 2:30'}
        />

        {/* <Speaker
          speakerPicture={props.data.ManaswiniDas.childImageSharp.fluid}
          speakerName={'Manaswini Das'}
          isLightningTalk={true}
          speakerDescription={'Manaswini Das is an undergraduate, pursuing Bachelor\'s in computer science from College of Engineering and Technology, Bhubaneswar, India. She is a former Outreachy intern at Open Humans Foundation. She contributes to open source software and is ambitious of developing futuristic technologies. Her fields of interest include open source and artificial intelligence. Her hobbies include poetry, blogging and basketball. Being a pensive person, she likes diving into the depth of everything that she comes across.'}
          speakerPosition={'Open-source enthusiast'}
          talkTitle={'Hit your target with GraphQL, but not rate limits'}
          talkAbstract={'Manaswini will present how she fetched data from GitHub API without hitting rate limits and API calls along with a walkthrough of her project and the pros of using GraphQl over REST in my project. In addition to this, she will also highlight why she chose to use certain tools and add them as a data source.'}
          twitter={'ManaswiniDas4'}
          isAgenda={props.isAgenda}
          time={'2:30 - 2:38'}
        /> */}
        <Speaker
        speakerPicture={props.data.PeterThomas.childImageSharp.fluid}
          speakerName={'Peter Thomas'}
          isLightningTalk={true}
          speakerDescription={'Peter is a full-stack engineer who enjoys building and mentoring technology teams. An avid open-source enthusiast, Peter\'s first open-source project \'CB2XML\' was created on SourceForge way back in 2004 and incredibly still sees active releases by the current maintainers.  His latest open-source initiative is a web-services test-automation framework called \'Karate\' - that has racked up 1700+ GitHub \"stars\" in less than two years. Peter also features in the TechBeacon list of \"Test Automation Leaders to Follow in 2019\".'}
          speakerPosition={'Distinguished Engineer, Intuit'}
          talkTitle={'GraphQL Test-Automation with Karate'}
          talkAbstract={'Karate is the only open-source tool to combine API test-automation, mocks and performance-testing into a single, unified framework. In this talk, you get to hear from the creator of Karate as to how it greatly simplifies the integration testing of GraphQL. Karate\'s native support for JSON, JsonPath and JavaScript means that you can zoom into interesting parts of your response payloads and perform complex assertions. This is especially important for GraphQL - since responses are highly dynamic, and do not typically conform to a fixed schema. And since you can run tests in parallel - you can dramatically crunch your test execution time.'}
          talkDescription={`
          Karate is a relatively new open-source framework for testing micro-services. But within just two years, Karate’s adoption by the community has been remarkable, as evident from the rising tide of Stack Overflow questions and the 1400+ stars the project currently has on GitHub. Karate was featured as one of the top 5 open-source API testing tools in a blog post on TechBeacon, within just six months of its release. It now regularly turns up in blog-posts, social-media mentions, and believe it or not – even job-listings as a desired skill.

Karate has clearly filled a gap in the industry for a simple yet powerful tool that makes easy – the business of dealing with complex HTTP payloads. The unique mix of a Domain Specific Language (DSL), embedded JavaScript engine and native support for JsonPath and XPath makes Karate a great fit for testing GraphQL.

Karate is the only open-source tool to combine API test-automation, mocks and performance-testing into a single, unified framework. Besides powerful JSON & XML assertions, you can run tests in parallel for speed - which is critical for HTTP API testing.

In this session you will get to hear from the creator of Karate and understand how it greatly simplifies the integration testing of GraphQL scenarios. Authorization headers, complex response assertions, multiple dynamic calls and data-driven testing are just some of the things Karate can handle.
          `}
          twitter={'ptrthomas'}
          isAgenda={props.isAgenda}
          time={'2:40 - 2:45'}
        />

         <Speaker
          speakerPicture={props.data.JonathanJalouzot.childImageSharp.fluid}
          speakerName={'Jonathan Jalouzot'}
          isLightningTalk={true}
          speakerDescription={'Speaker for more than 4 years on many topics such as the webperformance or the application cache, I’m working for over a year with ApolloJs and I advocate GraphQL to the French community through meetups. I animated the GraphQL track during Api Days.'}
          speakerPosition={'Co-Founder, GraphQL Paris'}
          talkTitle={'How to Implement an extension aiming to track and monitor the performance of the GraphQL API'}
          talkAbstract={'How to monitor the performance of your API graph. I propose you to set up an extension in ApolloJS that will allow you to monitor your GraphQl API with your favorite tools such as an ELK'}
          twitter={'CaptainJojo42'}
          isAgenda={props.isAgenda}
          time={'2:45 - 2:58'}
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
          speakerPicture={props.data.AndreasMarek.childImageSharp.fluid}
          speakerName={'Andreas Marek'}
          isLightningTalk={false}
          speakerDescription={'Creator and maintainer of GraphQL Java. Working on GraphQL at Atlassian. Living in Sydney.'}
          speakerPosition={'Senior Developer, Atlassian'}
          talkTitle={'GraphQL execution in-depth'}
          talkAbstract={'You understand GraphQL, but you would like to really know how GraphQL works? So join us a for a in-depth explanation of how a GraphQL query is actually executed.'}
          talkDescription={`
          You understand how to use GraphQL, but you want to go deeper and know how GraphQL really works? You want to understand the challenges of implementing it or maybe implement it yourself?

This means you want to know: - what the GraphQL specification says about execution - why only objects really matter - why non null handling is special - what the implicit dependency graph

Join us for a deep dive on those questions and leave with a in-depth knowledge about GraphQL execution.
`}
          twitter={'andimarek'}
          isAgenda={props.isAgenda}
          time={'3:15 - 3:45'}
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
        {/* <Speaker
          speakerPicture={props.data.AkashManohar.childImageSharp.fluid}
          speakerName={'Akash Manohar'}
          isLightningTalk={true}
          speakerDescription={''}
          speakerPosition={'Director of Engineering, Synup'}
          talkTitle={'Optimizing GraphQL workload'}
          twitter={'HashNuke'}
          isAgenda={props.isAgenda}
          time={'4:15 - 4:23'}
        /> */}
        <Speaker
          speakerPicture={props.data.TimGriesser.childImageSharp.fluid}
          speakerName={'Tim Griesser'}
          isLightningTalk={false}
          speakerDescription={'Tim is a Senior Software Engineer at Cypress.io. An enthusiast of GraphQL and TypeScript, he enjoys building things for the web and collaborating on open source, creating libraries such as Knex.js and GraphQL Nexus. He is passionate about learning from and teaching the best ideas from different languages and frameworks.'}
          speakerPosition={'Senior Software Engineer, cypress.io'}
          talkTitle={'Paving a New Path for GraphQL Schemas'}
          talkAbstract={'Schema-first (SDL) development is common in the JS ecosystem, yet isn’t in most other languages. Why? What if we challenged this “best practice” with something even better - a library with a declarative API and full type safety out of the box - without needing manual type-annotation (even in JS)!'}
          twitter={'tgriesser'}
          isAgenda={props.isAgenda}
          time={'3:45 - 4:15'}
        />
        <Speaker
          speakerPicture={props.data.AmitRana.childImageSharp.fluid}
          speakerName={'Amit Rana'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={'Director of Engineering, Myntra'}
          talkTitle={'Scaling Myntra API Gateway to 30kqps built on Go lang with GraphQL'}
          twitter={''}
          isAgenda={props.isAgenda}
          time={'4:15 - 4:45'}
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
          time={'4:45 - 5:15'}
        />
        <Speaker
          speakerPicture={props.data.GraphQLAsiaRajoshiTobias.childImageSharp.fluid}
          speakerName={'Rajoshi & Tobias'}
          isLightningTalk={false}
          speakerDescription={''}
          speakerPosition={''}
          talkTitle={'Closing'}
          twitter={''}
          isAgenda={props.isAgenda}
          time={'5:15 - 5:30'}
        />
      </section>
      </div>
)

export default SpeakerList
