import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import './gallery.css'

    function MSAImages() {
    return (
        
            <SRLWrapper>
                <div id="gallery">
                    <a /*Main Image*/href="images/artist/abmm.jpg" data-attribute="SRL">
                        <img /*Thumbnail*/src="images/artist/abmm_s.jpg" alt="Spotify Battle App mindmap" />
                    </a>
                    <a href="images/artist/app_wireframe.png" data-attribute="SRL">
                        <img src="/images/artist/app_wireframe_s.jpg" alt="App wireframe" />
                    </a>
                    <a href="images/artist/login.png" data-attribute="SRL">
                        <img src="/images/artist/login_s.jpg" alt="App login" />
                    </a>
                    <a href="images/artist/battle3.png" data-attribute="SRL">
                        <img src="/images/artist/artist_battle.jpg" alt="Spotify Battle App Demo" />
                    </a>
                </div>
            </SRLWrapper> 
        
    );
}

export default MSAImages;