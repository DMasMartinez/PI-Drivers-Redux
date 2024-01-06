import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

const Detail = () => {
    const {name} = useParams()
    const [driver,setDriver] = useState([])
    function convertparams(valor){
        const newstring = valor.toString()
        const value = newstring.substring(1)
        return value
    }
    useEffect(()=>{
        const newvalue = convertparams(name)
        fetch('http://localhost:3002/driver/?name=' + newvalue.toString())
            .then(res=>res.json())
            .then((data)=>setDriver(data))
    },[name])
    
    console.log(driver)
    return (
        <div>
            <h2>Name :{driver.name}</h2>
            <img src={driver.image} alt={driver.name}/>
            <h2>Surname : {driver.surname}</h2>
            <h2>Nationality :{driver.nationality}</h2>
            <h2>Description :{driver.description}</h2>
            <h2>Birthdate :{driver.birdate}</h2>
            <h2>Equipos :{driver.teams}</h2>
        </div>
    )
}

export default Detail
{/* <div>
            <h2>Name :{driver.name}</h2>
            <img src={driver.image} alt={driver.name}/>
            <h2>Surname : {driver.surname}</h2>
            <h2>Nationality :{driver.nationality}</h2>
            <h2>Description :{driver.description}</h2>
            <h2>Birthdate :{driver.birdate}</h2>
            <h2>Equipos :{driver.teams}</h2>
        </div> */}

        // <div class="card">
        //     <img src={driver.image} alt="..."/>
        //     <div class="card-body">
        //         <h3 class="card-title">{driver.name}</h3>
        //         <h4 class="card-title">{driver.surname}</h4>
        //         <h4 class="card-title">{driver.nationality}</h4>
        //         <h4 class="card-title">{driver.birdate}</h4>
        //         <h4 class="card-title">{driver.teams}</h4>
        //         <p class="card-text">{driver.description}</p>
        //     </div>
        // </div>
