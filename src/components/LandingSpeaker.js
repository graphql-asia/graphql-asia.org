import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const speakerData = require('../data/data.json')

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
              {
                props.speakerId?
              <Link to={`/speaker/${props.speakerId}`}>
              {props.speakerName}
              </Link>
              :
              props.speakerName
              }
              
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
  var speakerList = []
  
  speakerData.sort((a,b)=>a.sortOrder-b.sortOrder).forEach(speaker => {
    try {
    if(speaker.featured===true&&data[speaker.speakerPicture]){
      speakerList.push(
      <Speaker 
        speakerId={speaker.speakerId}
        speakerName={speaker.speakerName} 
        speakerImage={data[speaker.speakerPicture].childImageSharp.fluid.src} 
        speakerBio={speaker.speakerPosition}
      />
    )
    }      
    } catch (error) {
      console.error(error)
    }    
  });
  return (
    <section id="landingSpeaker" className="major">
      <div className="inner">
        <header className="major">
            <h2>
              Speakers 2019
            </h2>
        </header>
        <div className="speakerListWrppar">
          {speakerList}          
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
    RichardThrelkeld: file(relativePath: { eq: "RichardThrelkeld.jpg" }) {
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
