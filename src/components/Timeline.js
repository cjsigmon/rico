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

const CRED = "Photo courtesy of The Office of Information for Puerto Rico Collection, 1944-1948"

const myArray = [
  { yr: 'Before 1493', img: before_1493, cred: "", desc: 'Taíno natives settle on the island. They call the island Borinquén and refer to themselves as Boricuas. '},
  { yr: '1493', img: t1493, cred: "", desc: 'Explorer and colonizer Christopher Columbus “discovers” the island. He claims it for Spain and calls it San Juan Bautista.'},
  { yr: 'Early 1500s', img: early2, cred: "", desc: 'Spanish colonizers import slaves from Africa to produce cash crops.'},
  { yr: 'Early 1500s', img: early1, cred: "", desc: 'Members of the West African Yoruba tribe—brought to the island as slaves—settle the land that will become Loíza.'},
  { yr: '1521', img: t1521, cred: "", desc: 'The first European settlement—today known as San Juan Bay— is renamed Puerto Rico (“rich port”), which eventually becomes the name for the whole island.'},
  { yr: 'Mid 1600s', img: mid, cred: CRED, desc: 'The Parish Church of the Holy Spirit and Saint Patrick is built in Loíza, making it one of the oldest churches on the island.'},
  { yr: '1690', img: t1690, cred: CRED, desc: 'The governor of the island requests authorization from the Spanish government to recognize Loiza as a town.'},
  { yr: '1719', img: t1719, cred: CRED, desc: 'The Spanish government officially declares Loiza a town.'},
  { yr: '1873', img: t1873, cred: "", desc: 'The Spanish National Assembly abolishes slavery in Puerto Rico.'},
  { yr: '1898', img: t1521, cred: "", desc: 'The Treaty of Paris is signed, ending the Spanish-American War. The Spanish cede Puerto Rico, Guam, and the Philippines to the U.S.'},
  { yr: '1917', img: t1917, cred: "", desc: 'Congress passes an act granting U.S. citizenship to all Puerto Ricans.'},
  { yr: '1920', img: t1521, cred: "", desc: 'Congress passes the Jones Act, requiring all goods shipped between U.S. ports to be transported by U.S. vessels and operated by U.S. crews. This increases the cost and delivery time for Puerto Rican imports.'},
  { yr: '1924', img: t1924, cred: CRED, desc: 'The U.S. Coast Guard begins to regulate el ancón, a barge that transported goods and people from one side of the Río Grande of Loíza to the other. When the barge was established is unclear, but it could have been operational as early as the 1700s.'},
  { yr: '1940s', img: t1940s, cred: "", desc: 'The U.S. and Puerto Rican governments launch Operation Bootstrap to industrialize the island, leading to a massive decline in agriculture.'},
  { yr: '1948', img: t1948, cred: "", desc: 'Congress passes an act permitting Puerto Ricans to elect their own governor.'},
  { yr: '1952', img: t1952_c, cred: "", desc: 'Puerto Rico officially becomes a U.S. commonwealth, allowing the island to create its own constitution and have a degree of self-governance.'},
  { yr: '1952', img: t1952_a, cred: CRED, desc: 'Don Feliciano “Chano” Cortijo becomes the owner of el ancón. His family runs the barge for three generations.'},
  { yr: '1980s', img: t1985, cred: CRED, desc: 'A bridge is built from one side of the Rio Grande of Loíza to the other, eliminating the need for the barge.'},
  { yr: '2014', img: t2015, cred: "", desc: 'María Luisa Cortijo—daughter of Chano Cortijo—Andrés Santos, and others found El Ancón, a non-profit, community-based organization. Its mission is to preserve the historical culture and create opportunities for the youth of Loíza.'},
  { yr: '2015', img: t2015, cred: "", desc: 'The governor of Puerto Rico announces that the island cannot meet its debt obligations due to its worsening economic crisis.'},
  { yr: '2016', img: t2015, cred: "", desc: 'President Obama signs the Puerto Rico Oversight, Management, and Economic Stability Act (PROMESA) into law to restructure debt and achieve fiscal responsibility.'},
  { yr: '2017 (May)', img: t2017_b, cred: "", desc: 'The government of Puerto Rico seeks bankruptcy relief in federal court, making it the first U.S. state or territory to do so. Its over $70 billion debt is the largest municipal bankruptcy in U.S. history.'},
  { yr: '2017 (September)', img: t2017_h, cred: "", desc: 'Maria, a category 4 hurricane, makes landfall on the island, causing $90 billion in damages and over 100,000 residents to emigrate.'},
  { yr: '2020', img: t2017_b, cred: "", desc: 'A term change in the Financial Oversight and Management Board replaces half of the members, shifting its main goal from debt restructuring to stricter financial oversight.'},
  { yr: '2022', img: t2017_b, cred: "", desc: 'The government of Puerto Rico formally exits bankruptcy, meaning it’ll resume payments to bondholders and settle claims filed by residents and businesses alike.'}
];



