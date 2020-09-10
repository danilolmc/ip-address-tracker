import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import GlobalStyle from "./style/Globastyle"

import Input from './components/Input';

import AdressData from "./components/AdressData"

import Map from "./components/Map";

import getData from "./services/axios";

function App() {

  const [ip, setIp] = useState("")
  const [result, setResult] = useState("")


  const fetchData = async (ipNumber) => {
      
    const search = await getData(ipNumber);
    
    if(search.status === 200){

      setResult(search.data);
    }

  }

  useEffect(() => {
   
    
    fetchData();

  }, [])



  return (
    <>
      <GlobalStyle />

      <Header>
        <Input ipState={[ip, setIp]} search={fetchData} />
        <AdressData data={result} />
      </Header>
      <Map lat={result.lat || -50} lon={result.lon || 10}/>

    </>
  );
}

export default App;
