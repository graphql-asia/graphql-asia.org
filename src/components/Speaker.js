import React from 'react'

const Speaker = (props) => (
    <section>
        <span className="image">
            <img src={props.speakerPicture} alt={props.speakerName} />
        </span>
        <div className="content">
            <div className="inner">
                <header className="major">
                    <h3>{props.speakerName}</h3>
                </header>
                <p>{props.speakerDescription}</p>
                <ul className="actions">
                    <li>{props.speakerPosition}</li>
                    {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                </ul>
            </div>
        </div>
    </section>
)

export default Speaker