import { useState } from "react"
import Drivers from "../components/Drivers"
import { Link } from "react-router-dom"
import Form from "./Form"
import Landing from './Landing'
import Home from "./Home"


const Navbar = (props) => {
    const [input,setInput] = useState('')
    function changehandler(event){
        if (event.target.name==="ide"){
            setInput(event.target.value)
        }
    }
    return (
        <div>
            <Link to='/form'>Formulario</Link>
            <Link to='/'>Landing</Link>
            <Link to='/Home'>Home</Link>
            
            <button onClick={()=>props.search}>search</button>
            <input type="text" name="ide" value={input} onChange={changehandler}/>
            
        </div>
    )
}

export default Navbar