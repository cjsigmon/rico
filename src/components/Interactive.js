import * as React from "react";
import '../styles.css';
import { useRef, useState, useEffect } from "react";

function Interactive({ title }) {
    const drugsRef = useRef(null);
    const drugsRef2 = useRef(null);
    const drugsRef3 = useRef(null);
    const gramsRef = useRef(null);
    const nameRef = useRef(null);
    const subRef = useRef(null);
    var mg = 80;
    var mls = 57.14;

    const handleOx = () => {
      mg = 80;
      mls = 57.14; 
      gramsRef.current.textContent = '80mg / about 57.14mL';
      nameRef.current.textContent = 'Oxycodone';
      drugsRef2.current.style.display = 'none';
      drugsRef3.current.style.display = 'none';
      drugsRef.current.style.display = 'block';
    }

    const handleHer = () => {
      mg = 30;
      mls = 21.43  
      gramsRef.current.textContent = '30mg / about 21.43mL';
      nameRef.current.textContent = 'Heroin';
      drugsRef3.current.style.display = 'none';
      drugsRef.current.style.display = 'none';
      drugsRef2.current.style.display = 'block';
    }

    const handleFen = () => {
      mg = 3;
      mls = 2.72;
      gramsRef.current.textContent = '2-3mg / about 2.72mL';
      nameRef.current.textContent = 'Fentanyl';
      drugsRef2.current.style.display = 'none';
      drugsRef.current.style.display = 'none';
      drugsRef3.current.style.display = 'block';
    }

    const [viewBox, setViewBox] = useState('0 0 100 100');
    const svgRef = useRef(null);
  
    useEffect(() => {
      const { width, height } = svgRef.current.getBoundingClientRect();
      setViewBox(`-200 -90 ${width} ${height}`);
    }, []);
    
    
            return (
                <div className="fill-width" id="fent-bg">
                  <h1 id="fent-title">OPIOID LETHALITY COMPARISON</h1>

                  <div id="abt-drug-cont">
                    <div id="drugname">
                      <h5 ref={nameRef} id="drugname-title">Oxycodone</h5>
                      <p ref={subRef}>Oxycodone is the opioid used in percocet.</p>
                    </div>
                    <div id="fact-graf">
                      <p>It's really just gonna be one long run-on sentence about
                        something to do with this particular drug. In oxycodone's case I'll
                         talk about how percocet also contains the ingredient for aspirin. And 
                         keep in mind that effects also depend on individual factors other than 
                         body weight; this is just an estimated average based on my sources.
                      </p>
                    </div>
                  </div>

                  <div id="grams-cont">
                    <p ref={gramsRef} id="grams">80mg / about 57.14mL</p>
                  </div>

                  <div id="btn-cont">
                    <button onClick={handleOx}>
                      <div className="sq"></div>
                      <p className="btn-text">OXYCODONE</p>
                    </button>
                    <button onClick={handleHer}>
                      <div className="sq"></div>
                      <p className="btn-text">HEROIN</p>
                    </button>
                    <button onClick={handleFen}>
                      <div className="sq"></div>
                      <p className="btn-text">FENTANYL</p>
                    </button>
                  </div>
                    
                    
                  <svg ref={svgRef} id="Layer_1" data-name="Layer 1" viewBox={viewBox}>

                    <g id="bottle">
                      <path id="glass" class="cls-1" d="m23.8,65.08c35.56,97.05,63.43,167.9,72.37,188.91,2.18,5.12,6.98,15.88,22.86,19.54,26.5,4.34,63.2-5.13,84.32-25.59,26.4-31.44-23.54-116.87-65.01-225.2-22.98,15.98-87.41,39.44-114.54,42.34Z"/>
                      <g id="shading-inner-cap">
                        <polyline class="cls-3" points="122.01 23.2 122.29 32.44 119.78 32.57 119.5 23.32 116.49 25.09 116.77 34.34 114.26 34.46 113.98 25.22 111.43 27.08 111.71 36.32 109.19 36.45 108.92 27.21 105.91 28.98 106.19 38.22 103.68 38.35 103.4 29.1 101.07 31.01 101.35 40.25 98.84 40.38 98.56 31.13 95.56 32.91 95.84 42.15 93.32 42.28 93.04 33.03 90.49 34.89 90.77 44.14 88.26 44.26 87.98 35.02 84.97 36.79 85.25 46.03 82.74 46.16 82.46 36.91 80.25 38.84 80.53 48.09 78.02 48.21 77.74 38.97 74.73 40.74 75.01 49.99 72.5 50.11 72.22 40.87 69.67 42.73 69.95 51.97 67.43 52.1 67.16 42.85 64.15 44.62 64.43 53.87 61.92 53.99 61.64 44.75 59.31 46.66 59.59 55.9 57.08 56.03 56.8 46.78 53.8 48.55 54.08 57.8 51.56 57.92 51.28 48.68 48.73 50.54 49.01 59.78 46.5 59.91 46.22 50.67 43.22 52.44 43.49 61.68 40.98 61.81 40.7 52.56"/>
                      </g>
                      <g id="cap">
                        <path id="cap-top" class="cls-2" d="m148,31.31c-17.71-3.03-47.46,9.04-55.41,11.59-26.72,7.56-60.01,22.25-79.09,37.65L2.77,54.73c9.51-17.62,46.91-28.38,72.06-37.12,17.35-4.48,62.76-22.89,72.53-11.4,0,0,4.28,25.62.65,25.1Z"/>
                        <g id="shading-cap">
                          <line class="cls-5" x1="15.69" y1="74.12" x2="12.43" y2="50.58"/>
                          <line class="cls-5" x1="24.16" y1="70.17" x2="20.9" y2="46.63"/>
                          <line class="cls-5" x1="31.83" y1="65.81" x2="28.57" y2="42.27"/>
                          <line class="cls-5" x1="39.89" y1="60.58" x2="36.63" y2="37.04"/>
                          <line class="cls-5" x1="47.56" y1="57.3" x2="44.3" y2="33.76"/>
                          <line class="cls-5" x1="56.44" y1="54.63" x2="53.18" y2="31.09"/>
                          <line class="cls-5" x1="64.52" y1="51.56" x2="61.26" y2="28.02"/>
                          <line class="cls-5" x1="73.81" y1="50.17" x2="69.73" y2="24.07"/>
                          <line class="cls-5" x1="82.14" y1="44.54" x2="78.88" y2="21"/>
                          <line class="cls-5" x1="89.35" y1="41.56" x2="86.09" y2="18.02"/>
                          <line class="cls-5" x1="97.83" y1="39.77" x2="94.57" y2="16.23"/>
                          <line class="cls-5" x1="106.3" y1="35.82" x2="103.04" y2="12.28"/>
                          <line class="cls-5" x1="114.39" y1="33.82" x2="111.13" y2="10.29"/>
                          <line class="cls-5" x1="123.27" y1="31.16" x2="120.01" y2="7.62"/>
                          <line class="cls-5" x1="131.35" y1="28.08" x2="128.09" y2="4.54"/>
                          <line class="cls-5" x1="140.26" y1="26.17" x2="138.23" y2="6.48"/>
                        </g>
                      </g>
                    </g>
                    <g id="drugs" ref={drugsRef} className="drug-type">
                      <path id="drugs-fil" class="cls-4" d="m175.79,118.35c6.77,16.64,13.41,34.22,19.79,52.71,5.01,14.53,9.53,28.71,13.62,42.47.81,4.87,1.23,11.05.21,18.05-.32,2.2-.74,4.25-1.23,6.15-6.47,13.44-14.89,18.05-34.76,25.98-22.92,7.87-57.69,19.69-73.73-1.15-12.06-32.35-23.68-64.87-35.59-97.27l111.69-46.95Z"/>
                      <g id="drugs-top">
                        <path class="cls-4" d="m174.08,116.44c-12.13-8.47-105.79,31.13-110.16,47.91.51,6.62,22.05-.56,26.71-1.42,31.76-5.85,46.84-13.56,72.18-30.33,7.97-5.27,15.53-11.05,11.27-16.16Z"/>
                        <g id="bumps">
                          <path class="cls-3" d="m80.99,160.25c-.14-.91.67-1.89,1.82-2.31.93-.34,1.96-.26,2.62.2"/>
                          <path class="cls-3" d="m122.46,134.37c-.14-.91.67-1.89,1.82-2.31.93-.34,1.96-.26,2.62.2"/>
                          <path class="cls-3" d="m131.11,143.13c-.14-.91.67-1.89,1.82-2.31.93-.34,1.96-.26,2.62.2"/>
                          <path class="cls-3" d="m141.45,129.73c-.14-.91.67-1.89,1.82-2.31.93-.34,1.96-.26,2.62.2"/>
                          <path class="cls-3" d="m161.27,127.71c-.14-.91.67-1.89,1.82-2.31.93-.34,1.96-.26,2.62.2"/>
                          <path class="cls-3" d="m99.77,150.29c-.14-.91.67-1.89,1.82-2.31.93-.34,1.96-.26,2.62.2"/>
                        </g>
                      </g>
                    </g>
                    <g id="drugs-2" ref={drugsRef2} className="drug-type">
                      <path id="drugs-fil-2" data-name="drugs-fil" class="cls-4" d="m203.09,195.3c3.06-.78,3,3,3.91,5.86,1.72,5.43,2.79,8.4,3.58,16.55.84,8.64-.18,9.62-.33,17.32-.04,1.92-4.23,6.33-5.21,9.71-.31,1.06-7.73,6.92-8.19,7.84-6,6.56-26.47,14.96-44.59,19.09-20.9,4.16-25.88,6.29-41.17-2.13-14.38-7.91-17.74-21.6-22.56-35.49-1.37-3.96.9-8.25,4.96-9.28l109"/>
                      <g id="drugs-top-2" data-name="drugs-top">
                        <path class="cls-4" d="m202.05,191.95c-14.56-3.22-111.43,27.5-116.11,35.83.79,3.13,11.55.74,17.03,0,37.33-4.99,55.75-14,85.2-23.77,9.26-3.07,19.06-9.91,13.89-12.06Z"/>
                        <g id="bumps-2" data-name="bumps">
                          <path class="cls-3" d="m93.84,223.57c-.2-.42.7-.98,2.03-1.31,1.08-.27,2.3-.35,3.1-.21"/>
                          <path class="cls-3" d="m141.44,206.49c-.2-.42.7-.98,2.03-1.31,1.08-.27,2.3-.35,3.1-.21"/>
                          <path class="cls-3" d="m152.04,209.68c-.2-.42.7-.98,2.03-1.31,1.08-.27,2.3-.35,3.1-.21"/>
                          <path class="cls-3" d="m163.58,202.11c-.2-.42.7-.98,2.03-1.31,1.08-.27,2.3-.35,3.1-.21"/>
                          <path class="cls-3" d="m186.82,198.88c-.2-.42.7-.98,2.03-1.31,1.08-.27,2.3-.35,3.1-.21"/>
                          <path class="cls-3" d="m115.48,216.67c-.2-.42.7-.98,2.03-1.31,1.08-.27,2.3-.35,3.1-.21"/>
                        </g>
                      </g>
                    </g>
                    <g id="drugs-3" ref={drugsRef3} className="drug-type">
                      <g id="drugs-top-3" data-name="drugs-top">
                        <path class="cls-4" d="m182.09,261.3c1-13-65.28-2.61-75.8,2.73-1.12.57-1.24,2.12-.23,2.85,1.97,1.41,5.59,4.77,8.03,5.42,23.26,6.21,38.45,2.58,59.58-6.22,5.76-2.4,8.14-1.13,8.42-4.78Z"/>
                        <g id="bumps-3" data-name="bumps">
                          <path class="cls-3" d="m111.29,266.72c-.05-.34.59-.62,1.46-.66.7-.03,1.46.09,1.93.31"/>
                          <path class="cls-3" d="m143.25,261.31c-.05-.34.59-.62,1.46-.66.7-.03,1.46.09,1.93.31"/>
                          <path class="cls-3" d="m149.19,265.25c-.05-.34.59-.62,1.46-.66.7-.03,1.46.09,1.93.31"/>
                          <path class="cls-3" d="m157.51,261.41c-.05-.34.59-.62,1.46-.66.7-.03,1.46.09,1.93.31"/>
                          <path class="cls-3" d="m172.25,262.53c-.05-.34.59-.62,1.46-.66.7-.03,1.46.09,1.93.31"/>
                          <path class="cls-3" d="m125.67,264.9c-.05-.34.59-.62,1.46-.66.7-.03,1.46.09,1.93.31"/>
                        </g>
                      </g>
                    </g>
                    <g id="measure">
                      <g>
                        <line id="lt-ln" class="cls-3" x1="93.1" y1="229.32" x2="109.17" y2="224.18"/>
                        <path class="cls-3" d="m103.03,253.2l30.91-9.9m-34.65,1.91l16.07-5.15m-18.5-2.75l30.91-9.9m-37.7-3.74l30.91-9.9m-34.65,1.91l16.07-5.15m-18.5-2.75l30.91-9.9m-34.65,1.91l16.07-5.15"/>
                      </g>
                      <g>
                        <line id="lt-ln-2" data-name="lt-ln" class="cls-3" x1="67.42" y1="167.54" x2="83.49" y2="162.4"/>
                        <path class="cls-3" d="m77.35,191.42l30.91-9.9m-34.65,1.91l16.07-5.15m-18.5-2.75l30.91-9.9m-37.7-3.74l30.91-9.9m-34.65,1.91l16.07-5.15m-18.5-2.75l30.91-9.9m-34.65,1.91l16.07-5.15"/>
                      </g>
                    </g>
                  </svg>
                                        
                </div>
            );
}

export default Interactive;