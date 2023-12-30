import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

const Detail = () => {
    const {name} = useParams()
    const [driver,setDriver] = useState([])
    const [description,setDescription] = useState([])
    function convertparams(valor){
        const newstring = valor.toString()
        const value = newstring.substring(1)
        return value
    }
    useEffect(()=>{
        const newvalue = convertparams(name)
        fetch('http://localhost:3002/driver/?name=' + newvalue.toString())
            .then(res=>res.json())
            .then((data)=>setDriver(data.name))
    },[name])
    useEffect(()=>{
        const newvalue = convertparams(name)
        fetch('http://localhost:3002/driver/?name=' + newvalue.toString())
            .then(res=>res.json())
            .then((data)=>setDescription(data.description))
    },[name])
    console.log(driver)
    return (
        <div>
            <h2>{driver}</h2>
            <h2>{description}</h2>
        </div>
    )
}

export default Detail

