import { useState,useEffect } from "react";
// import Select, { useStateManager } from 'react-select';
import { debounce } from 'lodash';
import { useDispatch,useSelector } from "react-redux";
import { allteams } from "../redux/actions";
import style from "../Styles/Form.module.css"
const {v4:uuidv4} = require('uuid')

function errorhandler(driver,error,setError){
    const newdate = new Date(driver.birdate)
    if (typeof driver.name!=="string"){
        setError({...error,name:"incorrecto tipo de dato ingresado"})
    }else{
        if (driver.name.length<4 || driver.name.length>10){
            setError({...error,name:"incorrecto numero de characters"})
        }else{
            setError({...error,name:""})
        }
    }
    if (typeof driver.surname!=="string"){
        setError({...error,surname:"incorrecto tipo de dato ingresado"})
    }else{
        if (driver.surname.length<4 || driver.surname.length>10){
            setError({...error,surname:"incorrecto numero de characters"})
        }else{
            setError({...error,surname:""})
        }
    }
    if (!isNaN(newdate.getTime())){
        setError({...error,birdate:"incorrecto formato de fecha"})
    } 

}
// arreglar los espacios cuando traemos los equipos del back, agregar campos que faltan en formulario, agregar el driver creado
// en formulario al array de showdrivers para que aparesca en home y anadir un atributo tipo bdd fijo para que pueda ser filtrado luego 
// el driver que se agregue de formulario como identificador podemos usar un atributo que no se muestre

// traigo del back lo que esta en la base de datos y lo traigo con useefect del componente padre
const Form = (props) => {
    const dispatch = useDispatch()
    const teams = useSelector(state=>state.equipos)
    const [driver,setDriver] = useState({
        id:`${uuidv4()}`,
        name:"",
        surname:"",
        nationality:"",
        number:0,
        birdate:"",
        description:"",
        teams:''
    })
    const [error,setError] = useState({
        name:"",
        surname:"",
        nationality:"",
        number:"",
        birdate:"",
        description:"",
        teams:""
    })
    function handlerchange(event){
        if (event.target.name==="name"){
            setDriver({...driver,name:event.target.value})
            errorhandler(driver,error,setError)
        }else if (event.target.name==="surname"){
            setDriver({...driver,surname:event.target.value})
            errorhandler(driver,error,setError)
        }else if (event.target.name==="nationality"){
            setDriver({...driver,nationality:event.target.value})

        }else if (event.target.name==="number"){
            setDriver({...driver,number:event.target.value})

        }else if (event.target.name==="teams"){
            const newteam = event.target.value
            setDriver({...driver,teams:driver.teams+' '+newteam})
        }else if (event.target.name==="birdate"){
            setDriver({...driver,birdate:event.target.value})
            errorhandler(driver,error,setError)
        }else if (event.target.name==="description"){
            setDriver({...driver,description:event.target.value})
        }
    }

    // const handlerchangeteams = (selectOption) => {
    //     setDriver({...driver,teams:selectOption?[selectOption.value]:[]})
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const newdriver = props.convert(driver)
        try {
            console.log(driver)
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
        dispatch(allteams())
    },[])
    // console.log(props.showdrivers)
    // const teamoptions = props.team.map((idx,team)=>({
    //     label:idx,
    //     value:idx
    // }))
    console.log(driver)
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                {error.name?<input name="name" type="text" value={driver.name} onChange={handlerchange} className={style.realfail}/>:<input name="name" type="text" value={driver.name} onChange={handlerchange} className={style.realsuccess}/>}
                {error.name?<p className={style.fail}>{error.name}</p>:<p className={style.success}>{error.name}</p>}

                <label htmlFor="surname">Surname: </label>
                {error.surname?<input name="surname" type="text" value={driver.surname} onChange={handlerchange} className={style.realfail}/>:<input name="surname" type="text" value={driver.surname} onChange={handlerchange} className={style.realsuccess}/>}
                {error.surname?<p className={style.fail}>{error.surname}</p>:<p className={style.success}>{error.surname}</p>}

                <label htmlFor="nationality">Nationality: </label>
                <input name="nationality" type="text" value={driver.nationality} onChange={handlerchange}/>
                {error.nationality&&<h2>{error.nationality}</h2>}

                <label htmlFor="number">Number: </label>
                <input name="number" type="string" value={driver.number} onChange={handlerchange}/>
                {error.number&&<h2>{error.number}</h2>}

                <label htmlFor="birdate">Birthdate: </label>
                <input name="birdate" type="string" value={driver.birdate} onChange={handlerchange}/>
                {error.birdate&&<h2>{error.birdate}</h2>}

                <label htmlFor="description">Description: </label>
                <input name="description" type="string" value={driver.description} onChange={handlerchange}/>
                {error.description&&<h2>{error.description}</h2>}

                <select name="teams" value={driver.teams} onChange={handlerchange}>
                    {teams.map((team)=>{
                        return(
                            <option value={team}>{team}</option>
                        )
                    })}
                </select>

                <button type="Submit">submit</button>
            </form>

        </div>
    )   
}

export default Form

// onClick={()=>addnewdriver()}