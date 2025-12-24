import { useState } from "react";
import clouds from "../assets/clouds.png";
import logo  from "../assets/logo.png";
function Search() {
  const arr = [
    { id: 1, name: "Zakia", class: "One", degree: "IT",img :clouds,desc:"hkdjjsdkkfkjhsjdsjd" },
    { id: 2, name: "Sakia", class: "Two", degree: "CSIT",img :logo},
    { id: 3, name: "Zakia", class: "One", degree: "IT",img : clouds},
    { id: 4, name: "Sakia", class: "Two", degree: "CSIT" }
  ];

  return (
    <div className="parent">
      {arr.map((item) => (
        <div className="card" key={item.id}>
        <img src={item.img}/>
          <h2>{item.name}</h2>
          <h3>{item.class}</h3>
          <h2>{item.desc}</h2>
        </div>
      ))}
    </div>
  );
}

export default Search;
