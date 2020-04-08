//TODO : FIGURE OUT HOW TO BREAK LINE IN text Variable
//STATE MANAGEMENT TO SAVE
//INITIAL STEP - POSSIBLY LOCAL STORAGE
//HEROKU

import React, { useState } from "react";
import "./App.css";
import {reps} from './data/data'

export default function App() {
  const [inputData, setInputData] = useState("");
  const [samp, setSamp] = useState();
  const [myself, setMyself] = useState();
const [myobj, setMyObj]=useState();

  
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
    let obj =[];
    let count = 0;
    // var randomJumpingJacks;

    for (let i of diamond) {
let idItem = count++ +1
      console.log(Date.now(),  'inside for loop ID')
      console.log(i.length, 'i')
      console.log(count++ +1, '<---count')
    let randomJumpingJacks = reps[Math.floor(Math.random() * reps.length)]
    let randomCrunches = reps[Math.floor(Math.random()*reps.length)];
    let randomSquats = reps[Math.floor(Math.random()*reps.length)];
    let randomPushUps = reps[Math.floor(Math.random()*reps.length)];
    let randomWallSits = reps[Math.floor(Math.random()*reps.length)];
    let randomBurpees = reps[Math.floor(Math.random()*reps.length)];
    let randomArmCircles = reps[Math.floor(Math.random()*reps.length)];

      switch (i) {
            case "A":
            case "I":
            case "N":
            case "X":
                text += me.push(`${randomJumpingJacks} Jumping Jacks`)
                text += obj.push({ id:idItem, reps: randomJumpingJacks,  excercise: 'Jumping Jacks', url: 'https://media.giphy.com/media/28etK3CCOH9CDrAqmX/giphy.gif'})
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
              // me += me.push(`${randomSquats} Squats`)
            break;
            case "D":
            case "K":
            case "R":
            case "Z":
              text += me.push(`${randomPushUps} Push ups`)
              text += obj.push({id:idItem, reps: randomPushUps,  excercise: 'Push ups', url: 'https://media.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif'})
   
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
    setMyObj(obj)
    // console.log(text)
    console.log(me, '<--me')
    console.log(obj, '<------obj')
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

      <div>{myself ? myself.map((item, key) => <p key={key}>{item}</p>) : ""}</div>
      <div>{myobj ? myobj.map((item,key)=><div style={{width: '150px', overflow: 'auto', margin: '20px', borderRadius: '50%', border: '3px solid black'}} key={key}><img alt={item.excercise} style={{height: '149px'}} src={item.url} /></div>) : ''}</div>
    </div>
  );
}
