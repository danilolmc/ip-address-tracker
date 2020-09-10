import React from 'react'

import { Adress, Loading } from "./style";


export default function AdressData({ data }) {



    const { query, city, countryCode, timezone, isp } = data;

    let location = false || city + countryCode;

    return (
        <Adress>

            <span>
                <p>Endereço do IP</p>
                <div>{query || < Loading id="loading" />} </div>
            </span>
            <span>
                <p>Localização</p>
                <div>{
                    <span>
                    
                        <label>{city}</label><br/>
                        <label>{countryCode}</label>
                    
                    </span> || < Loading id="loading" />} 
                </div>
            </span>
            <span>
                <p>Fuso horário</p>
                <div>{timezone || < Loading id="loading" />}</div>
            </span>
            <span>
                <p>isp</p>
                <div>{isp || < Loading id="loading" />}</div>
            </span>
        </Adress>
    )
}
