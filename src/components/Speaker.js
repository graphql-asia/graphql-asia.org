import React from 'react'

const Speaker = (props) => (
    <section>
        <span className="image">
            {
                props.speakerPicture ?
                <img src={props.speakerPicture} alt={props.speakerName} />
                :
                <span className="placeholder"/>
            }            
        </span>
        <div className="content">
            <div className="inner">
                <header className="major">
                    <h3>{props.speakerName}</h3>
                </header>                
                {/* <p>{props.speakerDescription}</p> */}
                <p>{props.speakerPosition}</p>
                {/* <p className="talkTitle">{props.talkTitle}</p> */}
            </div>
        </div>
    </section>
)

export default Speaker