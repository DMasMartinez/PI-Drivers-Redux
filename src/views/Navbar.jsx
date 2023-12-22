import { useState } from "react"
import Drivers from "../components/Drivers"

const Navbar = (props) => {
    const [input,setInput] = useState('')
    function changehandler(event){
        if (event.target.name==="ide"){
            setInput(event.target.value)
        }
    }
    return (
        <div>
            <button onClick={()=>props.search}>search</button>
            <input type="text" name="ide" value={input} onChange={changehandler}/>
            
        </div>
    )
}

export default Navbar