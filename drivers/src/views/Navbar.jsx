import { useState } from "react"
import Drivers from "../components/Drivers"
import { Link } from "react-router-dom"
import Form from "./Form"
import Landing from './Landing'
import Home from "./Home"
import Orderalfa from "../components/Orderalfa"
import Orderalfasearch from "../components/Orderalfasearch"
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
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a className="navbar-brand" href="/">
                    Driver
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/form">Formulario</a>
                        </li>
                    </ul>
                    <div class='d-flex' role="search">
                        <button onClick={()=>props.search(input)} class="btn btn-outline-success">search</button>
                        <input type="text" name="ide" value={input} onChange={changehandler} class="form-control me-2" placeholder="Search" aria-label="Search"/>
                    </div>
                    
                    {/* <form class="d-flex" role="search">
                        <input type="search" placeholder="Search" aria-label="Search" name="ide" value={input} onChange={changehandler}/>
                        <button class="btn btn-outline-success" type="text" onClick={()=>props.search(input)}>Search</button>
                    </form> */}
                </div>
            </div>
            {(location.pathname!=='/form'&&location.pathname!=='/Searching')?(<Orderalfa orderalfa={props.orderalfa} ordernoalfa={props.ordernoalfa} showdrivers = {props.showdrivers} setShowdrivers={props.setShowdrivers} origen={props.origen} setOrigen={props.setOrigen} showteamsform={props.showteamsform} team={props.team} driversteam={props.driversteam} fecha_ascendente={props.fecha_ascendente} fecha_descendente={props.fecha_descendente}/>):(<Orderalfasearch driverlist={props.driverlist} setDriverlist={props.setDriverlist} orderalfa1={props.orderalfa1} ordernoalfa1={props.ordernoalfa1} driversteam1={props.driversteam1} fecha_ascendente1={props.fecha_ascendente1} fecha_descendente1={props.fecha_descendente1} showteamsform={props.showteamsform} team={props.team}/>)}
        </nav>
        
    )
}

export default Navbar

{/* <div>
            <Link to='/form'>Formulario</Link>
            <Link to='/'>Landing</Link>
            <Link to='/Home'>Home</Link>
            {location.pathname!=='/form'&&<Orderalfa orderalfa={props.orderalfa} ordernoalfa={props.ordernoalfa} showdrivers = {props.showdrivers} setShowdrivers={props.setShowdrivers}/>}
            
            <button onClick={()=>props.search(input)}>search</button>
            <input type="text" name="ide" value={input} onChange={changehandler}/>
            
        </div> */}