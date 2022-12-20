import React from "react";

function TemplateApod ({titleApod, imgApod, explanationApod}){

    return(
        <div className="templateApod">
            <h2>{titleApod}</h2>
            <img src={imgApod} alt="APOD"></img>
            <p>{explanationApod}</p>
        </div>
    );
}

export default TemplateApod;