import React from 'react'
import Speaker from './Speaker'
const speakerData = require('../data/data.json')
const SpeakerList = (props) => {
  var day1 = []
  var day2 = []
  try {
    speakerData.forEach(speaker => {
      var speakerPicture = null
      try {
        speakerPicture = props.data[speaker.speakerPicture].childImageSharp.fluid
      } catch (error) {

      }
      if(speaker.day===1){
        day1.push(
          <Speaker
          key={speaker.speakerId}
          speaker={{
            ...speaker,
            isAgenda: props.isAgenda,
            speakerPicture,
          }} />
        )
      }else{
        day2.push(
          <Speaker
          key={speaker.speakerId}
          speaker={{
            ...speaker,
            isAgenda: props.isAgenda,
            speakerPicture,
          }} />
        )
      }

    });
  } catch (error) {
    console.error(error)
  }

  return(
    <div>
    <section id="dayone" className={'spotlights agenda'}>
        <div className="addPaddTopLarge" id="day2">
          <h4 id="day1"><a href="#day1">Day 1</a> / <a href="#day2">Day 2</a></h4>
        </div>
        {day1}
      </section>
      <section id="daytwo"
      className={'spotlights agenda'}>
        <div className="addPaddTopLarge" id="day2">
          <h4>
            <a href="#day1">Day 1</a> / <a href="#day2">Day 2</a>
          </h4>
        </div>
        {day2}
      </section>
      </div>
)
      }
export default SpeakerList
