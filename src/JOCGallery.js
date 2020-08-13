import React from "react";
// Import SRLWrapper
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function JOCImages() {
    return (
        
            <SRLWrapper>
            <div id="gallery">
                <a href="images/joyofcha/joc_b.jpg" data-attribute="SRL">
                    <img src="images/joyofcha/joc_s.jpg" alt="Joy Of Chá logo" />
                </a>
                <a href="images/joyofcha/sg1.jpg" data-attribute="SRL">
                    <img src="/images/joyofcha/joc_styleguide.jpg" alt="Style guide" />
                </a>
                <a href="images/joyofcha/sg4.jpeg" data-attribute="SRL" className="hidden">
                    <img src="/images/joyofcha/sg4_s.jpg" alt="styleguide page 1" />
                </a>
                <a href="images/joyofcha/logo_white.jpg" data-attribute="SRL">
                    <img src="/images/joyofcha/logo_white_s.jpg" alt="Alternative logo" />
                </a>
                <a href="images/joyofcha/joc_site.jpg" data-attribute="SRL">
                    <img src="/images/joyofcha/joc_site_s.jpg" alt="Joy Of Chá Website" />
                </a>
            </div>

            <div id="links">
                <a href="https://github.com/CoreyDennison/theJoyOfCha">Source code on GitHub.</a>
                <a href="https://github.com/CoreyDennison/theJoyOfCha">Source code on GitHub.</a>
                <a href="https://github.com/CoreyDennison/theJoyOfCha">Source code on GitHub.</a>
                <a href="https://github.com/CoreyDennison/theJoyOfCha">Source code on GitHub.</a>
            </div>

            </SRLWrapper> 



    );
}

export default JOCImages;