import React from 'react'
// import properties from 'seeds.js'
import Parallax from './../Parallax'
// import ContactUs from './ContactUs'
import Map from './ReactGoogleMap'

// import api from '../../api'
// import test from './../../test';

export default function Home(props) {
  // const [properties, setProperties] = useState([])
  // const [viewport, setViewport] = useState({
  //   latitude: 48,
  //   longitude: 22,
  //   zoom: 10,
  //   width: '100vw',
  //   height: '100vh',
  // })

  return (
    <>
      <Parallax />
      {/* <Map fullMarkers={true} property={{}} /> */}
      <iframe
        className="map-pantagruel"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3993045520624!2d2.3441490151884765!3d48.86966400786767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e163bd75c99%3A0x36689ab2725ec791!2s24%20Rue%20du%20Sentier%2C%2075002%20Paris!5e0!3m2!1sen!2sfr!4v1570699331197!5m2!1sen!2sfr"
        width="80%"
        // height="600px"
        frameborder="0"
        style={{ border: '0px' }}
        allowfullscreen=""
        display="block"
      ></iframe>
    </>
  )
}
