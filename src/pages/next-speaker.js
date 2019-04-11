import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import domtoimage from 'dom-to-image';

const speakerData = require('../data/data.json')
const filteredSpeakerOnlyList = speakerData.filter((s)=>s.type==='talk')



class NextSpeaker extends React.Component {
    componentDidMount(){
        
        filteredSpeakerOnlyList.forEach((speaker, index) => {            
            if(
                domtoimage
                // && index < 2
                ){
                domtoimage.toJpeg(document.getElementById('speaker'+index), { quality: 0.95 })
                .then(function (dataUrl) {
                    // var link = document.createElement('a');
                    // link.download = 'my-image-name.jpeg';
                    // link.href = dataUrl;
                    // link.click();
                    var img = new Image();
                    img.src = dataUrl;
                    document.body.appendChild(img);
                    // document.getElementById('speaker'+index).style.display = 'none'
                });
            }
            
        });       
    }
    render() {        
    return(    
  <Layout>
    <Helmet>
      <title>Next speaker - GraphQL Asia</title>
      <meta name="description" content="GraphQL Asia Agenda" />
    </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner removePaddBottom">
                <header className="major removeMarBottom">
                    <h1 className="removeMarBottom">
                      Next speaker list
                    </h1>
                </header>
            </div>
        </section>
    </div>

    <div id="speakerlist">
        {
            filteredSpeakerOnlyList.map((speaker, index) => {
                
                return <div style={{
                    display:'block',
                    background: 'white',
                    width: '29.7cm',
                    minHeight: '21cm',
                    padding: '2cm',
                    margin: '1cm auto',
                    border: '1px #D3D3D3 solid',
                    borderRadius: '5px',
                    background: 'white',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
                }} id={'speaker'+index}>
                    <div style={{
                        fontSize: '1.5cm'
                    }}>
                        <span style={{
                            fontSize: '.5cm'
                        }}>Currently speaking:</span><br/>
                        {speaker.speakerName}<br/>
                        {speaker.talkTitle}
                    </div>
                    <div style={{
                        width:'100%',
                        height: '2cm'
                    }} />
                    {
                        filteredSpeakerOnlyList[index+1] ?
                        <div style={{
                            fontSize: '1cm'
                        }}>
                        <span style={{
                            fontSize: '.5cm'
                        }}>Next up:</span><br/>
                        {filteredSpeakerOnlyList[index+1].speakerName}
                        {filteredSpeakerOnlyList[index+1].talkTitle}
                    </div>
                    :null
                    }                    
                </div>                
            })
        }        
    </div>

  </Layout >  
)
    }
}

export default NextSpeaker



