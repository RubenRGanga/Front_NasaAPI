import React, {useState, setState, useEffect} from "react";
import Leaflet from "./Leaflet";
import "./styles/landings_styles.css"



const Landings = () => {

    const [landings, setLandings] = useState([])
    const [query, setQuery] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        const getFetch = async () =>{
            const resp = await fetch(`https://ruben-proyecto-nasa-backend.onrender.com/api/astronomy/landings/${query}`);
            const data = await resp.json();
              setLandings(data)
    
        } 
        
        getFetch();

    }, [query]

    )

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
                    <option value="RESET">by:</option>
                    <option value="name">Name</option>
                    <option value="year">Year</option>
                    <option value="mass">Mass(g)</option>
                    <option value="<:mass"> +Mass(g)</option>
                    <option value="class">Class</option> 
                </select>
            <button onClick={(e) => getFilter(e)}>Search!</button>
        </form>
        <h2>LANDINGS</h2>
        <Leaflet landings={landings}/>
    </div>
    
)

}

export default Landings;