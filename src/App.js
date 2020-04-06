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
  const [myself, setMyself] = useState();

  const submitted = () => {
   

    setInputData("");
    setSamp(inputData);
    const diamond = inputData.toUpperCase().split("");


    if (/[^a-z ]/i.test(inputData)) {
      // exercise.textContent = 'Please enter letters and spaces only';
      const word = 'HAW HAW'
      return word;
    }

    let text = [];
    let me = [];

    for (let i of diamond) {
      switch (i) {
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
            // case (/[^a-z ]/i.test(inputData)):
            //  text += 'Please enter letters and spaces only';
            // break;
           
            default:
            
            text += "Please type letters only ";    
        }
      // setTexting([text]);
    }

    setMyself(me);
  };

  const changed = e => {
    setInputData(e.target.value);
  };

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>

      <input name="excercise" onChange={changed} value={inputData || ""} />
      <button onClick={submitted}>Submit</button>

     <p>{samp ? `You Typed ${samp}` : ''}</p> 

      <p>{myself ? myself.map(item => <p>{item}</p>) : ""}</p>
    </div>
  );
}
