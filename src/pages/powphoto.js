// @flow
import * as React from "react";
import { useState, useContext, useRef } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gov1 from '../img/pow/20230405_Thiessen_Sequence_-1.jpg';
import gov2 from '../img/pow/20230405_Thiessen_Sequence_-2.jpg';
import gov3 from '../img/pow/20230405_Thiessen_Sequence_-3.jpg';
import gov4 from '../img/pow/20230405_Thiessen_Sequence_-4.jpg';
import gov5 from '../img/pow/20230405_Thiessen_Sequence_-5.jpg';
import gov6 from '../img/pow/20230405_Thiessen_Sequence_-6.jpg';






const SectionWipes2 = () => {
  const DOWN = <FontAwesomeIcon icon={faArrowDown} color="white"/>
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="white"/>

  const p1Ref = React.useRef(null);
  const p2Ref = React.useRef(null);
  const p3Ref = React.useRef(null);
  const p4Ref = React.useRef(null);
  const p5Ref = React.useRef(null);
  const p6Ref = React.useRef(null);

  const killp1 = () => {
      p1Ref.current.style.opacity = '0';
  };
  const resp1 = () => {
    p1Ref.current.style.opacity = '1';
};
const killp2 = () => {
  p2Ref.current.style.opacity = '0';
};
const resp2 = () => {
p2Ref.current.style.opacity = '1';
};
const killp3 = () => {
  p3Ref.current.style.opacity = '0';
};
const resp3 = () => {
p3Ref.current.style.opacity = '1';
};
const killp4 = () => {
  p4Ref.current.style.opacity = '0';
};
const resp4 = () => {
p4Ref.current.style.opacity = '1';
};
const killp5 = () => {
  p5Ref.current.style.opacity = '0';
};
const resp5 = () => {
p5Ref.current.style.opacity = '1';
};
const killp6 = () => {
  p6Ref.current.style.opacity = '0';
};
const resp6 = () => {
p6Ref.current.style.opacity = '1';
};




  return (
  <div className="wipes">
        {/* <a className="goback" onclick="history.back(-1)" href="/governance/"><span id="ESC">{ESC}</span></a> */}
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="800%"
        pin
      >
       
          
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel pow1"><span>Scroll to begin<br /> {DOWN}</span></section>
          {/* panel 1 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p1Ref}>
            For decades, the Puerto Rico Electric Power Authority, or PREPA, supplied power to the island as a government-owned service. In 2021 privatization began with the offloading of transmission and distribution to LUMA. Power workers were given the choice of working for LUMA or transferring to a new government job.
</p></section>
          </Tween>
{/* 2 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp1}
            onReverseComplete={resp1}
          >
            <section className="panel"><img className="medium-land l" src={gov2}/></section>
          </Tween>
{/* 2.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p2Ref}>
            Edith Soto worked in customer service for PREPA for 14 years before its dissolution. Now, she’s 41 years old and a secretary for the natural resources department. “We didn’t believe in the private sector,” she said. “We believe in change.”
          </p></section>
          </Tween>
{/* 3 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp2}
            onReverseComplete={resp2}
          >
            <section className="panel"><img className="medium-land r" src={gov3}/></section>
          </Tween>
{/* 4 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov4"><p ref={p3Ref}>Luis Moulier worked as a lineman for PREPA for over 20 years. Now, he’s 49 and a truck driver for the Puerto Rico Medical Center. He used to think of his coworkers as family, but now he considers the ones who went with LUMA to be “traitors.”
                </p></section>
          </Tween>
{/* 5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp3}
            onReverseComplete={resp3}
          >
            <section className="panel gov5"><img src={gov4}/></section>
          </Tween>
{/* 6 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov6"><p ref={p4Ref}>
            Josue Mitjá is 47 years old and the president of the Electrical Industry and Irrigation Workers Union, or UTIER, while working at a power generator facility. “Privatization is worrying and dangerous as it destroys unions and workers won’t have any protection,” he says. “It is modern enslavement.”
                </p></section>
          </Tween>
{/* 7 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp4}
            onReverseComplete={resp4}
          >
            <section className="panel gov7"><img className="medium-land l" src={gov5}/></section>
          </Tween>
{/* 8 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov8"><p ref={p5Ref}>
            Ralphie Dominicci is 55 years old and the treasurer of UTIER, while also working at a power generator facility. “I’m going to retire,” he says, instead of moving to a new government job due to the imminent privatization of Puerto Rican power generation.
                </p></section>
          </Tween>
{/* 9 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp5}
            onReverseComplete={resp5}
          >
            <section className="panel gov9"><img className="medium-land r" src={gov6}/></section>
          </Tween>
{/* 10 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov10"><p ref={p6Ref}>
            Karlexy Rosario worked as a lineman for PREPA for 20 years. Now, he’s 50 years old and a truck driver for the Department of Education. As workers are moved from their jobs with PREPA to other government positions, membership in UTIER has decreased by 80%.
            </p></section>
          </Tween>
{/* 11 */}


        </Timeline>
     
     
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

