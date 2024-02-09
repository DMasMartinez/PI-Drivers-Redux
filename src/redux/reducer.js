import { ALLDRIVERS,FILLHD,FILLSD,SETDRIVERSEARCH,ORDERALFA,DRIVERSEARCH, ORDEROPOSITEALFA, ORDERALFASEARCH, ORDEROPOSITEALFASEARCH, SETDRIVERS,ALLTEAMS, ALLDRIVERSBDD } from "./type-actions";

const initial_state = {
    conductores: [],
    equipos: [],
    conductoresbdd:[],
    conductoresearch:[],
    neworder : []
}

const rootReducer = (state=initial_state,{type,payload}) =>{
    switch (type){
        case ALLDRIVERS:
            return {...state,conductores:payload}
        case SETDRIVERS:
            return {...state,conductores:payload}
        case ALLTEAMS:
            return {...state,equipos:payload}
        case ALLDRIVERSBDD:
            return {...state,conductoresbdd:payload}
        case DRIVERSEARCH:
            return {...state,conductoresearch:[...state.conductoresearch,payload]}
        case SETDRIVERSEARCH:
            return {...state,conductoresearch:payload}
        default:
            return {...state}
    }
}

export default rootReducer;