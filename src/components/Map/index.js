import React from 'react';

import { MyMap } from "./style";

import { Map as MapContent, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

import iconLc from "../../assets/images/icon_location.png";

export default function Map({lat,lon}) {


    const iconLocation = new L.Icon({
        iconUrl: iconLc,
        iconSize: new L.Point(60, 60),
        className: 'leaflet-icon-location'
    });

    return (
        <MyMap>
            <MapContent center={[lat, lon]} zoom={17}>
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />


                <Marker position={[lat, lon]} icon={iconLocation}/>
            </MapContent>
        </MyMap>
    )
}
