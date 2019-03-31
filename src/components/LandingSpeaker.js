import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Speaker = (props) => {
  return (
    <div className="speakerList">
      <div className="profile">
        <div className="speakerImage">
          <img src={props.speakerImage} alt="profile"/>
        </div>
        <div className="speakerProfile">
          <div className="profileWrapper">
            <div className="profileName">
              {props.speakerName}
            </div>
          </div>
          <div className="profielBio">
            {props.speakerBio}
          </div>
        </div>
      </div>
    </div>
  )
};
const LandingSpeaker = ({data}) => {
  return (
    <section id="landingSpeaker" className="major">
      <div className="inner">
        <header className="major">
            <h2>
              Speakers 2019
            </h2>
        </header>
        <div className="speakerListWrppar">
          <Speaker speakerName='Lee Byron' speakerImage={data.LeeByron.childImageSharp.fluid.src} speakerBio='Co-Creator of GraphQL, Senior Software Engineer, Robinhood' />
          <Speaker speakerName='Sasha Solomon' speakerImage={data.SashaSolomon.childImageSharp.fluid.src} speakerBio='Senior Software Engineer, Twitter' />
          <Speaker speakerName='Tanmai Gopal' speakerImage={data.TanmaiGopal.childImageSharp.fluid.src} speakerBio='Co-Founder, Hasura' />
          <Speaker speakerName='Tobias Meixner' speakerImage={data.TobiasMeixner.childImageSharp.fluid.src} speakerBio='Co-Founder & CTO, BrikL' />
          <Speaker speakerName='Jonathan Jalouzot' speakerImage={data.JonathanJalouzot.childImageSharp.fluid.src} speakerBio='Co-Founder, GraphQL Paris' />
          <Speaker speakerName='Amit Rana' speakerImage={data.AmitRana.childImageSharp.fluid.src} speakerBio='Director of Engineering, Myntra' />
          <Speaker speakerName='Manoj Awasthi' speakerImage={data.ManojAwasthi.childImageSharp.fluid.src} speakerBio='VP of Engineering, Tokopedia' />
          <Speaker speakerName='Adam Miskiewicz' speakerImage={data.AdamMiskiewicz.childImageSharp.fluid.src} speakerBio='Engineer, Airbnb' />
          <Speaker speakerName='Shruti Kapoor' speakerImage={data.ShrutiKapoor.childImageSharp.fluid.src} speakerBio='Software Engineer, Paypal' />
          <Speaker speakerName='Uri Goldshtein' speakerImage={data.UriGoldshtein.childImageSharp.fluid.src} speakerBio='The Guild' />
          <Speaker speakerName='Akanksha Choudhary' speakerImage={data.AkankshaChoudhary.childImageSharp.fluid.src} speakerBio='Full Stack Web Developer' />
          <Speaker speakerName='Andreas Marek' speakerImage={data.AndreasMarek.childImageSharp.fluid.src} speakerBio='Senior Developer, Atlassian' />
          <Speaker speakerName='Carlos Rufo' speakerImage={data.CarlosRufo.childImageSharp.fluid.src} speakerBio='OSS Developer' />
          <Speaker speakerName='Eesh Tyagi' speakerImage={data.EeshTyagi.childImageSharp.fluid.src} speakerBio='Lead UI, Cleartrip' />
          <Speaker speakerName='Ivan Goncharov' speakerImage={data.IvanGoncharov.childImageSharp.fluid.src} speakerBio='GraphQL consultant, apis.guru' />
          <Speaker speakerName='Kamlesh Chandnani' speakerImage={data.KamleshChandnani.childImageSharp.fluid.src} speakerBio='Associate Frontend Architect, Treebo Hotels' />
          <Speaker speakerName='Kenju Wagatsuma' speakerImage={data.KenjuWagatsuma.childImageSharp.fluid.src} speakerBio='Software Engineer, Cookpad' />
          <Speaker speakerName='Madhu Jahagirdar' speakerImage={data.MadhuJahagirdar.childImageSharp.fluid.src} speakerBio='Principal Architect, Philips' />
          <Speaker speakerName='Navya Agarwal' speakerImage={data.NavyaAgarwal.childImageSharp.fluid.src} speakerBio='MTS-II, Adobe' />
          <Speaker speakerName='Tim Griesser' speakerImage={data.TimGriesser.childImageSharp.fluid.src} speakerBio='Senior Software Engineer, cypress.io' />
          <Speaker speakerName='Rajat Khare' speakerImage={data.RajatKhare.childImageSharp.fluid.src} speakerBio='Architect, Intuit' />
          <Speaker speakerName='Richard Thelkard' speakerImage={data.RichardThelkard.childImageSharp.fluid.src} speakerBio='Sr. Engineer, AWS (Mobile)' />
          <Speaker speakerName='Robert Zhu' speakerImage={data.RobertZhu.childImageSharp.fluid.src} speakerBio='AWS' />
          <Speaker speakerName='Sidhartha Chatterjee' speakerImage={data.SidharthaChatterjee.childImageSharp.fluid.src} speakerBio='OSS Maintainer, Gatsby' />
          <Speaker speakerName='Tanay Pratap' speakerImage={data.TanayPratap.childImageSharp.fluid.src} speakerBio='Software Engineer, Microsoft' />
          <Speaker speakerName='Peter Thomas' speakerImage={data.PeterThomas.childImageSharp.fluid.src} speakerBio='Distinguished Engineer, Intuit' />
          <Speaker speakerName='Kiran Kumar Abburi' speakerImage={data.KiranKumarAbburi.childImageSharp.fluid.src} speakerBio='' />
          <Speaker speakerName='Lucas Munhoz' speakerImage={data.LucasMunhoz.childImageSharp.fluid.src} speakerBio='' />
        </div>
      </div>
    </section>
)}

const query = graphql`
  query {
    LeeByron: file(relativePath: { eq: "LeeByron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JonathanJalouzot: file(relativePath: { eq: "JonathanJalouzot.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LucasMunhoz: file(relativePath: { eq: "LucasMunhoz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AmitRana: file(relativePath: { eq: "AmitRana.jpeg" }) {
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
    UriGoldshtein: file(relativePath: { eq: "UriGoldshtein.png" }) {
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
    PeterThomas: file(relativePath: { eq: "PeterThomas.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <LandingSpeaker data={data} {...props} />}
  />
)

// export default LandingSpeaker
