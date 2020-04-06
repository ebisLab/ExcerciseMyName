//TODO : FIGURE OUT HOW TO BREAK LINE IN text Variable
//STATE MANAGEMENT TO SAVE
//INITIAL STEP - POSSIBLY LOCAL STORAGE
//HEROKU

import React, { useState } from "react";
import "./App.css";
import {randomJumpingJacks, randomCrunches,randomSquats,  randomPushUps, randomWallSits, randomBurpees, randomArmCircles} from './data/data'

export default function App() {
  const [inputData, setInputData] = useState("");
  const [samp, setSamp] = useState();
  const [chan, setChan] = useState();
  const [beeD] = useState([]);
  const [texting, setTexting] = useState([]);
  const [myself, setMyself] = useState();

  const submitted = () => {
    // const myArray = ["60", "50", "20", "30", "15", "10"];
    // var randomJumpingJacks = reps[Math.floor(Math.random() * reps.length)];

    setInputData("");
    setSamp(inputData);

    console.log(inputData, "inside submit");
    // const diamond = Object.assign([], inputData);
    const diamond = inputData.split("");

    console.log(diamond, "diamond");
    setChan([...diamond]);

    console.log(chan, "are you here");

    let text = "";
    let me = [];

    // for(let i=0; i< diamond.length; i++){
    for (let i of diamond) {
      switch (i) {
        case "e":
          text += " Bubbles";
          // text += randomJumpingJacks;
          //  text.push("Blossom");
          // console.log((text += " Bubbles"));
          // console.log(text.push("Bubbles"));
          console.log((text += me.push("Hi")));
          console.log("inside Bubbles", me);
          break;
        case "h":
          text += ` ${randomJumpingJacks} Blossom`;
          console.log(text, "text, inside H");
          // text.push("Blossom");
          console.log((text += me.push("IM")));
          break;
        case "l":
          text += " Buttercup";
          console.log((text += me.push("INSIDE")));
          // text.push("Buttercup");
          break;
        case "o":
          text += " Professor X";
          break;
        default:
          text += " Type Something else";
      }
      // text += ' '
      // text += "\n";
      setTexting([text]);
      console.log(text, "text");
      console.log(me, "meeee outside about to set");
    }

    // setTexting(text);

    console.log(text, "<--text");
    console.log(inputData, "inputdata");
    console.log(me, "**MEEEE**");
    setMyself(me);
  };

  const changed = e => {
    setInputData(e.target.value);
  };

  console.log("texXXXT", texting, "teXXX");
  console.log("~~~~", myself);

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
        {console.log(Array.isArray(texting))}
        {<li>{texting}</li>} <span> --- from for loop</span>
        {texting.map(item => (
          <li>{item}</li>
        ))}
        <p>
          {console.log("is this an array", Array.isArray(myself))} is this an
          array
          {console.log("hello", myself)}
          {myself ? myself.map(item => <p>{item}</p>) : ""}
        </p>
      </p>
    </div>
  );
}
