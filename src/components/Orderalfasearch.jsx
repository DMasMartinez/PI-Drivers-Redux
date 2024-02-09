

import { useState,useEffect } from "react"
import { useReducer } from "react";
import { useDispatch,useSelector } from "react-redux";
import { allteams } from "../redux/actions";
const Orderalfasearch = (props) => {
    const dispatch = useDispatch()
    const teams = useSelector(state=>state.equipos)
    const conductoresearch = useSelector(state=>state.conductoresearch)
    const [optionselect,setOptionselect] = useState('')
    const [origenselect,setOrigenselect] = useState('')
    const [newteam,setNewteam] = useState('')
    const [date,setDate] = useState('')
    const [ignored,forceUpdate] = useReducer(x=>x+1,0);

    function handlerchange(event){
        if (event.target.name==="alfabetico"){
            const newchoice = event.target.value
            setOptionselect(newchoice)
            if (newchoice==='A-Z'){
                props.orderalfa1(conductoresearch)
            }
            else if (newchoice==='Z-A'){
                props.ordernoalfa1(conductoresearch)
            }
            // }else{
            //     return
            // }
        }else if (event.target.name==="teams"){
            const equipo = event.target.value
            setNewteam(equipo)
            props.driversteam1(equipo,conductoresearch)
        }else if (event.target.name==="birdate"){
            const orden = event.target.value
            setDate(orden)
            if (orden==="ascendente"){
                props.fecha_ascendente1(conductoresearch)
            }else if (orden==="descendente"){
                props.fecha_descendente1(conductoresearch)
            }

        }
        forceUpdate()   
    }
    useEffect(()=>{
        dispatch(allteams())
    },[])
    return (
        <div>
            <select name="alfabetico" value={optionselect} onChange={handlerchange}>
                <option value=' '></option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>

            <select name="teams" value={newteam} onChange={handlerchange}>
                {teams.map((team)=>{
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

export default Orderalfasearch;