// @flow
import * as React from "react";
import { useState, useContext, useRef } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gov2 from '../img/env/20230405_Thiessen_Sequence_-2.jpg';
import gov3 from '../img/env/20230405_Thiessen_Sequence_-3.jpg';
import gov4 from '../img/env/20230405_Thiessen_Sequence_-4.jpg';
import gov5 from '../img/env/20230405_Thiessen_Sequence_-5.jpg';
import gov6 from '../img/env/20230405_Thiessen_Sequence_-6.jpg';
import gov7 from '../img/env/20230405_Thiessen_Sequence_-7.jpg';
import gov8 from '../img/env/20230405_Thiessen_Sequence_-8.jpg';
import gov9 from '../img/env/20230405_Thiessen_Sequence_-9.jpg';
import gov10 from '../img/env/20230405_Thiessen_Sequence_-10.jpg';
import gov11 from '../img/env/20230405_Thiessen_Sequence_-11.jpg';
import gov12 from '../img/env/20230405_Thiessen_Sequence_-12.jpg';



const SectionWipes2 = () => {
  const DOWN = <FontAwesomeIcon icon={faArrowDown} color="white"/>
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="white"/>

  const p1Ref = React.useRef(null);
  const p2Ref = React.useRef(null);
  const p3Ref = React.useRef(null);
  const p4Ref = React.useRef(null);
  const p5Ref = React.useRef(null);
  const p6Ref = React.useRef(null);
  const p7Ref = React.useRef(null);
  const p8Ref = React.useRef(null);
  const p9Ref = React.useRef(null);
  const p10Ref = React.useRef(null);
  const p11Ref = React.useRef(null);
  const p12Ref = React.useRef(null);


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
const killp7 = () => {
  p7Ref.current.style.opacity = '0';
};
const resp7 = () => {
p7Ref.current.style.opacity = '1';
};
const killp8 = () => {
  p8Ref.current.style.opacity = '0';
};
const resp8 = () => {
p8Ref.current.style.opacity = '1';
};
const killp9 = () => {
  p9Ref.current.style.opacity = '0';
};
const resp9 = () => {
p9Ref.current.style.opacity = '1';
};
const killp10 = () => {
  p10Ref.current.style.opacity = '0';
};
const resp10 = () => {
p10Ref.current.style.opacity = '1';
};
const killp11 = () => {
  p11Ref.current.style.opacity = '0';
};
const resp11 = () => {
p11Ref.current.style.opacity = '1';
};
const killp12 = () => {
  p12Ref.current.style.opacity = '0';
};
const resp12 = () => {
p12Ref.current.style.opacity = '1';
};



  return (
  <div className="wipes">
        {/* <a className="goback" onclick="history.back(-1)" href="/governance/"><span id="ESC">{ESC}</span></a> */}
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="1800%"
        pin
      >
       
          
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel env1"><span>Scroll to begin<br /> {DOWN}</span></section>
          {/* panel 1 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p1Ref}>Loíza, Puerto Rico, is a lively and joyful community that bands together in the face of continued adversity. Through dance, service, worship and education, Loíza represents the broader resistance of the Puerto Rican people. 
            <br></br><br></br>An ancient cultural expression, Bomba was created in the 1600s by enslaved people in Loíza to communicate when language was a barrier. Today, it is an act of protest, a method of self-expression and sometimes an act of joy. It isn't a performance done for the audience; it is a dancer’s own experience.
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
            <section className="panel"><p ref={p2Ref}>Bomba is an improvisational style of dance that begins with a solo dancer approaching a group of percussionists. The dancer's movements direct the music — instead of music guiding the dance. The drums are just as important as the dancer in creating Bomba's unique style. 
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
{/* 3.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov4"><p ref={p3Ref}>Migdalia Fargas, from Carolina, Puerto Rico, dances Bomba during a Sobera'o at Corporación Piñones Se Integra, a nonprofit based in Loíza dedicated to providing cultural activities for the community. Fargas’ smile never faded as she danced — a testament to the spirit of the dance.</p></section>
          </Tween>
{/* 4 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp3}
            onReverseComplete={resp3}
          >
            <section className="panel gov5"><img src={gov4}/></section>
          </Tween>
{/* 4.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov6"><p ref={p4Ref}>A composting and organic farming workshop takes place at a Loíza community center. Israel Diaz tills the ground where the garden will grow. The workshop aims to teach the community how to be self-sufficient in their farming practices.</p></section>
          </Tween>
{/* 5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp4}
            onReverseComplete={resp4}
          >
            <section className="panel gov7"><img className="medium-land l" src={gov5}/></section>
          </Tween>
{/* 5.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov8"><p ref={p5Ref}>Clara Rivera Pacheco is the organizer of the gardening workshop. She was born in Puerto Rico but moved to New Jersey to raise her children. Eleven days after Hurricane Maria made landfall in Puerto Rico, she returned to uplift her community.</p></section>
          </Tween>
{/* 6 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp5}
            onReverseComplete={resp5}
          >
            <section className="panel gov9"><img className="medium-land r" src={gov6}/></section>
          </Tween>
{/* 6.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov10"><p ref={p6Ref}>“It requires this action, and so we do this,” Pacheco said. “I think that one of the most empowering things for anyone is the ability to produce their own food, completely free of chemicals, completely free of pressure.” Community members seek autonomy from a government they feel has neglected them.</p></section>
          </Tween>
{/* 7 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp6}
            onReverseComplete={resp6}
          >
            <section className="panel gov11"><img src={gov7}/></section>
          </Tween>
{/* 7.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov12"><p ref={p7Ref}>Maria Pizarro (65) has lived in Loíza her whole life. She is a retired cafeteria worker that has been volunteering at Villa Canona since November 2022. The town’s connection to its community is one of Pizarro’s biggest reasons to stay. She sees her service to her community as understated.</p></section>
          </Tween>
{/* 8 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp7}
            onReverseComplete={resp7}
          >
            <section className="panel gov13"><img className="medium-land l" src={gov8}/></section>
          </Tween>
{/* 8.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov14"><p ref={p8Ref}>Villa Canona was founded to provide support to the community when the government was unable to. “We identify the problems, we look for solutions, we look for help to solve it, because the government is not going to come to do it for us.” said Rafael “Rafa” Rivera, the president of Villa Canona’s board.</p></section>
          </Tween>
{/* 9 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp8}
            onReverseComplete={resp8}
          >
            <section className="panel gov15"><img className="medium-land r" src={gov9}/></section>
          </Tween>
{/* 9.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov16"><p ref={p9Ref}>A group of retired school cafeteria staff volunteer to cook at Villa Canona every week. The meals are boxed and hand-delivered to the elderly population in Loíza on Tuesday and Wednesday mornings. They don’t serve for big reasons, they serve because they can — a privilege that some in their community dont have.</p></section>
          </Tween>
{/* 10 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp9}
            onReverseComplete={resp9}
          >
            <section className="panel gov17"><img src={gov10}/></section>
          </Tween>
{/* 10.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p10Ref}>In the center of Loíza sits Parroquia del Espíritu Santo y San Patricio, the town’s Catholic church. Constructed in 1645, it is one of Puerto Rico's oldest churches. The church represents an ethnically distinct community characterized by a rich Afro-Hispanic cultural and folk-craft tradition.</p></section>
          </Tween>

          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp10}
            onReverseComplete={resp10}
          >
            <section className="panel gov17"><img id="gov11" className="medium-land" src={gov11}/></section>
          </Tween>
{/* 11 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p11Ref}>Three women worship during a Wednesday evening service. The community seeks not only to support each other outside of church, but also to worship together and strengthen their faith in their town center.</p></section>
          </Tween>
{/* 11.5 */}         
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp11}
            onReverseComplete={resp11}
          >
            <section className="panel gov17"><img className="medium-land r" src={gov12}/></section>
          </Tween>
{/* 12 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p12Ref}>A priest leads Catholic Mass as a churchgoer raises his arms in worship. Throughout Puerto Rico, communities leaned on their faith to endure tragedies like Hurricane Maria and Irma, and Loíza is no different.</p></section>
          </Tween>
{/* END */}

        </Timeline>
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

