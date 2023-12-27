import { useState } from "react"

const Orderalfa = (props) => {
    const [optionselect,setOptionselect] = useState('')
    function handlerchange(event){
        if (event.target.name==="alfabetico"){
            const newchoice = event.target.value
            setOptionselect(newchoice)
            if (newchoice==='A-Z'){
                return props.orderalfa()
            }else if (newchoice==='Z-A'){
                return props.ordernoalfa()
            }else{
                return
            }
        }   
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