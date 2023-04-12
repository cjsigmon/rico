import * as React from "react";
import '../styles.css';
import { Controller, Scene } from 'react-scrollmagic';
import { TweenMax } from 'gsap';
import { useRef, useEffect } from "react";

export default function Timeline() {  
  

    return (
      <div>
        <Controller>
          <Scene duration={600} pin>
            <div> Sticky Example </div>
          </Scene>
        </Controller>
      </div>
    );
}