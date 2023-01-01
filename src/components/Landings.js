import React, {useState, setState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import axios from "axios";
import Leaflet from "./Leaflet";
import "./styles/landings_styles.css"

const endPointLandings = "https://ruben-proyecto-nasa-backend.onrender.com/api/astronomy/landings/";


const Landings = () => {

    const [landings, setLandings] = useState([])
    const [query, setQuery] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        async function getLandings (){

            const { data } = await axios(endPointLandings + `${query}`);
              
              setLandings(data);
          }
          getLandings();
        },[query]);

        const deleteLanding = async (id) => {
            try {
              await axios.delete(endPointLandings + `/delete/${id}`);
              setLandings(landings.filter(landing => landing.id !== id));
            } catch (error) {
              console.error(error);
            }
          }

    const getFilter = (e) => {
        e.preventDefault(e)
        const select = document.getElementById('value')
        
        if(select.value === "RESET"){
            let query = ""
            setQuery(query)
            setInput("")
        } else if(select.value === "name"){
            let query = "name/" + input
            setQuery(query)
            setInput("")
        } else if(select.value === "mass"){
            let query = "mass/" + input
            setQuery(query)
            setInput("")
        } else if(select.value === "<:mass"){
            let query = "minimum_mass/" + input
            setQuery(query)
            setInput("")
        } else if (select.value === "class") {
            let query = "class/" + input
            setQuery(query)
            setInput("")
        } else if (select.value === "year") {
            let query = "year/" + input
            setQuery(query)
            setInput("")
        }

}    
        
return (

    <div className="cuadroLandings">
        <form className='search'>
            <input type= "text" value={input} onChange={(event) => setInput(event.target.value)}/>
                <select id="value" name="value" onSubmit={(event) => console.log(event.target.value)}>
                    <option>by:</option>
                    <option value="name">Name</option>
                    <option value="year">Year</option>
                    <option value="mass">Mass(g)</option>
                    <option value="<:mass"> +Mass(g)</option>
                    <option value="class">Class</option> 
                </select>
            <button id="search" onClick={(e) => getFilter(e)}>Search!</button>

            <Tooltip title="Landings Control Panel" arrow>
                <Link to={"/cpl"}><button id="linkCPLanding" className="fa-solid fa-meteor"></button></Link>
            </Tooltip>

        </form>
        <Leaflet landings={landings}/>
    </div>
    
)

}

export default Landings;