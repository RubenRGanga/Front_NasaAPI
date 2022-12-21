import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import "./leadflet.css"

  const Leaflet = ({landings}) => {

    let landing = landings.filter(landings => landing.geolocation)

  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {landing.map((item) => (

      <Marker key={item.id} position={[parseInt(item.geolocation.latitude, 10), parseInt(item.geolocation.longitude, 10)]}>
        <Popup key={item.id}>
          Nombre: {item.name} <br/> Masa:{item.mass} <br/> Año:{item.year}
        </Popup>
      </Marker>

      ))}

      </MapContainer>
   
  )
}

export default Leaflet