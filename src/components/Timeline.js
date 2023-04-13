// @flow
import * as React from "react";
import { useState, useContext, useRef, useEffect } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import before_1493 from '../img/timeline/before_1493.jpeg';
import t1493 from '../img/timeline/1493.jpg';
import t1521 from '../img/timeline/1521.jpeg';
import t1690 from '../img/timeline/1690.jpg';
import t1719 from '../img/timeline/1719.jpeg';
import t1873 from '../img/timeline/1873.jpeg';
import t1898 from '../img/timeline/1898.jpeg';
import t1917 from '../img/timeline/1917.jpeg';
import t1920 from '../img/timeline/1920.jpeg';
import t1924 from '../img/timeline/1924.jpg';
import t1940s from '../img/timeline/1940s.jpeg';
import t1948 from '../img/timeline/1948.jpeg';
import t1952_a from '../img/timeline/1952_ancon.jpg';
import t1952_c from '../img/timeline/1952_commonwealth.jpeg';
import t1985 from '../img/timeline/1985.jpg';
import t2015 from '../img/timeline/2015.jpeg';
import t2017_b from '../img/timeline/2017_bankruptcy.jpeg';
import t2017_h from '../img/timeline/2017_hurricane_maria.jpeg';
import early1 from '../img/timeline/early_1500s_former_slaves.jpeg';
import early2 from '../img/timeline/early_1500s_slaves.jpeg';
import mid from '../img/timeline/Mid_1600s.jpg';
import tbg from '../img/timeline/timeline_background1.jpg';


const myArray = [
  { yr: 'Before 1493', img: before_1493, cred: "cred", desc: 'Taíno natives settle on the island. They call the island Borinquén and refer to themselves as Boricuas. '},
  { yr: '1493', img: t1493, cred: "credit", desc: 'Explorer and colonizer Christopher Columbus “discovers” the island. He claims it for Spain and calls it San Juan Bautista.'},
  { yr: 'Early 1500s', img: early2, cred: "credit", desc: 'Spanish colonizers import slaves from Africa to produce cash crops.'},
  { yr: 'Early 1500s', img: early1, cred: "credit", desc: 'Members of the West African Yoruba tribe—brought to the island as slaves—settle the land that will become Loíza.'},
  { yr: '2022', img: t2017_b, cred: "credit", desc: 'The government of Puerto Rico formally exits bankruptcy, meaning it’ll resume payments to bondholders and settle claims filed by residents and businesses alike.'}
];

const Chronos = () => {
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="orange"/>
  const INVIS = <FontAwesomeIcon icon={faCircleXmark} color="white"/>
  const LARR = <FontAwesomeIcon icon={faChevronLeft} color="orange"/>
  const RARR = <FontAwesomeIcon icon={faChevronRight} color="orange"/>
  const yeaRef = useRef(null);
  const imgRef = useRef(null);
  const descRef = useRef(null);
  const credRef = useRef(null);
  const [index, setIndex] = useState(0);
  const len = myArray.length;

  useEffect(() => {
    const year = yeaRef.current;
    const desc = descRef.current;
    const cred = credRef.current;
    const img = imgRef.current;

    year.innerText = myArray[index].yr;
    desc.innerText = myArray[index].desc;
    img.src = myArray[index].img;
    cred.innerText = myArray[index].cred;
  }, [index]);

  const handleRight = () => {
    if (index < len - 1) {
      setIndex(index + 1);
    }
    console.log(index);
    // console.log("WHA");
  }

  const handleLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    console.log(index);
    // console.log("WHA");
  }

  return (
    <div className="time-anchor">
      <div className="time-container">

        
        <div id="bigline">
          <div className="timeline-bg"><img src={before_1493}/></div>



          <div id="modal-window">

          <span className="arr-esc">
              {INVIS}
              <a onClick={handleLeft} className="arrow">{LARR}</a> 
            </span>

            <div className="modal-content">
              <h4 ref={yeaRef}>{myArray[index].yr}</h4>
              <p ref={descRef} >{myArray[index].desc}</p>
              <img ref={imgRef} width={"100%"} src={before_1493}/>
              <p ref={credRef} >{myArray[index].cred}</p>
            </div>

            <span className="arr-esc">
              {ESC}
              <a className="arrow" onClick={handleRight}>{RARR}</a>
            </span> 
            
          </div>
            
            

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

