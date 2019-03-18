import React from 'react'
import Img from "gatsby-image"

class Speaker extends React.Component {
    state = {      
      showTalkDetail: false,
      showSpeakerDetail: false
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
                        <h3>{props.speakerName}
                        {
                        props.speakerDescription ?
                        <span style={{
                            cursor: 'pointer',
                            background: 
                                this.state.showSpeakerDetail ?
                                '#fff':'transparent',
                            color: 
                                this.state.showSpeakerDetail ?
                                '#777':'#fff',
                            
                            borderRadius: '100%',
                            height: '1em',
                            width: '1em',
                            border: '1px solid #fff',
                            display: 'inline-block',                            
                            verticalAlign: 'middle',
                            lineHeight: '1em',
                            fontSize: '0.5em',                            
                            marginLeft: '.75em'                        
                        }} onClick={()=>this.setState({showSpeakerDetail:!this.state.showSpeakerDetail})} className="infoIcon icon fa-info"></span>
                        :null
                        }
                        </h3>                        
                    </header>                
                    {
                        props.isAgenda === true && props.speakerDescription && this.state.showSpeakerDetail === true ?
                        <div style={{
                            fontSize: '1rem',
                            position: 'absolute',
                            background: '#525252',
                            border: '2px solid white',
                            padding: '1em',
                            width: '400px',
                            maxWidth: '100%',
                            zIndex: 200
                        }} className="speakerDetail">
                            <span className="speakerDescription">{props.speakerDescription}</span>
                        </div>
                        :null
                    }
                    <span  className="speakerPosition">{props.speakerPosition}</span>                                        
                    <br/>
                    {
                        props.isAgenda === true ?
                        <div>
                        <span className="talkTitle">{props.talkTitle}</span>
                        {
                            props.talkAbstract ?
                            <span style={{
                                cursor: 'pointer',
                                background: 
                                    this.state.showSpeakerDetail ?
                                    '#fff':'transparent',
                                color: 
                                    this.state.showSpeakerDetail ?
                                    '#777':'#fff',
                                
                                borderRadius: '100%',
                                height: '1em',
                                width: '1em',
                                border: '1px solid #fff',
                                display: 'inline-block',                            
                                verticalAlign: 'middle',
                                lineHeight: '1em',
                                fontSize: '0.5em',                            
                                marginLeft: '.75em'                        
                            }} onClick={()=>this.setState({showTalkDetail:!this.state.showTalkDetail})} className="infoIcon icon fa-info"></span>
                            :null
                        }                        
                        </div>
                        :
                        null                    
                    }
                    {
                        props.isAgenda === true && props.talkAbstract && this.state.showTalkDetail===true ?
                        <span style={{
                            fontSize: '1rem',
                            position: 'absolute',
                            background: '#525252',
                            border: '2px solid white',
                            padding: '1em',
                            width: '400px',
                            maxWidth: '100%',
                            zIndex: 200
                        }} className="talkAbstract">{props.talkAbstract}</span>
                        :
                        null                    
                    }
                    <br/>          
                    {/* {
                        props.isAgenda === true && props.speakerDescription ?
                            this.state.showDetail === true ?
                            <div className="speakerDetail">
                                <span className="speakerDescription">{props.speakerDescription}</span>
                                <span style={{
                                cursor: 'pointer',
                                textDecoration: 'underline',
                                fontSize: '80%'
                            }} onClick={()=>this.setState({showDetail:false})}>hide</span>
                            </div>
                            :
                            <span style={{
                                cursor: 'pointer',
                                textDecoration: 'underline',
                                fontSize: '80%'
                            }} onClick={()=>this.setState({showDetail:true})}>more...</span>
                        :null
                    }                     */}
                </div>
            </div>
        </section>
        )
    }
}
export default Speaker