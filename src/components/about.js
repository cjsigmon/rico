import * as React from "react";
import '../about.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    const [hidRep, setHidRep] = useState(false);
    const [hidPho, setHidPho] = useState(false);
    const [hidDes, setHidDes] = useState(false);
    const [hidDev, setHidDev] = useState(false);
    const [hidCon, setHidCon] = useState(false);
    const [hidCoach, setHidCoach] = useState(false);

    const handleRepClick = () => {
        setHidPho(true);
        setHidDes(true);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(true);
        setHidRep(false);
      };
      const handlePhoClick = () => {
        setHidRep(true);
        setHidPho(false);
        setHidDes(true);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(true);
      };
      const handleDesClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(false);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(true);
      };
      const handleDevClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(true);
        setHidDev(false);
        setHidCon(true);
        setHidCoach(true);
      };
      const handleCoachClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(true);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(false);
      };
      const handleConClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(true);
        setHidDev(true);
        setHidCon(false);
        setHidCoach(true);
      };
    
    return (
        <div className="abt-wrapper">
            <p className="abt-body-t">Taking pictures of sharks can be a thrilling experience, but it also requires safety precautions. Researching the species, using a protective cage or staying at a safe distance, and securing your equipment are essential to minimize the risk of harm. By respecting the natural environment and the sharks, you can capture stunning photos while keeping everyone safe.
            <br></br><br></br>
            Capturing pictures of sharks can be a rewarding experience, but safety should always come first. Avoid wearing shiny or reflective jewelry, and do not disturb the sharks or their habitat. With proper preparation and safety measures in place, you can enjoy the excitement of photographing these magnificent creatures while protecting both yourself and the sharks.
            </p>
            <div class="circle-container">
                <div className="circle yellow"></div>
                <div className="circle orange"></div>
                <div className="circle red"></div>
                <div className="circle cyan"></div>
                <div className="circle blue"></div>
            </div>
            <h2 id="meet-team">Meet the Team</h2>
            <div id="cards-sect">
                <div id="role-btns">
                    <button onClick={handleRepClick}>Reporting</button>
                    <button onClick={handlePhoClick}>Photo & Video</button>
                    <button onClick={handleDesClick}>Design</button>
                    <button onClick={handleDevClick}>Development</button>
                    <button onClick={handleCoachClick}>Coaches</button>
                    <button onClick={handleConClick}>Contributors</button>
                </div>
                <div id="cards-holder">

                <div className={`card rep gov ${hidRep ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Emily Gajda</h6>
                        <p className="team-role">Reporter</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep com ${hidRep ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Liv Reilly</h6>
                        <p className="team-role">Reporter</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep hea ${hidRep ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Lucas Thomae</h6>
                        <p className="team-role">Reporter</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep ${hidRep ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Preston Fore</h6>
                        <p className="team-role">Reporter</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Ryan Thornburg</h6>
                        <p className="team-role">Coach</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    

                    <div className={`card rep env ${hidRep ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Thomas Moody-Jones</h6>
                        <p className="team-role">Reporter</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    

                    

                    
                </div>
            </div>
        </div>
    );
}
