import { useState } from "react"

const Orderalfa = (props) => {
    const [optionselect,setOptionselect] = useState('')
    function handlerchange(event){
        if (event.target.name==="alfabetico"){
            setOptionselect(event.target.value)
        }
    }
    return (
        <div>
            <select name="alfabetico" value={optionselect} onChange={handlerchange}>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
        </div>
    )
}

export default Orderalfa