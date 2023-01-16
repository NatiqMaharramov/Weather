import axios from "axios";
import React from "react";
import { useState } from "react";
// "https://api.openweathermap.org/data/2.5/weather?q=" +
//       searchInput.value +
//       "&appid=e0523b5c61e7908f4bdf611630ff27c6"
function Input({ belirtHavaDurumu }) {
  const api = { key: "&appid=e0523b5c61e7908f4bdf611630ff27c6" };
  const [araParametre, belirtAraParametre] = useState("");

  const ara = (e) => {

    if(e.key==="Enter"){
         axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${araParametre}${api.key}`
      )
      .then((resp) => {
        belirtAraParametre("");
        belirtHavaDurumu(resp.data);
        console.log(resp.data);
      });
    }
 
  };

  return (
    <div className="arama">
      <input
        className="arama-input"
        type="text"
        placeholder="Sehir"
        onChange={(e) => belirtAraParametre(e.target.value)}
        value={araParametre}
       onKeyPress={ara}
      />
    </div>
  );
}

export default Input;
