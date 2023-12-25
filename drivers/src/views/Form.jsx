import { useState } from "react";
function errorhandler(error,setError,driver,property){
    if (driver.name.typeof()!=="string"){
        setError({error,property:"incorrecto tipo de dato ingresado"})
    }
}
const Form = () => {
    const [driver,setDriver] = useState({
        name:"",
        surname:"",
        nationality:"",
        number:0
    })
    const [error,setError] = useState({
        name:"",
        surname:"",
        nationality:"",
        number:""
    })
    function handlerchange(event){
        if (event.target.name==="name"){
            setDriver({...driver,name:event.target.value})
            errorhandler(error,setError,driver,driver.name)
        }else if (event.target.name==="surname"){
            setDriver({...driver,surname:event.target.value})
            errorhandler(error,setError,driver,driver.surname)
        }else if (event.target.name==="nationality"){
            setDriver({...driver,nationality:event.target.value})
            errorhandler(error,setError,driver,driver.nationality)
        }else if (event.target.name==="number"){
            setDriver({...driver,number:event.target.value})
            errorhandler(error,setError,driver,driver.number)
        }
    }
    

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text"></input>
            {error.name&&<h2>{error.name}</h2>}
            <label htmlFor="surname">Surname: </label>
            <input name="surname" type="text"></input>
            {error.surname&&<h2>{error.surname}</h2>}
            <label htmlFor="nationality">Nationality: </label>
            <input name="nationality" type="text"></input>
            {error.nationality&&<h2>{error.nationality}</h2>}
            <label htmlFor="number">Number: </label>
            <input name="number" type="string"></input>
            {error.number&&<h2>{error.number}</h2>}

        </div>
    )   
}

export default Form