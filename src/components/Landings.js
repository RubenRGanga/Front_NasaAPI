import React, {useState, setState, useEffect} from "react";
import Leaflet from "./Leaflet";
import "./styles/landings_styles.css"

const Landings = () => {

    const [landings, setLandings] = useState([])


    useEffect(() => {
        const getFetch = async () =>{
            const res = await fetch(`https://ruben-proyecto-nasa-backend.onrender.com/api/astronomy/landings`);
            const data = await res.json();
              setLandings(data)
    
        } 
        
        getFetch();

    }, []

    )
        
return (
    
    <div className="cuadroLandings">
        <h2>LANDINGS</h2>
        <Leaflet landings={landings}/>
    </div>
    
)

}

export default Landings;