import React from 'react'
import Img from "gatsby-image"
import {Link} from 'gatsby'
import information from '../assets/images/open_in_new.svg'
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
                <h2 className="talkTitle">
                {speakerProps.talkTitle}
                {
                    speakerProps.speakerDescription ?
                    <a
                    target="_blank"
                    className="infoIcon icon"
                    style={{
                        marginLeft: '1em',
                        display: 'inline-block',
                    }} href={`/speaker/${speakerProps.speakerId}`}>
                    <img src={information} alt="icon"/>
                    </a>
                    :null
                }
                </h2>
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
