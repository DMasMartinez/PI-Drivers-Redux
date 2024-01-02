import { FILLSD,FILLHD,ORDERALFA,ORDEROPOSITEALFA,ORDERALFASEARCH,ORDEROPOSITEALFASEARCH } from "./type-actions"

const initial_state = {
    homedrivers: [],
    searchdrivers:[],
    neworder : []
}

const rootReducer = (state=initial_state,action) =>{
    switch(action.type){
        case FILLHD: // esto tiene que ser llamado ademas del dipatch y el useselector con el useEffect para que sea instantaneo en home y pueda realizar los filtrados
            return {...state,homedrivers:action.payload}
        case FILLSD:
            return {...state,searchdrivers:[state.searchdrivers,action.payload]}
        case ORDERALFA:
            return {...state,neworder:[state.homedrivers.sort()]}
        case ORDEROPOSITEALFA:
            return {...state,neworder:[state.homedrivers.sort((a,b)=>(b,a))]}
        case ORDERALFASEARCH:
            return {...state,neworder:[state.searchdrivers.sort()]}
        case ORDEROPOSITEALFASEARCH:
            return {...state,neworder:[state.searchdrivers.sort((a,b)=>(b,a))]}
    }
}

export default rootReducer;