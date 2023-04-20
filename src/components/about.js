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

    const handleAllClick = () => {
        setHidPho(false);
        setHidDes(false);
        setHidDev(false);
        setHidCon(false);
        setHidCoach(false);
        setHidRep(false);
      };

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
                    <button className="sort" id="all-btn" onClick={handleAllClick}><b>ALL</b></button>
                    <button className="sort" onClick={handleRepClick}>Reporting</button>
                    <button className="sort" onClick={handlePhoClick}>Photo & Video</button>
                    <button className="sort" onClick={handleDesClick}>Design</button>
                    <button className="sort" onClick={handleDevClick}>Development</button>
                    <button className="sort" onClick={handleCoachClick}>Coaches</button>
                    <button className="sort" onClick={handleConClick}>Contributors</button>
                </div>
                <div id="cards-holder">

                <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Alex Kormann</h6>
                        <p className="team-role">Coach</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid gov ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Ally Rabon</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                <div className={`card vid hea ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Angelina Katsanis</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid env ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Ann Licharew</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Anna Connors</h6>
                        <p className="team-role">Photo</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid hea ${hidCon ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Bella Cankurtaran</h6>
                        <p className="team-role">Ad/PR</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Brooke Fisher</h6>
                        <p className="team-role">Coach</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card dev hea ${hidDev ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Caleb Sigmon</h6>
                        <p className="team-role">Development</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card des pow ${hidDes ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Clara Mello</h6>
                        <p className="team-role">Design</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Cynthia Liu</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho env ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Dylan Thiessen</h6>
                        <p className="team-role">Photo</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

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

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Fallon Maher</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card con com ${hidCon ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Florencia Loncán</h6>
                        <p className="team-role">Ad/PR</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid pow ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Gerard Millman</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card des env ${hidDes ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Gina Flow</h6>
                        <p className="team-role">Design</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card des gov ${hidDes ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Giuli Hoffmann</h6>
                        <p className="team-role">Design</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho hea ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Heather Diehl</h6>
                        <p className="team-role">Photo</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho pow ${(hidDes && hidDev) ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Jacob Turner</h6>
                        <p className="team-role">Design/Dev</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid hea ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Jennifer Tran</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid pow ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Lauren Cmiel</h6>
                        <p className="team-role">Video</p>
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

                    <div className={`card rep com ${(hidDev && hidDes) ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Nina Scott</h6>
                        <p className="team-role">Design/Dev</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Patrick Davison</h6>
                        <p className="team-role">Coach</p>
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

                    <div className={`card vid gov ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Quincy Marks</h6>
                        <p className="team-role">Video</p>
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

                    <div className={`card pho gov ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Samantha Lewis</h6>
                        <p className="team-role">Photo</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid env ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><img /></div>
                        <h6 className="name-here">Taylor Holbrooks</h6>
                        <p className="team-role">Video</p>
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
