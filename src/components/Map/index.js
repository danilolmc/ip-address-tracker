import React from 'react';

import { MyMap } from "./style";

import { Map as MapContent, TileLayer } from "react-leaflet";

export default function Map() {
    return (
        <MyMap>
            <MapContent center={[-23.5378072,-46.6432592]} zoom={50}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
            </MapContent>
        </MyMap>
    )
}
