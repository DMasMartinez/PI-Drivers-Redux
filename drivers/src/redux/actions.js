import { FILLHD,FILLSD,ORDERALFA, ORDEROPOSITEALFA, ORDERALFASEARCH, ORDEROPOSITEALFASEARCH } from "./type-actions";


export const fillhd = (drivers) =>{
    return {
        type:FILLHD,
        payload:drivers
    }
}
export const fillsd = (driver) =>{
    return {
        type:FILLSD,
        payload:driver
    }
}
export const orderalfa = () =>{
    return {
        type:ORDERALFA,

    }
}
export const orderopositealfa = () =>{
    return {
        type:ORDEROPOSITEALFA,
    }
}
export const orderalfasearch = () =>{
    return {
        type:ORDERALFASEARCH,

    }
}
export const orderopositealfasearch = () =>{
    return {
        type:ORDEROPOSITEALFASEARCH,
    }
}