import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import GlobalStyle from "./style/Globastyle"

import Input from './components/Input';

import AdressData from "./components/AdressData"

function App() {

  const [ip, setIp] = useState("")

  function SearchIp() {
    console.log(ip);
  }

  return (
    <>
      <GlobalStyle />

      <Header>
        <Input ipState={[ip, setIp]} search={SearchIp} />
        <AdressData />
      </Header>


    </>
  );
}

export default App;
