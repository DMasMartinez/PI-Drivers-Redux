import { useEffect } from "react"
import Driver from "./Driver"
import Pagination from "./Pagination"
import '../Styles/Showdrivers.css'
import { useSelector,useDispatch } from "react-redux";
import {alldrivers} from "../redux/actions";

const Showdrivers = (props) => {
    const dispatch = useDispatch()
    const drivers = useSelector(state => state.conductores)
    const initidx = props.qt*(props.page-1)
    const finalidx = props.page*props.qt
    function nexpage(){
        if (props.page<=10){
            props.setPage(props.page+1)
        }
    }
    function previouspage(){
        if (props.page>0){
            props.setPage(props.page-1)
        }
    }

    useEffect(()=>{
        dispatch(alldrivers())
    },[dispatch])
    console.log(drivers)

    return (
            <div class="contenedor">
                {drivers.slice(initidx,finalidx).map((driver)=>{
                    return (
                        <div class="elemento">
                            <Driver
                                name = {driver.name.forename}
                                surname = {driver.name.surname}
                                image = {driver.image.url}
                                description = {driver.description}
                                teams = {driver.teams}
                            />
                        </div>
                    )
                })}
                <Pagination nexpage={nexpage} previouspage={previouspage} qt = {props.qt}/>
            </div>
    )
}

export default Showdrivers;
