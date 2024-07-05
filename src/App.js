import Header from "./Header";
import CoreConcepts from "./Core-Concepts";
import {CORE_CONCEPTS} from "./data.js";
import TabButton from "./assets/buttons.jsx";
import "./App.js"
import { useState } from "react";
import { EXAMPLES } from "./data.js";


export default function App(){


  const[selectedTopic,setSelectedTopic]=useState()

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
        }
  return(
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcepts key={conceptItem.title}{...conceptItem}/>)}
            {/* <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
         
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={()=>handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={()=>handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic.</p>: 
             <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
          
        </section>
      </main>
    </div>
  )
}
