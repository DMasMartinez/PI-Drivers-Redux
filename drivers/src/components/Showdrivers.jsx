import { useEffect } from "react"
import Driver from "./Driver"
const Showdrivers = (props) => {
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
    const all_drivers = () => props.showdrivershome()
    useEffect(()=>{
        all_drivers()
    },[props.page])
    console.log(props.showdrivers)
    return (
        <div>
            {props.showdrivers.map((driver)=>{
                return (
                    <Driver
                        name = {driver.name.forename}
                        surname = {driver.name.surname}
                        image = {driver.image.url}
                        description = {driver.description}
                    />
                )
            })}
            <button onClick={()=>nexpage()}>anterior</button>
            <button onClick={()=>previouspage()}>siguiente</button>
        </div>
    )
}

export default Showdrivers;
{/* <Driver
                        name = {driver.name.forename}
                        surname = {driver.name.forename}
                        image = {driver.image.url}
                        description = {driver.description}
                    /> */}
