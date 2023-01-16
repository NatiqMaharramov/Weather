import React from "react";
import { useState } from "react";

function Sonuc({ hava }) {
  // let temp = Math.round(hava.main.temp- 273.15);
  // const [temp,settemp]=useState("")


  // if(hava.main!="undefined"){
  //   settemp(hava.main.temp-273.15)
  //   console.log(temp);
  // }

  let temp=0
  if(hava.main==undefined){
    // console.log("1");
  }else{
    // console.log("2");
   temp = Math.round(hava.main.temp- 273.15);


  }
// console.log(hava.main);
   
  return (
    <>
    {hava.main !=undefined ?
        <div className="sonuc">
        <div className="sehir">{hava.name}</div>
        <div className="detay">
          <div className="derece">{temp}°C</div>
          <div className="statu">{hava.weather[0].main}</div>
        </div>
      </div>
    :null}
      
    </>
  );
}

export default Sonuc;
