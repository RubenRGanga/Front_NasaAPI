import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from '@mui/material';
import axios from "axios";
import "./styles/neas_styles.css"

const endPointNeas = 'https://ruben-proyecto-nasa-backend.onrender.com/api/astronomy/neas/';


const Neas = () => {
  const [neas, setNeas] = useState([]);

    useEffect(() => {
      async function getNeas (){

        const { data } = await axios(endPointNeas);
          
          setNeas(data);
      }
      getNeas();
    },[]);

    const deleteNea = async (designation) => {
      try {
        await axios.delete(endPointNeas + `/delete/${designation}`);
        setNeas(neas.filter(nea => nea.designation !== designation));
      } catch (error) {
        console.error(error);
      }
    }
    

    return (
      <>
      <h2>N.E.A.S.</h2> 
      <div className="cuadroNeas">
      
      {neas.map((item,index) => (
        <div key={item._id}>
          <div className="card">
            <h3>{item.designation}<Tooltip title="Delete NEAS" arrow><i id='xButton' className='fas fa-times' onClick={()=>deleteNea(item.designation)}></i></Tooltip></h3>
            <p className="light"><span className="type">Orbit:</span> {item.orbit_class}</p>
            <p><span className="type">Discovery:</span> {item.discovery_date.substring(0, item.discovery_date.length - 13)}</p>
            <p className="light"><span className="type">H (mag):</span> {item.h_mag}</p>
            <p><span className="type">Moid (au):</span> {item.moid_au}</p>
            <p className="light"><span className="type">Q (au) 1:</span> {item.q_au_1}</p>
            <p><span className="type">Q (au) 2:</span> {item.q_au_2}</p>
            <p className="light"><span className="type">Period year:</span> {item.period_yr}</p>
            <p><span className="type">i (deg):</span> {item.i_deg}</p>
            <p className="light_bottom"><span className="type">Pha:</span> {item.pha}</p>
          </div>
        </div>
              
      ))}
      </div>
      </>
    );
};


export default Neas;