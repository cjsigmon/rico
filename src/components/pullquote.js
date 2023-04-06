import * as React from "react";
import '../styles.css';

export default function PullQuote({ what, who, color }) {

    const WHO = who.replace(/[-_]/g, ' ');
    

    return (
        <div className="quote-wrapper-rel">
            <div className="quote-wrapper-abs">
                <div className="big-quote">
                    <svg className="quote-svg" xmlns="http://www.w3.org/2000/svg">
                        <text id="_" data-name="“" fill={color.color} font-size="150" font-family="Americane-Black, Americane" font-weight="800"><tspan x="0" y="140">“</tspan></text>
                    </svg>

                    <h3 className="quote-txt">{what}</h3>
                </div>
                <h4 className="quote-auth">- {WHO}</h4>
            </div> 
        </div>
    );
}