import { useState } from "react"
import { useReducer } from "react";
const Orderalfa = (props) => {
    const [optionselect,setOptionselect] = useState('')
    const [ignored,forceUpdate] = useReducer(x=>x+1,0);
    function handlerchange(event){
        if (event.target.name==="alfabetico"){
            const newchoice = event.target.value
            setOptionselect(newchoice)
            if (newchoice==='A-Z'){
                props.orderalfa(props.showdrivers)
            }
            else if (newchoice==='Z-A'){
                props.ordernoalfa(props.showdriver)
            }
            // }else{
            //     return
            // }
        }
        forceUpdate()   
    }
    return (
        <div>
            <select name="alfabetico" value={optionselect} onChange={handlerchange}>
                <option value=' '></option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
        </div>
    )
}

export default Orderalfa