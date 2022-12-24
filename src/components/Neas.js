import "./styles/neas_styles.css"

import React, { useState, useEffect } from 'react';




function Neas() {
  const [data, setData] = useState([]);
  // const [neas, setNeas] = useState('');

  useEffect(() => {
    fetch('https://ruben-proyecto-nasa-backend.onrender.com/api/astronomy/neas/')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  const handleDelete= designation => {
    // setNeas(false)
    setData(data.filter(data => data.designation !== designation))
    console.log(designation)
	}

  return (
    <>
    <h2>N.E.A.S.</h2>
    <div className="cuadroNeas">
      {data.map((item,index) => (
        
        <div key={item._id}>
            <div className="card">
                <h3>{item.designation}<i id='xButton' className='fas fa-times' onClick={()=>handleDelete(item.designation)}></i></h3>
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
}


export default Neas;