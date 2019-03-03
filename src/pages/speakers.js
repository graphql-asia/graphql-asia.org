import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSpeakers from '../components/BannerSpeakers'
import Speaker from '../components/Speaker'


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
          speakerPicture={props.data.LeeByron.childImageSharp.fluid}
          speakerName={'Lee Byron'}
          speakerDescription={''}
          speakerPosition={'Co-Creator of GraphQL, Senior Software Engineer, Robinhood'}
          talkTitle={'GraphQL Asia Keynote'}
          twitter={'leeb'}
        />
        <Speaker
          speakerPicture={props.data.RobertZhu.childImageSharp.fluid}
          speakerName={'Robert Zhu'}
          speakerDescription={''}
          speakerPosition={'AWS'}
          talkTitle={'Why you should use REST instead of GraphQL'}
          twitter={'rbzhu'}
        />
        <Speaker
          speakerPicture={props.data.KiranKumarAbburi.childImageSharp.fluid}
          speakerName={'Kiran Kumar Abburi'}
          speakerDescription={''}
          speakerPosition={'Organiser of @ReactBangalore'}
          talkTitle={'How Apollo client works ?'}
          twitter={'kiran_abburi'}
        />
        <Speaker
          speakerPicture={props.data.TanayPratap.childImageSharp.fluid}
          speakerName={'Tanay Pratap'}
          speakerDescription={''}
          speakerPosition={'Software Engineer, Microsoft'}
          talkTitle={'Rewriting Wiki in Teams with Apollo+GraphQL at Microsoft\'s scale'}
          twitter={'tanaypratap'}
        />
        <Speaker
          speakerPicture={props.data.TobiasMeixner.childImageSharp.fluid}
          speakerName={'Tobias Meixner'}
          speakerDescription={''}
          speakerPosition={'Co-Founder & CTO, BrikL'}
          talkTitle={'BrikL - A GraphQL native'}
          twitter={'MeixnerTobias'}
        />
        <Speaker
          speakerPicture={props.data.ShrutiKapoor.childImageSharp.fluid}
          speakerName={'Shruti Kapoor'}
          speakerDescription={''}
          speakerPosition={'Software Engineer, Paypal'}
          talkTitle={''}
          twitter={'shrutikapoor08'}
        />
        <Speaker
          speakerPicture={props.data.AkankshaChoudhary.childImageSharp.fluid}
          speakerName={'Akanksha Choudhary'}
          speakerDescription={''}
          speakerPosition={'Full Stack Web Developer'}
          talkTitle={'The Cost of GraphQL'}
          twitter={'ch_akanksha'}
        />
        <Speaker
          speakerPicture={props.data.EeshTyagi.childImageSharp.fluid}
          speakerName={'Eesh Tyagi'}
          speakerDescription={''}
          speakerPosition={'Lead UI, Cleartrip'}
          talkTitle={'Cleartrip reactive journey from 3 to 0.2s using Apollo GraphQL - a Case Study'}
          twitter={'EtEesh'}
        />
        <Speaker
          speakerPicture={props.data.IvanGoncharov.childImageSharp.fluid}
          speakerName={'Ivan Goncharov'}
          speakerDescription={''}
          speakerPosition={'GraphQL consultant, apis.guru'}
          talkTitle={'GraphQL Tools are easy or how to write one in less than 100 lines'}
          twitter={'E1Goncharov'}
        />
        <Speaker
          speakerPicture={props.data.SashaSolomon.childImageSharp.fluid}
          speakerName={'Sasha Solomon'}
          speakerDescription={''}
          speakerPosition={'Senior Software Engineer, Twitter'}
          talkTitle={'sachee'}
        />
        <Speaker
          speakerPicture={props.data.MadhuJahagirdar.childImageSharp.fluid}
          speakerName={'Madhu Jahagirdar'}
          speakerDescription={''}
          speakerPosition={'Principal Architec, Philips'}
          talkTitle={'How GraphQL adds strategic value at every stage of the digital transformation process - stories from Philips Healthcare'}
          twitter={'madhujahagirdar'}
        />
        <Speaker
          // speakerPicture={props.data.AkashManohar.childImageSharp.fluid}
          speakerName={'Akash Manohar'}
          speakerDescription={''}
          speakerPosition={'Director of Engineering, Synup'}
          talkTitle={'Notes from a year of GraphQL'}
          twitter={'HashNuke'}
        />



        <Speaker
          speakerPicture={props.data.MarcAndreGiroux.childImageSharp.fluid}
          speakerName={'Marc-Andre Giroux'}
          speakerDescription={''}
          speakerPosition={'Senior Platform Engineer, Github'}
          talkTitle={''}
          twitter={'__xuorig__'}
        />
      </section>
      <section id="three" className="spotlights">
        <Speaker
          speakerPicture={props.data.ManojAwasthi.childImageSharp.fluid}
          speakerName={'Manoj Awasthi'}
          speakerDescription={''}
          speakerPosition={'VP of Engineering, Tokopedia'}
          talkTitle={''}
          twitter={'awmanoj'}
        />
        <Speaker
          speakerPicture={props.data.TanmaiGopal.childImageSharp.fluid}
          speakerName={'Tanmai Gopal'}
          speakerDescription={''}
          speakerPosition={'Co-Founder, Hasura'}
          talkTitle={'tanmaigo'}
        />
        <Speaker
          speakerPicture={props.data.RajatKhare.childImageSharp.fluid}
          speakerName={'Rajat Khare'}
          speakerDescription={''}
          speakerPosition={'Architect, Intuit'}
          talkTitle={'Running Intuit Quickbooks for 4M customers on Graphql!'}
          twitter={'rajatontwit'}
        />
        <Speaker
          speakerPicture={props.data.KamleshChandnani.childImageSharp.fluid}
          speakerName={'Kamlesh Chandnani'}
          speakerDescription={''}
          speakerPosition={'Associate Frontend Architect, Treebo Hotels'}
          talkTitle={'Subscriptions - A roller coaster ride!'}
          twitter={'_kamlesh_'}
        />
        {/* <Speaker
                    speakerPicture={props.data.TBD.childImageSharp.fluid}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={''}
                    talkTitle={'TBD'}
                />                 */}
        <Speaker
          speakerPicture={props.data.SidharthaChatterjee.childImageSharp.fluid}
          speakerName={'Sidhartha Chatterjee'}
          speakerDescription={''}
          speakerPosition={'OSS Maintainer, Gatsby'}
          talkTitle={'Gatsby and GraphQL: Today and the Future'}
          twitter={'chatsidhartha'}
        />
        {/* <Speaker
                    speakerPicture={props.data.TBD.childImageSharp.fluid}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={''}
                    talkTitle={'TBD'}
                />                 */}
        <Speaker
          speakerPicture={props.data.ManaswiniDas.childImageSharp.fluid}
          speakerName={'Manaswini Das'}
          speakerDescription={''}
          speakerPosition={'Open-source enthusiast'}
          talkTitle={'Hit your target with GraphQL, but not rate limits'}
          twitter={'ManaswiniDas4'}
        />
        {/* <Speaker
                    speakerPicture={props.data.TBD.childImageSharp.fluid}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={'TBD'}
                    talkTitle={''}
                /> */}
        <Speaker
          speakerPicture={props.data.AndreasMarek.childImageSharp.fluid}
          speakerName={'Andreas Marek'}
          speakerDescription={''}
          speakerPosition={'Senior Developer, Atlassian'}
          talkTitle={'GraphQL execution in-depth'}
          twitter={'andimarek'}
        />
        <Speaker
          speakerPicture={props.data.KenjuWagatsuma.childImageSharp.fluid}
          speakerName={'Kenju Wagatsuma'}
          speakerDescription={''}
          speakerPosition={'Software Engineer, Cookpad'}
          talkTitle={'Re-architecture of a decade-old app with BFF/GraphQL'}
          twitter={'itiskj'}
        />
        <Speaker
          speakerPicture={props.data.CarlosRufo.childImageSharp.fluid}
          speakerName={'Carlos Rufo'}
          speakerDescription={''}
          speakerPosition={'OSS Developer'}
          talkTitle={'End-to-end Type-Safe GraphQL Apps'}
          twitter={'swcarlosrj'}
        />
        {/* <Speaker
                    speakerPicture={props.data.TBD.childImageSharp.fluid}
                    speakerName={'TBD'}
                    speakerDescription={''}
                    speakerPosition={''}
                    talkTitle={'TBD'}
                />                 */}
        <Speaker
          speakerPicture={props.data.NavyaAgarwal.childImageSharp.fluid}
          speakerName={'Navya Agarwal'}
          speakerDescription={''}
          speakerPosition={'MTS-II, Adobe'}
          talkTitle={'A glimpse of GraphQL: Front end developers’ life is easy now!'}
        />

        <Speaker
          speakerPicture={props.data.AdamMiskiewicz.childImageSharp.fluid}
          speakerName={'Adam Miskiewicz'}
          speakerDescription={''}
          speakerPosition={'Engineer, Airbnb'}
          talkTitle={''}
          twitter={'skevy'}
        />

        {/* Day 1 */}

        <Speaker
          speakerPicture={props.data.RichardThelkard.childImageSharp.fluid}
          speakerName={'Richard Thelkard'}
          speakerDescription={'Richard Threlkeld is a Sr. Engineer in AWS Mobile and was the founding member of AWS AppSync and Amplify teams. Previously he worked in the field helping customers build web and mobile solutions with AWS technologies, including data processing for AdTech and Gaming industries. Today, he is responsible for the end to end experience for customers building mobile and web applications in the Amplify Framework.'}
          speakerPosition={'Sr. Engineer, AWS (Mobile)'}
          talkTitle={''}
          twitter={'undef_obj'}
        />
        <Speaker
          speakerPicture={props.data.UriGoldstein.childImageSharp.fluid}
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






