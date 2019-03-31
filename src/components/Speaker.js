import React from 'react'
import Img from "gatsby-image"
import {Link} from 'gatsby'
class Speaker extends React.Component {
    state = {
      showTalkDetail: false,
      showSpeakerDetail: false
    };
    render() {
        const speakerProps = this.props.speaker;
        return(
            <section
            ref={speakerProps.speakerId}
            id={speakerProps.speakerId}
            className={'agendaItem'}>
                    <span className="speakerSlot">
                        <div className="pinkCircleSmall">
                        </div>
                        {speakerProps.time}
                    </span>
            <div className={"content"}>
                <div className="inner">
                <h2 className="talkTitle">{speakerProps.talkTitle}</h2>
                <div className="newImage">
                    {
                        speakerProps.speakerPicture ?
                        <Img fluid={speakerProps.speakerPicture} alt={speakerProps.speakerName} />
                        :
                        <span className="placeholder"/>
                    }
                </div>


                    <header className="major">
                        <h5>
                        {speakerProps.speakerName}
                        {
                            speakerProps.speakerDescription ?
                            <Link
                            className="infoIcon fa-info icon"
                            style={{
                                borderRadius: '50%',
                                border: '1px solid #000',
                                width: '17px',
                                height: '17px',
                                fontSize: '10px',
                                lineHeight: '1.5em',
                                marginLeft: '1em',
                                display: 'inline-block',
                                paddingLeft: '5px'
                            }} to={`/speaker/${speakerProps.speakerId}`}>
                            </Link>
                            :null
                        }
                        </h5>
                    </header>
                    <div>
                    <p className="talkAbstract">{speakerProps.talkAbstract}</p>
                    </div>
                    <br/>
                </div>
            </div>
        </section>
        )
    }
}
export default Speaker
