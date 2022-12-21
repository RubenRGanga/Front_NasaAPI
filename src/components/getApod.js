import React, {useState, useEffect} from "react";
import TemplateApod from "./templateApod";

function GetApod(){
    const [apod, setApod] = useState({})

    useEffect(() => {
      getFetch()
    }, [])
    

    const getFetch = async () => {
        const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=uY7HavLXVof0lksxtDQQXvUzVnIprkJ23cXmuZl8`);
        const data = await resp.json();
         setApod(data);
    
        }
        
return (
    <>
    <div className="cuadroApod">
       <TemplateApod titleApod={apod.title} imgApod={apod.url} explanationApod={apod.explanation}/>
    </div>
    </>
)

}

export default GetApod;