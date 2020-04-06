//TODO : FIGURE OUT HOW TO BREAK LINE IN text Variable
//STATE MANAGEMENT TO SAVE
//INITIAL STEP - POSSIBLY LOCAL STORAGE
//HEROKU

import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [inputData, setInputData] = useState("");
  const [samp, setSamp] = useState();
  const [chan, setChan] = useState();
  const [beeD] = useState([]);
  const [texting, setTexting] = useState();

  const submitted = () => {
    const myArray = ["60", "50", "20", "30", "15", "10"];
    var randomJumpingJacks =
      myArray[Math.floor(Math.random() * myArray.length)];

    setInputData("");
    setSamp(inputData);

    console.log(inputData, "inside submit");
    const diamond = Object.assign([], inputData);

    console.log(diamond, "diamond");
    setChan([...diamond]);

    console.log(chan, "are you here");

    let text = "";

    // for(let i=0; i< diamond.length; i++){
    for (let i of diamond) {
      switch (i) {
        case "e":
          // text += randomJumpingJacks;
          console.log((text += " Bubbles"));
          // console.log(text.push("Bubbles"));
          break;
        case "h":
          text += " Blossom";
          // text.push("Blossom");
          break;
        case "l":
          text += " Buttercup";
          // text.push("Buttercup");
          break;
        case "o":
          text += " Professor X";
          break;
        default:
          text += " Type Something else";
      }
      // text += ' '
      text += "\n\t";
    }
    text += "</li>";

    setTexting(text);

    console.log(text, "text");
    console.log(inputData, "inputdata");
  };

  const changed = e => {
    setInputData(e.target.value);
  };

  console.log("texXXXT", texting, "teXXX");

  return (
    <div className="App">
      <h1>{inputData ? "yes" : "no"}</h1>
      <h2>Start editing to see some magic happen!</h2>

      <input name="excercise" onChange={changed} value={inputData || ""} />
      <button onClick={submitted}>Submit</button>

      {samp}
      {/* {chan} */}
      {chan ? chan.map(item => <p>{item}</p>) : ""}
      {chan ? beeD.map(item => <p>{item}</p>) : ""}
      <p>
        {<li>{texting}</li>} <span> --- from for loop</span>
      </p>
    </div>
  );
}
