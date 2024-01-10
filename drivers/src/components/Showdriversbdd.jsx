import { useState,useEffect } from "react"
import toreto from '../utils/toreto.jpeg'
const Showdriversbdd = (props) =>{

    useEffect(()=>{
        props.showbddform()
    },[])
    
    console.log(props.showdriversbdd)
    return (
        <div>
            {props.showdriversbdd.map((driver)=>{
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