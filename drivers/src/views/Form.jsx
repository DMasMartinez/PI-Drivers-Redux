import { useState,useEffect } from "react";
import Select, { useStateManager } from 'react-select';
import { debounce } from 'lodash';

function errorhandler(error,setError,driver,property){
    if (typeof driver.property!=="string"){
        setError({...error,property:"incorrecto tipo de dato ingresado"})
    }
}
// arreglar los espacios cuando traemos los equipos del back, agregar campos que faltan en formulario, agregar el driver creado
// en formulario al array de showdrivers para que aparesca en home y anadir un atributo tipo bdd fijo para que pueda ser filtrado luego 
const Form = (props) => {
    const [newdriver,setNewdriver]= useState('')
    const [driver,setDriver] = useState({
        name:"",
        surname:"",
        nationality:"",
        number:0,
        teams:''
    })
    const [error,setError] = useState({
        name:"",
        surname:"",
        nationality:"",
        number:"",
        teams:""
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
        }else if (event.target.name==="teams"){
            const newteam = event.target.value
            setDriver({...driver,teams:driver.teams+' '+newteam})
        }
    }

    // const handlerchangeteams = (selectOption) => {
    //     setDriver({...driver,teams:selectOption?[selectOption.value]:[]})
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newdriver = props.convert(driver)
        try {
          const response = await fetch('http://localhost:3002/driver/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(driver),
          });
    
          if (response.ok) {
            const nuevoRegistro = await response.json();
            console.log('Registro creado con éxito:', nuevoRegistro);
          } else {
            console.error('Error al crear el registro:', response.statusText);
          }
        } catch (error) {
          console.error('Error al enviar la solicitud:', error);
        }
    };
    useEffect(()=>{
        props.showteamsform()
    },[])
    console.log(driver.teams)
    const teamoptions = props.team.map((idx,team)=>({
        label:idx,
        value:idx
    }))
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                <input name="name" type="text" value={driver.name} onChange={handlerchange}/>
                {error.name&&<h2>{error.name}</h2>}

                <label htmlFor="surname">Surname: </label>
                <input name="surname" type="text" value={driver.surname} onChange={handlerchange}/>
                {error.surname&&<h2>{error.surname}</h2>}

                <label htmlFor="nationality">Nationality: </label>
                <input name="nationality" type="text" value={driver.nationality} onChange={handlerchange}/>
                {error.nationality&&<h2>{error.nationality}</h2>}

                <label htmlFor="number">Number: </label>
                <input name="number" type="string" value={driver.number} onChange={handlerchange}/>
                {error.number&&<h2>{error.number}</h2>}

                <select name="teams" value={driver.teams} onChange={handlerchange}>
                    {props.team.map((team)=>{
                        return(
                            <option value={team}>{team}</option>
                        )
                    })}
                </select>

                {/* <Select
                    name="teamss"
                    value={teamoptions.filter(option=>driver.teams.includes(option.value))}
                    onChange={handlerchangeteams}
                    options={teamoptions}
                    isClearable
                    isSearchable
                    placeholder='selecciona una opcion..'
                /> */}

                {/* <select name="teams" value={driver.teams} onChange={handlerchangeteams}>
                    <option value='daniel'>daniel</option>
                    <option value='jorge'>jorge</option>
                </select> */}

                {/* {props.team.map((team)=>{
                    return (
                        <div>
                            <h2>{team}</h2>
                        </div>
                    )
                })} */}

                <button type="Submit">submit</button>
            </form>

        </div>
    )   
}

export default Form