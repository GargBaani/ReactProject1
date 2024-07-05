
import headimg from "./assets/react-core-concepts.png"
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRanInt(max){
    return Math.floor(Math.random() *(max+1))
}

export default function Header(){
    const description=reactDescriptions[genRanInt(2)]
    return(
        <header>
             <img src={headimg} alt=""></img>
             <h1>React Essentials</h1>
             <p> {description} React concepts you will need for almost any app you are going to build!</p>
        </header>

    )
}