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
        <h2>Day 1, 12th April</h2>
        {day1}
      </section>
      <section id="daytwo"
      className={'spotlights agenda'}>
        <h2>Day 2, 13th April</h2>
        {day2}
      </section>
      </div>
)
      }
export default SpeakerList