export const query = graphql`
  query {
    LeeByron: file(relativePath: { eq: "LeeByron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SashaSolomon: file(relativePath: { eq: "SashaSolomon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ManojAwasthi: file(relativePath: { eq: "ManojAwasthi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MarcAndreGiroux: file(relativePath: { eq: "MarcAndreGiroux.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AdamMiskiewicz: file(relativePath: { eq: "AdamMiskiewicz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ShrutiKapoor: file(relativePath: { eq: "ShrutiKapoor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    UriGoldstein: file(relativePath: { eq: "UriGoldstein.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AkankshaChoudhary: file(relativePath: { eq: "AkankshaChoudhary.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AndreasMarek: file(relativePath: { eq: "AndreasMarek.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CarlosRufo: file(relativePath: { eq: "CarlosRufo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    EeshTyagi: file(relativePath: { eq: "EeshTyagi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IvanGoncharov: file(relativePath: { eq: "IvanGoncharov.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KamleshChandnani: file(relativePath: { eq: "KamleshChandnani.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KenjuWagatsuma: file(relativePath: { eq: "KenjuWagatsuma.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KiranKumarAbburi: file(relativePath: { eq: "KiranKumarAbburi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MadhuJahagirdar: file(relativePath: { eq: "MadhuJahagirdar.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ManaswiniDas: file(relativePath: { eq: "ManaswiniDas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NavyaAgarwal: file(relativePath: { eq: "NavyaAgarwal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RajatKhare: file(relativePath: { eq: "RajatKhare.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RichardThelkard: file(relativePath: { eq: "RichardThelkard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobertZhu: file(relativePath: { eq: "RobertZhu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SidharthaChatterjee: file(relativePath: { eq: "SidharthaChatterjee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanayPratap: file(relativePath: { eq: "TanayPratap.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanmaiGopal: file(relativePath: { eq: "TanmaiGopal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TobiasMeixner: file(relativePath: { eq: "tobias-meixner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


