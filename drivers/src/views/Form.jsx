import { useState } from "react";
function errorhandler(error,setError,driver,property){
    if (typeof driver.property!=="string"){
        setError({...error,property:"incorrecto tipo de dato ingresado"})
    }
}
const Form = (props) => {
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

                <button type="Submit">submit</button>
            </form>

        </div>
    )   
}

export default Form