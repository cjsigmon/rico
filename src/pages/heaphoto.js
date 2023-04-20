// @flow
import * as React from "react";
import { useState, useContext, useRef } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gov2 from '../img/hea/20230405_Diehl_PR_Sequence-2.jpg';
import gov3 from '../img/hea/20230405_Diehl_PR_Sequence-3.jpg';
import gov4 from '../img/hea/20230405_Diehl_PR_Sequence-4.jpg';
import gov5 from '../img/hea/20230405_Diehl_PR_Sequence-5.jpg';
import gov6 from '../img/hea/20230405_Diehl_PR_Sequence-6.jpg';
import gov7 from '../img/hea/20230405_Diehl_PR_Sequence-7.jpg';
import gov8 from '../img/hea/20230405_Diehl_PR_Sequence-8.jpg';
import gov9 from '../img/hea/20230405_Diehl_PR_Sequence-9.jpg';
import gov10 from '../img/hea/20230405_Diehl_PR_Sequence-10.jpg';
import gov11 from '../img/hea/20230405_Diehl_PR_Sequence-11.jpg';
import gov12 from '../img/hea/20230405_Diehl_PR_Sequence-12.jpg';
import gov13 from '../img/hea/20230405_Diehl_PR_Sequence-13.jpg';



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
  const p13Ref = React.useRef(null);


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
const killp13 = () => {
  p13Ref.current.style.opacity = '0';
};
const resp13 = () => {
p13Ref.current.style.opacity = '1';
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
          <section className="panel hea1"><span>Scroll to begin<br /> {DOWN}</span></section>
          {/* panel 1 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p1Ref}>The dangerous health conditions the unhoused population is exposed to and exacerbation of any current health issues clearly identifies housing as a form of healthcare. Natural disasters and the opioid crisis fuel the struggles of people experiencing homelessness. Carla Correa Cepeda has dedicated her life to serving the unhoused population, providing various healthcare services to mitigate these challenges for the past 7 years in this field.  
            <br></br><br></br>Cepeda rubs her neck after a long week of work. The emotional toll of finding solutions for a population that faces countless barriers caused by societal stigmas weighs heavily on Cepeda. “The responsibility of creating a plan throughout Puerto Rico to serve the homeless is a huge responsibility,” she said.
</p></section>
          </Tween>
{/* 2 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp1}
            onReverseComplete={resp1}
          >
            <section className="panel"><img src={gov2}/></section>
          </Tween>
{/* 2.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p2Ref}>Cepeda and her co-worker Gerardo Medina walk through the streets of Ponce, Puerto Rico where the damage from frequent earthquakes is evident in the broken and abandoned structures. Cepeda’s current project focuses on reducing the vulnerability of the unhoused population caused by natural disasters and health issues stemming from lacking shelter. 
          </p></section>
          </Tween>
{/* 3 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp2}
            onReverseComplete={resp2}
          >
            <section className="panel"><img className="medium-land l" src={gov3}/></section>
          </Tween>
{/* 4 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov4"><p ref={p3Ref}>At the homeless shelter in Ponce, Cepeda presents her current project, Whole Community Resilience Plan (WCRP). Afterwards she seeks feedback from individuals in the community so she can better serve them. “It’s important for me to do my best to bring other opportunities to them.” 
</p></section>
          </Tween>
{/* 5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp3}
            onReverseComplete={resp3}
          >
            <section className="panel gov5"><img className="medium-land l" src={gov4}/></section>
          </Tween>
{/* 6 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov6"><p ref={p4Ref}>Medina and Cepeda sit in the plaza in Ponce to eat lunch and write notes about what was accomplished at their morning event. Sleeping in the city plaza has been criminalized, “I think this is the biggest challenge we have in Ponce,” says Cepeda, “What I can do is care and not see them as one dimensional.”
</p></section>
          </Tween>
{/* 7 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp4}
            onReverseComplete={resp4}
          >
            <section className="panel gov7"><img className="medium-land " src={gov5}/></section>
          </Tween>
{/* 8 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov8"><p ref={p5Ref}>Medina and Cepeda pack up the car to leave Ponce. Cepeda encouraged Medina to join the Coalicion de Coaliciones team knowing their partnership could be a powerful tool to the community. Medina has personally battled addiction and is confident he can use his life experiences to help those actively struggling.
</p></section>
          </Tween>
{/* 9 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp5}
            onReverseComplete={resp5}
          >
            <section className="panel gov9"><img src={gov6}/></section>
          </Tween>
{/* 10 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov10"><p ref={p6Ref}>On her balcony Cepeda attends an online class for her PhD in Social Policy at the University of Puerto Rico. She hopes to expand her tools to serve communities by furthering her education. “Not many people are doing (this work) with that commitment and sensitivity that is needed,” she said. 
</p></section>
          </Tween>
{/* 11 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp6}
            onReverseComplete={resp6}
          >
            <section className="panel gov11"><img className="medium-land l" src={gov7}/></section>
          </Tween>
{/* 12 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov12"><p ref={p7Ref}>Cepeda and her partner, Luis Ramon, watch the Puerto Rico baseball game on his phone while walking around San Juan on a Saturday. Also working to combat addiction, Ramon understands the emotional toll it takes on her mental health. Together, they are able to create a safe space to process those emotions.</p></section>
          </Tween>
{/* 13 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp7}
            onReverseComplete={resp7}
          >
            <section className="panel gov13"><img className="medium-land r" src={gov8}/></section>
          </Tween>
{/* 14 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov14"><p ref={p8Ref}>Cepeda and her daughter Andrea Correa wait for Ramon as he consoles a former patient that he randomly bumped into. Their years spent doing this work has had a large impact, therefore it is not uncommon for Cepeda or Ramon to encounter people they have helped throughout Puerto Rico.
</p></section>
          </Tween>
{/* 15 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp8}
            onReverseComplete={resp8}
          >
            <section className="panel gov15"><img className="medium-land " src={gov9}/></section>
          </Tween>
{/* 16 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov16"><p ref={p9Ref}>Cepeda facetimes her mother, Raquel Román to share the special moment of Correa picking out a dress for her senior prom. Correa attends boarding school during the week, which makes the time they spend together on the weekend especially important.
</p></section>
          </Tween>
{/* 17 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp9}
            onReverseComplete={resp9}
          >
            <section className="panel gov17"><img src={gov10}/></section>
          </Tween>

          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p10Ref}>Cepeda leaves her home at 6AM to begin the two hour drive to her office in Ponce as the sun rises. In addition to the psychological challenge of her work, driving 4 hours roundtrip physically exhausts her. The value of working directly in the community outweighs the burdens the travel places on her. 
</p></section>
          </Tween>

          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp10}
            onReverseComplete={resp10}
          >
            <section className="panel gov17"><img id="gov11" className="medium-land l" src={gov11}/></section>
          </Tween>
{/* END */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p11Ref}>Cepeda interviews Julio Benítez at the homeless shelter in Ponce to receive feedback on his housing experiences during natural disasters and Covid-19. “I think it’s important we can develop a space where people can talk about what they need,” said Cepeda.
</p></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp11}
            onReverseComplete={resp11}
          >
            <section className="panel gov17"><img className="medium-land r" src={gov12}/></section>
          </Tween>
{/* END */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p12Ref}>Cepeda sits on the floor at the clinic in Ponce and eats lunch. She takes opportunities where she can find them throughout the day to center herself. These moments of reflection give her time to be intentional about both her work and her mental wellbeing.
</p></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp12}
            onReverseComplete={resp12}
          >
            <section className="panel gov17"><img className="medium-land" src={gov13}/></section>
          </Tween>
{/* END */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p13Ref}>Cepeda embraces her co-worker, Brenda Pérez. After struggling with her mental health at her previous job, Cepeda finds empowerment through the support and joy of her co-workers. This helps her continue working while also caring for herself. “I love what I am doing right now,” Cepeda confidently exclaimed.
</p></section>
          </Tween>
        </Timeline>
     
     
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

