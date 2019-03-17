import React from 'react'
import Img from "gatsby-image"

class Speaker extends React.Component {
    state = {      
      showDetail: false
    };
    render() {
        const props = this.props;
        return(
            <section className={
            props.isAgenda === true ?
            this.state.showDetail===true?
            'agendaItem extended'
            :
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
                    <span className="speakerPosition">{props.speakerPosition}</span>         
                    <br/>
                    {
                        props.isAgenda === true ?
                        <span className="talkTitle">{props.talkTitle}</span>
                        :
                        null                    
                    }      
                    <br/>          
                    {
                        props.isAgenda === true && props.speakerDescription ?
                            this.state.showDetail === true ?
                            <div className="speakerDetail">
                                <span className="speakerDescription">{props.speakerDescription}</span>    
                                // talkAbstract     
                                <span onClick={()=>this.setState({showDetail:false})}>hide</span>
                            </div>
                            :
                            <span style={{
                                cursor: 'pointer'
                            }} onClick={()=>this.setState({showDetail:true})}>more...</span>
                        :null
                    }                    
                </div>
            </div>
        </section>
        )
    }
}
export default Speaker