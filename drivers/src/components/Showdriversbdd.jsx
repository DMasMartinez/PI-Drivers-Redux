import { useState,useEffect } from "react"
import toreto from '../utils/toreto.jpeg'
import { useDispatch,useSelector } from "react-redux"
import { alldriversbdd } from "../redux/actions"
const Showdriversbdd = (props) =>{
    const dispatch = useDispatch()
    const conductoresbdd = useSelector(state=>state.conductoresbdd)
    useEffect(()=>{
        // props.showbddform()
        dispatch(alldriversbdd())
    },[])
    
    console.log(conductoresbdd)
    return (
        <div>
            {conductoresbdd.map((driver)=>{
                return(
                    <div>
                        <img src={toreto} alt={driver.name}/>
                        <h2>{driver.name}</h2>
                        <h2>{driver.surname}</h2>
                        <h2>{driver.teams}</h2>
                    </div>
                )
            })}

        </div>
    )
}

export default Showdriversbdd;