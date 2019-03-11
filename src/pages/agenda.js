import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSpeakers from '../components/BannerSpeakers'
import SpeakerList from '../components/SpeakerList'


const Speakers = (props) => (
  <Layout>
    <Helmet>
      <title>Agenda - GraphQL Asia</title>
      <meta name="description" content="GraphQL Asia Agenda" />
    </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Agenda</h1>
                </header>
            </div>
        </section>
    </div>

    <div id="speakerlist">
      <SpeakerList isAgenda={true} data={props.data} />
    </div>

  </Layout >
)

export default Speakers






export const query = graphql`
  query {
    AmitRana: file(relativePath: { eq: "AmitRana.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LeeByron: file(relativePath: { eq: "LeeByron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SashaSolomon: file(relativePath: { eq: "SashaSolomon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ManojAwasthi: file(relativePath: { eq: "ManojAwasthi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MarcAndreGiroux: file(relativePath: { eq: "MarcAndreGiroux.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AdamMiskiewicz: file(relativePath: { eq: "AdamMiskiewicz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ShrutiKapoor: file(relativePath: { eq: "ShrutiKapoor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    UriGoldstein: file(relativePath: { eq: "UriGoldstein.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AkankshaChoudhary: file(relativePath: { eq: "AkankshaChoudhary.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AndreasMarek: file(relativePath: { eq: "AndreasMarek.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CarlosRufo: file(relativePath: { eq: "CarlosRufo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    EeshTyagi: file(relativePath: { eq: "EeshTyagi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IvanGoncharov: file(relativePath: { eq: "IvanGoncharov.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KamleshChandnani: file(relativePath: { eq: "KamleshChandnani.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KenjuWagatsuma: file(relativePath: { eq: "KenjuWagatsuma.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KiranKumarAbburi: file(relativePath: { eq: "KiranKumarAbburi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MadhuJahagirdar: file(relativePath: { eq: "MadhuJahagirdar.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ManaswiniDas: file(relativePath: { eq: "ManaswiniDas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NavyaAgarwal: file(relativePath: { eq: "NavyaAgarwal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TimGriesser: file(relativePath: { eq: "TimGriesser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }    
    RajatKhare: file(relativePath: { eq: "RajatKhare.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RichardThelkard: file(relativePath: { eq: "RichardThelkard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobertZhu: file(relativePath: { eq: "RobertZhu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SidharthaChatterjee: file(relativePath: { eq: "SidharthaChatterjee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanayPratap: file(relativePath: { eq: "TanayPratap.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanmaiGopal: file(relativePath: { eq: "TanmaiGopal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TobiasMeixner: file(relativePath: { eq: "tobias-meixner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AkashManohar: file(relativePath: { eq: "Akash-Manohar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


