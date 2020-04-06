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
        // case "e":
        //   text += " Bubbles";
        //   // text += randomJumpingJacks;
        //   //  text.push("Blossom");
        //   // console.log((text += " Bubbles"));
        //   // console.log(text.push("Bubbles"));
        //   console.log((text += me.push("Hi")));
        //   console.log("inside Bubbles", me);
        //   break;
        // case "h":
        //   text += ` ${randomJumpingJacks} Blossom`;
        //   console.log(text, "text, inside H");
        //   // text.push("Blossom");
        //   console.log((text += me.push("IM")));
        //   break;
        // case "l":
        //   text += " Buttercup";
        //   console.log((text += me.push("INSIDE")));
        //   // text.push("Buttercup");
        //   break;
        // case "o":
        //   text += " Professor X";
        //   break;
            case "A":
            case "I":
            case "N":
            case "X":
                text += me.push(`${randomJumpingJacks} Jumping Jacks`)
             break;
            case "B":
            case "J":
            case "Q":
            case "Y":
              text += me.push(`${randomCrunches} Crunches`)   
              break;
            case "C":
            case "H":
            case "T":
              text += me.push(`${randomSquats} Squats`)
            break;
            case "D":
            case "K":
            case "R":
            case "Z":
              text += me.push(`${randomPushUps} Push ups`)   
            break;
            case "E":
            case "L":
            case "V":
              text += me.push(`${randomWallSits} seconds Wall Sits`)
            break;
            case "F":
            case "M":
            case "O":
            case "S":
              text += me.push(`${randomBurpees} Burpees`)
            break;
            case "G":
            case "P":
            case "U":
            case "W":
              text += me.push(`${randomArmCircles} Arm Circles`)
            break;
            case " ":
                /*text += " break ";*/
            break;
           
            default:
            text += "Please type letters only ";    
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

    
      {/* {chan ? chan.map(item => <p>{item}</p>) : ""} */}
      {/* {inputData? `You typed: ${inputData} `: ''} */}
     <p>{samp ? `You Typed ${samp}` : ''}</p> 
    
       
        <p>
          
          {myself ? myself.map(item => <p>{item}</p>) : ""}
      </p>
    </div>
  );
}
