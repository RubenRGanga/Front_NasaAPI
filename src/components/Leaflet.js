import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import "./styles/leadflet_styles.css"


  const Leaflet = ({landings}) => {

    let landing = landings.filter(landing => landing.geolocation)

  return (
    <MapContainer center={[31.505, -0.09]} zoom={2} scrollWheelZoom={true} className='marcoMapa'>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {landing.map((item) => (

      <Marker key={item._id} position={[(item.geolocation.latitude), (item.geolocation.longitude)]}>
        <Popup key={item._id}>
          Name: {item.name} <br/> Mass(g) :{item.mass} <br/> Year:{item.year} <br/> <br/> <Link to={`/cpl/${item._id}`}><button>EDIT:</button></Link>
        </Popup>
      </Marker>

      ))}

      </MapContainer>
   
  )
}

export default Leaflet