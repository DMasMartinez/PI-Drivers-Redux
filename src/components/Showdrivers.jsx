import { useEffect } from "react"
import Driver from "./Driver"
const showdrivers = () => {
    function nexpage(){
        if (page<=10){
            setPage(page+1)
        }
    }
    function previouspage(){
        if (page>0){
            setPage(page-1)
        }
    }
    function showdrivers(){
        return props.showdrivershome()
    }
    useEffect(()=>{
        showdrivers()
    },[props.page])
    return (
        <div>
            {props.showdrivers.map((driver)=>{
                return (
                    <Driver
                        name = {driver.forename.name}
                        surname = {driver.forename.surname}
                        image = {driver.image.url}
                        description = {driver.description}
                    />
                )
            })}
            <button onClick={()=>nexpage}>anterior</button>
            <button onClick={()=>previouspage}>siguiente</button>
        </div>
    )
}

export default showdrivers