import React from 'react';

import { InputBox } from "./style";

export default function Input({ipState,search}) {

    const [ip, setIp] = ipState;

    const handleChange = e => {
        setIp(e.target.value)
    }

    return (

        <InputBox>
            <input type="text" value={ip} onChange={handleChange} placeholder="Procure por qualquer endereço IP" />
            <button onClick={search}>></button>
        </InputBox>

    )
}
