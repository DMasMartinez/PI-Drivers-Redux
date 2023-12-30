import { useState } from "react"
import Drivers from "../components/Drivers"
import { Link } from "react-router-dom"
import Form from "./Form"
import Landing from './Landing'
import Home from "./Home"
import Orderalfa from "../components/Orderalfa"
import { useLocation } from "react-router-dom"

const Navbar = (props) => {
    const [input,setInput] = useState('')
    const location = useLocation()
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
            {location.pathname!=='/form'&&<Orderalfa orderalfa={props.orderalfa} ordernoalfa={props.ordernoalfa} showdrivers = {props.showdrivers} setShowdrivers={props.setShowdrivers}/>}
            
            <button onClick={()=>props.search(input)}>search</button>
            <input type="text" name="ide" value={input} onChange={changehandler}/>
            
        </div>
    )
}

export default Navbar