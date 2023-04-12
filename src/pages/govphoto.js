// @flow
import * as React from "react";
import { useState, useContext } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gov1 from '../img/gov/1Lewis-03112023-SAT-225.jpg';

const SectionWipes2 = () => {
  const DOWN = <FontAwesomeIcon icon={faArrowDown} color="white"/>
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="white"/>

  return (
  <div className="wipes">
        <a className="goback" onclick="history.back(-1)" href="/governance/"><span id="ESC">{ESC}</span></a>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="1800%"
        pin
      >
       
          
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel turqoise"><span>Scroll to begin<br /> {DOWN}</span></section>
          {/* panel 1 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel black"></section>
          </Tween>
{/* 2 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov2"><span>Panel</span></section>
          </Tween>
{/* 3 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov3"><span>Panel</span></section>
          </Tween>
{/* 4 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov4"><span>Panel</span></section>
          </Tween>
{/* 5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov5"><span>Panel</span></section>
          </Tween>
{/* 6 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov6"><span>Panel</span></section>
          </Tween>
{/* 7 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov7"><span>Panel</span></section>
          </Tween>
{/* 8 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov8"><span>Panel</span></section>
          </Tween>
{/* 9 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov9"><span>Panel</span></section>
          </Tween>
{/* 10 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov10"><span>Panel</span></section>
          </Tween>
{/* 11 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov11"><span>Panel</span></section>
          </Tween>
{/* 12 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov12"><span>Panel</span></section>
          </Tween>
{/* 13 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov13"><span>Panel</span></section>
          </Tween>
{/* 14 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov14"><span>Panel</span></section>
          </Tween>
{/* 15 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov15"><span>Panel</span></section>
          </Tween>
{/* 16 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov16"><span>Panel</span></section>
          </Tween>
{/* 17 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov17"><span>Panel</span></section>
          </Tween>
{/* END */}
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>Panel</span></section>
          </Tween>
        </Timeline>
     
     
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

