import { useState } from "react";
import axios from "axios";
import { Tooltip } from '@mui/material';

import "./styles/formLandings_styles.css"

const apiEndpoint = 'https://ruben-proyecto-nasa-backend.onrender.com/api/astronomy/landings/create/';

const FormLandings = () => {
  const [name, setName] = useState("");
  const [recclass, setRecclass] = useState("");
  const [year, setYear] = useState("");
  const [mass, setMass] = useState("");
  const [reclat, setReclat] = useState("");
  const [reclong, setReclong] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !recclass || !year || !mass || !reclat || !reclong) return alert("Missing data");
      

    const newLanding = {
      name,
      nametype: "Valid",
      recclass,
      mass,
      fall: "Fell",
      year,
      reclat,
      reclong,
      geolocation: {latitude: reclat, longitude: reclong}
    };

    try {
      const { data } = await axios.post(apiEndpoint, newLanding);
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    alert("Landing successfully added");
    window.location.reload();

  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="form">
            <div className="input-group">
            <label htmlFor="exampleFormControlInput1"className="label">NAME: </label>
            <input autoComplete="off" 
            name="name" 
            id="name" 
            className="input" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            </div>
            
            <div className="input-group">
            <label htmlFor="exampleFormControlInput2"className="label">CLASS: </label>
            <input autoComplete="off" 
            name="recclass" 
            id="recclass" 
            className="input" 
            type="text" 
            value={recclass}
            onChange={(e) => setRecclass(e.target.value)}/>
            </div>

            <div className="input-group">
            <label htmlFor="exampleFormControlInput3"className="label">MASS (g): </label>
            <input autoComplete="off" 
            name="mass" 
            id="mass" 
            className="input" 
            type="number" 
            value={mass}
            onChange={(e) => setMass(e.target.value)}/>
            </div>

            <div className="input-group">
            <label htmlFor="exampleFormControlInput4"className="label">YEAR: </label>
            <input autoComplete="off" 
            name="year" 
            id="year" 
            className="input" 
            type="number" 
            value={year}
            onChange={(e) => setYear(e.target.value)}/>
            </div>

            <div className="input-group">
            <label htmlFor="exampleFormControlInput5"className="label">LATITUDE: </label>
            <input autoComplete="off" 
            name="reclat" 
            id="reclat" 
            className="input" 
            type="number" 
            value={reclat}
            onChange={(e) => setReclat(e.target.value)}/>
            </div>

            <div className="input-group">
            <label htmlFor="exampleFormControlInput6"className="label">LONGITUDE: </label>
            <input autoComplete="off" 
            name="reclong" 
            id="reclong" 
            className="input" 
            type="number" 
            value={reclong}
            onChange={(e) => setReclong(e.target.value)}/>
            </div>
        </div>
        <Tooltip title="Add new landing" arrow>
            <button className="submit" type="submit">Submit</button>
        </Tooltip>
    </form>
  </>
  );
};

export default FormLandings;