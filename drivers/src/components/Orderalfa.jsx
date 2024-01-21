import { useState,useEffect } from "react"
import { useReducer } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { allteams } from "../redux/actions";
const Orderalfa = (props) => {
    const [optionselect,setOptionselect] = useState('')
    const [origenselect,setOrigenselect] = useState('')
    const [newteam,setNewteam] = useState('')
    const [date,setDate] = useState('')
    const [ignored,forceUpdate] = useReducer(x=>x+1,0);
    const conductores = useSelector(state=>state.conductores)
    const equipos = useSelector(state=>state.equipos)
    const dispatch = useDispatch()
    function handlerchange(event){
        if (event.target.name==="alfabetico"){
            const newchoice = event.target.value
            setOptionselect(newchoice)
            if (newchoice==='A-Z'){
                props.orderalfa(conductores)
            }
            else if (newchoice==='Z-A'){
                props.ordernoalfa(conductores)
            }
            // }else{
            //     return
            // }
        }else if (event.target.name==="origen"){
            const newchoice = event.target.value
            setOrigenselect(newchoice)
            if (newchoice==="BDD"){
                props.setOrigen("BDD")
            }else if (newchoice==="API"){
                props.setOrigen("API")
            }else{
                return 
            }
        }else if (event.target.name==="teams"){
            const equipo = event.target.value
            setNewteam(equipo)
            props.driversteam(equipo,conductores)
        }else if (event.target.name==="birdate"){
            const orden = event.target.value
            setDate(orden)
            if (orden==="ascendente"){
                props.fecha_ascendente(conductores)
            }else if (orden==="descendente"){
                props.fecha_descendente(conductores)
            }

        }
        forceUpdate()   
    }
    useEffect(()=>{
        // props.showteamsform()
        dispatch(allteams())
    },[])
    return (
        <div>
            <select name="alfabetico" value={optionselect} onChange={handlerchange}>
                <option value=' '></option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
            <select name="origen" value={origenselect} onChange={handlerchange}>
                <option value="API">API</option>
                <option value="BDD">BDD</option>
            </select>
            <select name="teams" value={newteam} onChange={handlerchange}>
                <option value=" "> </option>
                {equipos.map((team)=>{
                    return (
                        <option value={team}>{team}</option>
                    )
                })}
            </select>
            <select name="birdate" value={date} onChange={handlerchange}>
                <option value=''> </option>
                <option value="ascendente">ascendente</option>
                <option value="descendente">descendente</option>
            </select>
        </div>
    )
}

export default Orderalfa