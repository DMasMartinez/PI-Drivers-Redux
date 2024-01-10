

import { useState,useEffect } from "react"
import { useReducer } from "react";
const Orderalfasearch = (props) => {
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
                props.orderalfa1(props.driverlist)
            }
            else if (newchoice==='Z-A'){
                props.ordernoalfa1(props.driverlist)
            }
            // }else{
            //     return
            // }
        }else if (event.target.name==="teams"){
            const equipo = event.target.value
            setNewteam(equipo)
            props.driversteam1(equipo,props.driverlist)
        }else if (event.target.name==="birdate"){
            const orden = event.target.value
            setDate(orden)
            if (orden==="ascendente"){
                props.fecha_ascendente1(props.driverlist)
            }else if (orden==="descendente"){
                props.fecha_descendente1(props.driverlist)
            }

        }
        forceUpdate()   
    }
    useEffect(()=>{
        props.showteamsform()
    },[])
    return (
        <div>
            <select name="alfabetico" value={optionselect} onChange={handlerchange}>
                <option value=' '></option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>

            <select name="teams" value={newteam} onChange={handlerchange}>
                {props.team.map((team)=>{
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