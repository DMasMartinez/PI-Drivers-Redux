import { useState } from "react"
import Drivers from "../components/Drivers"
import { Link } from "react-router-dom"
import Form from "./Form"
import Landing from './Landing'
import Home from "./Home"
import Orderalfa from "../components/Orderalfa"
import Orderalfasearch from "../components/Orderalfasearch"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { driversearch } from "../redux/actions"
import '../Styles/Navbar.css'

const Navbar = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input,setInput] = useState('')
    const location = useLocation()
    function add_driver(value){
        dispatch(driversearch(value))
        navigate('/Searching')
    }
    function changehandler(event){
        if (event.target.name==="ide"){
            setInput(event.target.value)
        }
    }
    return (
        
            <nav class="navbar">
                <a className="landing" href="/">
                    Driver
                </a>

                <div class="opscionesframe">
                    <ul class="listado">
                        <li className="home">
                            <a href="/Home">Home</a>
                        </li>
                        <li className="formulario">
                            <a href="/form">Formulario</a>
                        </li>
                    </ul>
                    <div class='searchframe'>
                        <button onClick={()=>add_driver(input)} class="boton">search</button>
                        <input type="text" name="ide" value={input} onChange={changehandler} class="input"/>
                    </div>
                </div>
                {(location.pathname!=='/form'&&location.pathname!=='/Searching')?(<Orderalfa orderalfa={props.orderalfa} ordernoalfa={props.ordernoalfa} showdrivers = {props.showdrivers} setShowdrivers={props.setShowdrivers} origen={props.origen} setOrigen={props.setOrigen} showteamsform={props.showteamsform} team={props.team} driversteam={props.driversteam} fecha_ascendente={props.fecha_ascendente} fecha_descendente={props.fecha_descendente}/>):(<Orderalfasearch driverlist={props.driverlist} setDriverlist={props.setDriverlist} orderalfa1={props.orderalfa1} ordernoalfa1={props.ordernoalfa1} driversteam1={props.driversteam1} fecha_ascendente1={props.fecha_ascendente1} fecha_descendente1={props.fecha_descendente1} showteamsform={props.showteamsform} team={props.team}/>)}
            </nav>
        
    )
}

export default Navbar

