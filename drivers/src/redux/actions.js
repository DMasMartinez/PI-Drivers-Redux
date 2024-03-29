import { ALLDRIVERS,FILLHD,SETDRIVERSEARCH,FILLSD,ORDERALFA,DRIVERSEARCH, ORDEROPOSITEALFA, ORDERALFASEARCH, ORDEROPOSITEALFASEARCH, SETDRIVERS,ALLTEAMS, ALLDRIVERSBDD } from "./type-actions";


export const alldrivers = () =>{

    return async function (dispatch){

        const newarrayindex = Array.from({ length: 60 }, (_, index) => index+1)
        const driverss = newarrayindex.map(async(id)=>{
            const res = await fetch(`http://localhost:5001/drivers/${id}`)
            const data = res.json()
            return data
        })
        const allconductores = await Promise.all(driverss)
        return dispatch({type:ALLDRIVERS,payload:[...allconductores]})

    }
    
}

export const setdrivers = (driver) =>{
    return {
        type:SETDRIVERS,
        payload:driver
    }
}
export const setdriversearch = (driver)=>{
    return {
        type:SETDRIVERSEARCH,
        payload:driver
    }
}
export const allteams = () =>{
    return async function(dispatch){
        fetch('http://localhost:3002/teams/')
            .then(response=>response.json())
            .then(data=>dispatch({type:ALLTEAMS,payload:data}))
    }
}
export const alldriversbdd = () =>{
    return async function(dispatch){
        // fetch('http://localhost:3002/driver/')
        //     .then(response=>response.json())
        //     .then(data=>dispatch({type:ALLDRIVERSBDD,payload:data[0]}))
        const response = await fetch('http://localhost:3002/driver/');
        const data = await response.json();
        const newdata = data.filter((data)=>data.id>50000)

        return dispatch({ type: ALLDRIVERSBDD, payload: newdata });
    }
}
export const driversearch = (name) =>{
    
    return async function(dispatch) {
        fetch(`http://localhost:3002/driver/?name=${name}`)
            .then(res=>res.json())
            .then(data=>dispatch({type: DRIVERSEARCH, payload:data}))
        
    }
}
export const orderopositealfasearch = () =>{
    return {
        type:ORDEROPOSITEALFASEARCH,
    }
}