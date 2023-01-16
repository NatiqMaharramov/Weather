import React from 'react'
import Input from './arama/Input'
import ArxaPlan from './Arxaplan/ArxaPlan'
import Sonuc from './sonuc/Sonuc'
 import { useState } from 'react'

function App() {

  const[havadurumu,belirtHavaDurumu]=useState({});
  // console.log(havadurumu); 
  const [temp,settemp]= useState(0)
  // settemp(havadurumu.main.temp-273.15)
  
  // console.log(temp);
  return (
      <div className='uygulama'>
        <ArxaPlan hava={havadurumu}/>
        <div id="baslik">
          Hava durumu
        </div>
        <Input belirtHavaDurumu={belirtHavaDurumu}/>
        <Sonuc hava={havadurumu} />
        
      </div>
  )
}

export default App