import React from 'react';
import Rain from "../img/011590985840.jpg"
import Clear  from "../img/162941209-adsiz10.webp"
import Mist  from "../img/indir.jpeg"
import Snow  from "../img/snow-as_130246761-1024x682.jpeg"
import Clouds from "../img/616x321-11-eylul-cuma-hava-durumu-meteorolojiden-kuvvetli-ruzgar-uyarisi-yarin-hava-nasil-olacak-1599754869692.jpg"
import { useState } from 'react';
function ArxaPlan({hava}) {
  const[img,setimg]=useState()
 
  return (
    <div className='arkaplan'>
        <div className="overlay"></div>

        {hava.main!=undefined?(hava.weather[0].main)=="Rain"?<img className='arkaplan-resim' src={Rain} alt="" />:null:<img className='arkaplan-resim' src={Rain} alt="" />}
        {hava.main!=undefined?(hava.weather[0].main)=="Clouds"?<img className='arkaplan-resim' src={Clouds} alt="" />:null:null}
        {hava.main!=undefined?(hava.weather[0].main)=="Clear"?<img className='arkaplan-resim' src={Clear} alt="" />:null:null}
        {hava.main!=undefined?(hava.weather[0].main)=="Mist"?<img className='arkaplan-resim' src={Mist} alt="" />:null:null}
        {hava.main!=undefined?(hava.weather[0].main)=="Snow"?<img className='arkaplan-resim' src={Snow} alt="" />:null:null}



        
    </div>
  )
}

export default ArxaPlan