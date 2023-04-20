// @flow
import * as React from "react";
import { useState, useContext, useRef } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gov2 from '../img/com/Connors_abandoned-schools-2.jpg';
import gov3 from '../img/com/Connors_abandoned-schools-3.jpg';
import gov4 from '../img/com/Connors_abandoned-schools-4.jpg';
import gov5 from '../img/com/Connors_abandoned-schools-5.jpg';
import gov6 from '../img/com/Connors_abandoned-schools-6.jpg';
import gov7 from '../img/com/Connors_abandoned-schools-7.jpg';
import gov8 from '../img/com/Connors_abandoned-schools-8.jpg';
import gov9 from '../img/com/Connors_abandoned-schools-9.jpg';
import gov10 from '../img/com/Connors_abandoned-schools-10.jpg';
import gov11 from '../img/com/Connors_abandoned-schools-11.jpg';
import gov12 from '../img/com/Connors_abandoned-schools-12.jpg';



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

  const pan1Ref = useRef(null);


  const killp1 = () => {
      p1Ref.current.style.opacity = '0';
      pan1Ref.current.style.backgroundColor = 'black';

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
          <section ref={pan1Ref} className="panel com1"><span>Scroll to begin<br /> {DOWN}</span></section>
          {/* panel 1 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p1Ref}>More than half of Puerto Rico’s public schools have closed their doors in the last 10 years. Government officials justified the “consolidations,” saying hurricane damage and declining student enrollment necessitated them. In the years since, some schools have found new life as community centers, while others have been leased or sold. The majority of buildings, however, decompose like rotting corpses, their bones swaddled in nature’s eerie embrace, remnants of past lives slowly disintegrating into earth.

            <br></br><br></br>Inside Escuela Intermedia Marcelino Canino Canino in Dorado, which closed in 2018, the sign “Bienvenidos”, or “Welcome”, is still displayed in a former technology classroom. Stepping into an abandoned school can feel like entering another time. Desks rot in permanent rows. Ants creep along the spines of old textbooks. White chalk, scrawled on blackboards and never erased, marks the last day of school.
</p></section>
          </Tween>
{/* 2 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp1}
            onReverseComplete={resp1}
          >
            <section className="panel drrk"><img src={gov2}/></section>
          </Tween>
{/* 2.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel "><p ref={p2Ref}>At Escuela Jose de Diego in Vega Baja, mold proliferates on the surfaces of desks and chairs. Amid haunting silence, life still abounds. Trees stretch their limbs through old windows while flowers blossom in the crevices of crumbling school walls. Crabs make their homes in bathroom sinks and iguanas rest on cold cement floors. Nature has begun to reclaim the classrooms in the years since the school’s closure in 2016.


          </p></section>
          </Tween>
{/* 3 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp2}
            onReverseComplete={resp2}
          >
            <section className="panel drrk"><img src={gov3}/></section>
          </Tween>
{/* 3.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel "><p ref={p3Ref}>
            A biography of Antonio Rafael Barceló, a prominent 20th century politician and lawyer, lies abandoned on a desk at Escuela Jose de Diego in Vega Baja. Barceló’s life motto, <b>“Puerto Rico por encima de todo” (“Puerto Rico above all else”)</b> is reflected in his work to establish educational spaces like The School of Tropical Medicine. The school was later incorporated as part of The University of Puerto Rico, the island’s oldest University. The education crisis extends beyond primary and secondary schools; UPR <a href="https://tcf.org/content/commentary/with-the-university-of-puerto-rico-gutted-private-equity-is-poised-to-profit/">has lost nearly half its budget since 2017.</a>
                </p></section>
          </Tween>
{/* 4 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp3}
            onReverseComplete={resp3}
          >
            <section className="panel drrk"><img src={gov4}/></section>
          </Tween>
{/* 4.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel "><p ref={p4Ref}>
            Tree branches wrap around former school buildings at Escuela Intermedia Marcelino Canino Canino in Dorado. The <a href="https://belonging.berkeley.edu/report-puerto-ricos-mass-closures-public-schools-eroding-communities">majority of closures (65%) occurred in rural areas,</a> where distance between schools is greater and disruptions in children’s transportation to and from class placed greater burdens on caregivers to navigate changes.
            </p></section>
          </Tween>
{/* 5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp4}
            onReverseComplete={resp4}
          >
            <section className="panel drrk"><img src={gov5}/></section>
          </Tween>
{/* 5.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel "><p ref={p5Ref}>
            The body of a horse is preserved in a bed of feces like an archeological relic at Escuela Elemental Alfonso Lopez Garcia in Dorado. In the time since their initial closure, some schools have been revived for other purposes like stables, only to further decay.
            </p></section>
          </Tween>
{/* 6 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp5}
            onReverseComplete={resp5}
          >
            <section className="panel drrk"><img src={gov6}/></section>
          </Tween>
{/* 6.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel "><p ref={p6Ref}>
            A gate is left open at Escuela Rosa M. Rodriguez in Vega Baja, where neighbors upkeep the school yard and utilize the space for community classes. In the absence of government action, some neighborhoods have taken it upon themselves to maintain the school grounds. 
            </p></section>
          </Tween>
{/* 7 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp6}
            onReverseComplete={resp6}
          >
            <section className="panel drrk"><img src={gov7}/></section>
          </Tween>
{/* 7.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel "><p ref={p7Ref}>
            A billboard in a hallway at Escuela Elemental Alfonso Lopez Garcia in Dorado reads, “Good Work”. Julia Keleher, Philadelphia native appointed Puerto Rico Secretary of Education in 2016, was the architect behind many of the school closures. In 2019, she resigned from her role. “I regret the pain that [closures] caused communities,” Keleher said at a press conference in 2019 following her announcement that she would be stepping down. “But somebody had to be the responsible adult in the room.” Keleher was arrested and imprisoned in 2021 on account of conspiracy to commit fraud during her time as secretary.
            </p></section>
          </Tween>
{/* 8 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp7}
            onReverseComplete={resp7}
          >
            <section className="panel drrk"><img src={gov8}/></section>
          </Tween>
{/* 8.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel "><p ref={p8Ref}>
            An empty court at Escuela Marcelino Canino Canino in Dorado was once filled with children bouncing basketballs and batting ping pong balls back and forth in friendly competition. <b>Now, the space is quiet.</b> School spaces represent more than learning how to multiply numbers and write essays: they are places of cohesion and connection. 
            </p></section>
          </Tween>
{/* 9 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp8}
            onReverseComplete={resp8}
          >
            <section className="panel drrk"><img src={gov9}/></section>
          </Tween>
{/* 9.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p9Ref}>
            <b>“You all are excellent, we love you and wish you success in your new school,” reads a message</b> in a hallway at Escuela Elemental Alfonso Lopez Garcia in Dorado. Teachers left notes for their former pupils on whiteboards, in hallways and online in Facebook pages. <b>School closures fractured bonds between teachers and students.</b></p></section>
          </Tween>
{/* 10 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp9}
            onReverseComplete={resp9}
          >
            <section className="panel drrk"><img src={gov10}/></section>
          </Tween>
{/* 10.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p10Ref}>
            Horses roam free through classrooms of the old Escuela Intermedia Marcelino Canino Canino in Dorado. To this day, some schools continue to be repurposed by community members for uses such as stables. New life is still being cultivated, even amidst the decay.
            </p></section>
          </Tween>

          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp10}
            onReverseComplete={resp10}
          >
            <section className="panel drrk"><img id="gov11" className="medium-land" src={gov11}/></section>
          </Tween>
{/* 11 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p11Ref}>
            The remains of a rabbit’s legs spoil beneath a pile of textbooks at Escuela Jose de Diego in Vega Baja. Where students once read children’s books about animals, textbooks now serve as the final resting place of the island's living creatures.
            </p></section>
          </Tween>
{/* 11.5 */}         
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp11}
            onReverseComplete={resp11}
          >
            <section className="panel gov17"><img src={gov12}/></section>
          </Tween>
{/* 12 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p12Ref}>
            <b>“Here, I dreamed,” reads</b> graffiti scrawled on the wall of a roofless classroom at Escuela Jose de Diego in Vega Baja — a reminder of what could have been. In spaces where children once imagined their futures and teachers built homes of learning, old visions are now laid to rest. Just as Puerto Rico is changing, so too are these empty buildings, the deaths of their past lives as schools creating space for new beginnings.
                </p></section>
          </Tween>
{/* END */}

        </Timeline>
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

