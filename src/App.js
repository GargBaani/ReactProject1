import Header from "./Header";
import CoreConcepts_ from "./assets/CoreConcepts.jsx";
import "./App.js"
import Examples from "./assets/Examples.jsx";



export default function App(){
  return(
    <>
      <Header/>
      <main>
        <CoreConcepts_/>
        <Examples/>
      </main>
    </>
  )
}
