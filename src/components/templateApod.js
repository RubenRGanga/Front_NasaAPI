import React from "react";

import "./styles/templateApod_styles.css"

function TemplateApod ({titleApod, imgApod, explanationApod}){

    return(
        <div className="templateApod">
            <h2>{titleApod}</h2>
            <div className="fotoYTexto">
            <div className="marcoApod">
            <img src={imgApod} alt="APOD"></img>
            </div>
            <p>{explanationApod}</p>
            </div>
        </div>
    );
}

export default TemplateApod;