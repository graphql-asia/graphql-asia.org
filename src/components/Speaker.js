import React from 'react'
import Img from "gatsby-image"
const Speaker = (props) => (
    <section className={
        props.isAgenda === true ?
        'agendaItem':''
    }>
        {
            props.isAgenda === true ?
            <div className="image">                
                {
                    props.speakerPicture ?
                    <Img fixed={props.speakerPicture} alt={props.speakerName} />                
                    :
                    <span className="placeholder"/>
                }
            </div>
            
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
        <div className={
            props.isAgenda === true ?
            "content agendaItem"
            :
            "content"
        }>
            <div className="inner">
                <span className="speakerSlot">
                    {props.time}
                </span>
                <header className="major">
                    <h3>{props.speakerName}</h3>
                </header>                
                {/* <p>{props.speakerDescription}</p> */}
                {
                    props.isAgenda === true ?
                    <span className="talkTitle">{props.talkTitle}</span>
                    :
                    null                    
                }       
                <br/>
                <span className="speakerPosition">{props.speakerPosition}</span>         
                <span className="speakerDescription">{props.speakerDescription}</span>         
                {/* <p className="talkTitle">{props.talkTitle}</p> */}
            </div>
        </div>
    </section>
)

export default Speaker