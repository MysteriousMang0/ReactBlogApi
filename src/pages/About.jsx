import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function About() {

    document.title = "About"
    let link = document.querySelector("link[rel*='icon']");
    link.href = "https://www.sanctamaria.nl/runtime/images/49/32x32/sancta_rood_equilibrist.jpg"

    return(
        <>
            
            <h1>About</h1>
        </>
        
    );
}

export default About