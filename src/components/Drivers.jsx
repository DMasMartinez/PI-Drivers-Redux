import Driver from "./Driver"
import { useEffect } from "react"
import { driversearch } from "../redux/actions"
const Drivers = (props) => {

    console.log(props.conductoresearch)
    return (
        <div>
            {props.conductoresearch.map((driver)=>{
                return(
                    <Driver
                        name = {driver.name}
                        surname = {driver.surname}
                        image = {driver.image}
                        description = {driver.description}
                    />
                )
            })}
        </div>
    )
}
        
  

export default Drivers