import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import "./leadflet.css"

  const Leaflet = ({landings}) => {

    let landing = landings.filter(landing => landing.geolocation)

  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false} className='marcoMapa'>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {landing.map((item) => (

      <Marker key={item.id} position={[(item.geolocation.latitude), (item.geolocation.longitude)]}>
        <Popup key={item.id}>
          Name: {item.name} <br/> Mass(g) :{item.mass} <br/> Year:{item.year}
        </Popup>
      </Marker>

      ))}

      </MapContainer>
   
  )
}

export default Leaflet