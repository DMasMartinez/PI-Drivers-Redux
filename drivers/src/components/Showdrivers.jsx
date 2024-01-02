import { useEffect } from "react"
import Driver from "./Driver"
// import { useSelector,useDispatch } from "react-redux"
// import { fillhd,fillsd,orderalfa,orderopositealfa,orderalfasearch,orderopositealfasearch } from "../redux/actions"
const Showdrivers = (props) => {
    // const dispatch = useDispatch()
    function nexpage(){
        if (props.page<=10){
            props.setPage(props.page+1)
        }
    }
    function previouspage(){
        if (props.page>0){
            props.setPage(props.page-1)
        }
    }
    const all_drivers = () => props.showdrivershome()
    useEffect(()=>{
        all_drivers()
        const alldrivers = all_drivers()
        // for (var i=0;i<=alldrivers.length;i++){
        //     dispatch(fillhd(alldrivers[i]))
        // }
    },[props.page])
    console.log(props.showdrivers)

    // const conductores = useSelector(state=>state.homedrivers)
    // console.log(conductores)
    return (
        <div>
            {props.showdrivers.map((driver)=>{
                return (
                    <Driver
                        name = {driver.name.forename}
                        surname = {driver.name.surname}
                        image = {driver.image.url}
                        description = {driver.description}
                    />
                )
            })}
            <button onClick={()=>nexpage()}>anterior</button>
            <button onClick={()=>previouspage()}>siguiente</button>
        </div>
    )
}

export default Showdrivers;
{/* <Driver
                        name = {driver.name.forename}
                        surname = {driver.name.forename}
                        image = {driver.image.url}
                        description = {driver.description}
                    /> */}


                    // {props.showdrivers.map((driver)=>{
                    //     return (
                    //         <Driver
                    //             name = {driver.name.forename}
                    //             surname = {driver.name.surname}
                    //             image = {driver.image.url}
                    //             description = {driver.description}
                    //         />
                    //     )
                    // })}