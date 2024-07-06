import { EXAMPLES } from "../data"
import { useState } from "react";
import TabButton from "./buttons.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples(){
    const[selectedTopic,setSelectedTopic]=useState()

    

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
        }

        
        let  tabContent=<p>Please select a topic.</p>
       if(selectedTopic) {tabContent=
       ( <div id="tab-content">
       <h3>{EXAMPLES[selectedTopic].title}</h3>
       <p>{EXAMPLES[selectedTopic].description}</p>
       <pre>
         <code>
         {EXAMPLES[selectedTopic].code}
         </code>
       </pre>
     </div>)}
    
    return(
        <Section title="Examples"id="examples">
         <Tabs buttonsContainer = "menu"button={
    <>
    <TabButton isSelected={selectedTopic==="components"} onSelect={()=>handleClick('components')}>Components</TabButton>
    <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
    <TabButton isSelected={selectedTopic==="props"} onSelect={()=>handleClick('props')}>Props</TabButton>
    <TabButton isSelected={selectedTopic==="state"} onSelect={()=>handleClick('state')}>State</TabButton>
  </>
}>
  {tabContent}</Tabs> 
         
          
        </Section>
    )
}