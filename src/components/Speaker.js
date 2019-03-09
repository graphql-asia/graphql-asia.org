import React from 'react'
import Img from "gatsby-image"
const Speaker = (props) => (
    <section className={
        props.isAgenda === true ?
        'agendaItem':''
    }>
        {
            props.isAgenda === true ?
            <span className="speakerTime">
                {props.time}
            </span>
            :
            <span className="image">
                {
                    props.speakerPicture ?
                    <Img fixed={props.speakerPicture} alt={props.speakerName} />                
                    :
                    <span className="placeholder"/>
                }            
            </span>
        }        
        <div className="content">
            <div className="inner">
                <header className="major">
                    <h3>{props.speakerName}</h3>
                </header>                
                {/* <p>{props.speakerDescription}</p> */}
                {
                    props.isAgenda === true ?
                    <p>{props.talkTitle}</p>
                    :
                    <p>{props.speakerPosition}</p>                    
                    
                }                
                {/* <p className="talkTitle">{props.talkTitle}</p> */}
            </div>
        </div>
    </section>
)

export default Speaker