import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
// import { Link } from 'react-router-dom'

export default function Parallax() {
  // ------------- VARIABLES ------------- //
  var delta
  var ticking = false
  var isFirefox = /Firefox/i.test(navigator.userAgent)
  var isIe =
    /MSIE/i.test(navigator.userAgent) ||
    /Trident.*rv:11\./i.test(navigator.userAgent)
  var scrollSensitivitySetting = 30 //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
  var slideDurationSetting = 600 //Amount of time for which slide is "locked"
  var currentSlideNumber = 0
  var totalSlideNumber = $('.background').length

  // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
  function parallaxScroll(evt) {
    if (isFirefox) {
      //Set delta for Chrome
      delta = evt.detail * -120
    } else if (isIe) {
      //Set delta for IE
      delta = -evt.deltaY
    } else {
      //Set delta for all other browsers
      delta = evt.wheelDelta
    }

    if (ticking !== true) {
      if (delta <= -scrollSensitivitySetting) {
        //Down scroll
        ticking = true
        if (currentSlideNumber !== totalSlideNumber - 1) {
          currentSlideNumber++
          nextItem()
        }
        slideDurationTimeout(slideDurationSetting)
      }
      if (delta >= scrollSensitivitySetting) {
        //Up scroll
        ticking = true
        if (currentSlideNumber !== 0) {
          currentSlideNumber--
        }
        previousItem()
        slideDurationTimeout(slideDurationSetting)
      }
    }
  }

  // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
  function slideDurationTimeout(slideDuration) {
    setTimeout(function() {
      ticking = false
    }, slideDuration)
  }

  // ------------- ADD EVENT LISTENER ------------- //
  var mousewheelEvent = isFirefox ? 'DOMMouseScroll' : 'wheel'
  window.addEventListener(
    mousewheelEvent,
    _.throttle(parallaxScroll, 60),
    false
  )

  // ------------- SLIDE MOTION ------------- //
  function nextItem() {
    var $previousSlide = $('.background').eq(currentSlideNumber - 1)
    $previousSlide.removeClass('up-scroll').addClass('down-scroll')
  }

  function previousItem() {
    var $currentSlide = $('.background').eq(currentSlideNumber)
    $currentSlide.removeClass('down-scroll').addClass('up-scroll')
  }

  return (
    <div className="container-parallax">
      <section className="background">
        <div className="content-wrapper">
          <p className="content-subtitle">
            <img
              className="logo-home"
              src="https://res.cloudinary.com/dj0sskvvz/image/upload/v1570694768/Restaurant-Pantagruel/pantagruel-paris2.png.png"
              alt="logo-home"
              width="250px"
            />
          </p>
          <p className="content-title pantagruel">pantagruel</p>
          <p className="content-subtitle">
            <img
              className="arrow"
              src="https://res.cloudinary.com/dj0sskvvz/image/upload/v1570696155/Restaurant-Pantagruel/arrow_ttykhh.png"
              alt="arrow"
            />
          </p>
        </div>
      </section>

      <section className="background">
        <div className="content-wrapper">
          <div className="home">
            <img
              src="https://res.cloudinary.com/dj0sskvvz/image/upload/v1570695334/Restaurant-Pantagruel/couteau-pantagruel.jpg.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <div className="square-hp">
              <div className="opacity-low"></div>

              <div className="bloc-hp">
                La carte{' '}
                <div className="buttons">
                  <a href="/menu">
                    <button className="button-view">Menu</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="background">
        <div className="content-wrapper">
          <div className="home">
            <div className="square-hp">
              <div className="opacity-low"></div>

              <div className="bloc-hp">
                Le chef{' '}
                <div className="buttons">
                  <a href="/aboutus">
                    <button className="button-view">Rencontrer l'équipe</button>
                  </a>
                </div>
              </div>
            </div>

            <img
              src="https://res.cloudinary.com/dj0sskvvz/image/upload/v1570694727/Restaurant-Pantagruel/Michel_-_Galopin_Matthew_Oliver-1572_1_oosx2u.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
