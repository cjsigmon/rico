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
import gov2 from '../img/gov/2Lewis-03112023-SAT-163.jpg';

const Chronos = () => {
  const DOWN = <FontAwesomeIcon icon={faArrowDown} color="white"/>
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="white"/>

  return (
    <div className="time-anchor">
      <div className="time-container">
        
        <div id="bigline">
          <div className="timeline-bg"><img src={gov1}/></div>
          <div id="midline"></div>


          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">Before <br/>1493</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">Taíno natives settle on the island</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <span className="century"><h4 className="century-name">
              15<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">Christopher Columbus "discovers" the island</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">1493</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <span className="century"><h4 className="century-name">
              16<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">Early <br/>1500s</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">Colonizers import slaves from Africa</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">Former slaves settle Loíza</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">Early <br/>1500s</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">1521</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">The settlement is renamed Puerto Rico</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <span className="century"><h4 className="century-name">
              17<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>
          
          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">The Saint Patrick Church is built in Loíza</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">Mid<br/>1600s</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">1690</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">The governor requests the recognition of Loiza as a town</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <span className="century"><h4 className="century-name">
              18<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">Spain declares Loiza a town</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">1719</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <span className="century"><h4 className="century-name">
              19<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">1873</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">Spain abolishes slavery in Puerto Rico</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">Spain cedes Puerto Rico to the U.S.</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">1898</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <span className="century"><h4 className="century-name">
              20<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">1917</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">Congress grants U.S. citizenship to all Puerto Ricans</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">Congress passes the Jones Act</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">1920</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">1924</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">The U.S. Coast Guard regulates el ancón</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">The U.S. and Puerto Rican governments launch Operation Bootstrap</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">1940s</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">1948</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">Congress permits Puerto Ricans to elect their own governor</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">Puerto Rico becomes a commonwealth</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">1952</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">1952</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">“Chano” Cortijo becomes the owner of el ancón</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">A bridge is built over the Rio Grande of Loíza</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">1985</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <span className="century"><h4 className="century-name">
              21<sup>st</sup>
              <br />Century</h4>
            </span>
          </div>
          
          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">2014</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">Andrés Santos, María Luisa Cortijo, & others found El Ancón</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">The island cannot meet its debt obligations</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">2015</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">2016</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">President Obama signs PROMESA into law</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">(May) - Puerto Rico seeks bankruptcy relief in federal court</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">2017</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">2017</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">(September)- Hurricane Maria makes landfall on the island</p>
              </div>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="topper">
              <div className="desc-box">
              <p className="white-desc">The Financial Oversight and Management Board wants more control</p>
              </div>
              <div className="vert-line-top"></div>
            </div>
            <span className="lil-circ"></span>
            <div className="bott-date">
              <h4 className="date">2020</h4>
            </div>
          </div>

          <div className="vert-line-event">
            <div className="top-date">
              <h4 className="date top">2022</h4>
            </div>  
            <span className="lil-circ"></span>
            <div className="botter">  
              <div className="vert-line-top"></div>
              <div className="desc-box bot">
              <p className="white-desc">Puerto Rico exits bankruptcy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Chronos;