const Chronos = () => {
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="#FF6600"/>
  const INVIS = <FontAwesomeIcon icon={faCircleXmark} color="white"/>
  const LARR = <FontAwesomeIcon icon={faChevronLeft} color="#FF6600"/>
  const RARR = <FontAwesomeIcon icon={faChevronRight} color="#FF6600"/>
  const modalRef= useRef(null);
  const yeaRef = useRef(null);
  const imgRef = useRef(null);
  const descRef = useRef(null);
  const credRef = useRef(null);
  const overRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);
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

  const handleEsc = () => {
    modalRef.current.style.display = 'none';
  }

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

  function handleClick(childIndex) {
    setIndex(childIndex);
    modalRef.current.style.display = 'grid';
  }

  const handleScroll = () => {
    let scroll = overRef.current.scrollLeft;
    let tot = lineRef.current.clientWidth - (2 * window.innerWidth) + 8;
    let percentage = (scroll / tot) * 100;
    console.log(percentage);
    fillRef.current.style.width = percentage + "%";
  };

  return (
    <div className="time-anchor" >
      <div className="time-container" ref={overRef}
      onScroll={handleScroll}>

        

        
        <div id="bigline" ref={lineRef}>
          <div className="timeline-bg"><img src={before_1493}/></div>

          <div id="titlecard">
            <h4>A timeline of</h4>
            <h1>[Insert Clever Title Here]</h1>
            <h4>[Insert Clarifying Subtitle Here]</h4>
          </div>

          <span id="progbar">
           <span ref={fillRef} id="progfill"></span>
          </span>

          <div id="modal-window" ref={modalRef} style={{display: 'none',}}>
          <span className="arr-esc">
              {INVIS}
              <a onClick={handleLeft} className="arrow">{LARR}</a> 
            </span>

            <div className="modal-content">
              <h4 ref={yeaRef}>{myArray[index].yr}</h4>
              <p ref={descRef} >{myArray[index].desc}</p>
              <img width="100%" ref={imgRef} src={before_1493}/>
              <p ref={credRef} >{myArray[index].cred}</p>
            </div>

            <span className="arr-esc">
              <a className="esc" onClick={handleEsc} >{ESC}</a>
              <a className="arrow" onClick={handleRight}>{RARR}</a>
            </span>  
          </div>
            
            

          <div id="midline"></div>


          <div className="vert-line-event" onClick={() => handleClick(0)}>
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

          <div className="vert-line-event cent">
            <span className="century"><h4 className="century-name">
              15<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event" onClick={() => handleClick(1)}>
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

          <div className="vert-line-event cent">
            <span className="century"><h4 className="century-name">
              16<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event" onClick={() => handleClick(2)}>
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

          <div className="vert-line-event" onClick={() => handleClick(3)}>
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

          <div className="vert-line-event" onClick={() => handleClick(4)}>
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

          <div className="vert-line-event cent">
            <span className="century"><h4 className="century-name">
              17<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>
          
          <div className="vert-line-event" onClick={() => handleClick(5)}>
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

          <div className="vert-line-event" onClick={() => handleClick(6)}>
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

          <div className="vert-line-event cent">
            <span className="century"><h4 className="century-name">
              18<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event" onClick={() => handleClick(7)}>
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

          <div className="vert-line-event cent">
            <span className="century"><h4 className="century-name">
              19<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event" onClick={() => handleClick(8)}>
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

          <div className="vert-line-event" onClick={() => handleClick(9)}>
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

          <div className="vert-line-event cent">
            <span className="century"><h4 className="century-name">
              20<sup>th</sup>
              <br />Century</h4>
            </span>
          </div>

          <div className="vert-line-event" onClick={() => handleClick(10)}>
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

          <div className="vert-line-event" onClick={() => handleClick(11)}>
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

          <div className="vert-line-event" onClick={() => handleClick(12)}>
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

          <div className="vert-line-event" onClick={() => handleClick(13)}>
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

          <div className="vert-line-event" onClick={() => handleClick(14)}>
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

          <div className="vert-line-event" onClick={() => handleClick(15)}>
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

          <div className="vert-line-event" onClick={() => handleClick(16)}>
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

          <div className="vert-line-event" onClick={() => handleClick(17)}>
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

          <div className="vert-line-event cent">
            <span className="century"><h4 className="century-name">
              21<sup>st</sup>
              <br />Century</h4>
            </span>
          </div>
          
          <div className="vert-line-event" onClick={() => handleClick(18)}>
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

          <div className="vert-line-event" onClick={() => handleClick(19)}>
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

          <div className="vert-line-event" onClick={() => handleClick(20)}>
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

          <div className="vert-line-event" onClick={() => handleClick(21)}>
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

          <div className="vert-line-event" onClick={() => handleClick(22)}>
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

          <div className="vert-line-event" onClick={() => handleClick(23)}>
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

          

          <div id="end" className="vert-line-event" onClick={() => handleClick(24)}>
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

