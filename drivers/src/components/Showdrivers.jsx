import { useEffect } from "react"
import Driver from "./Driver"
import Pagination from "./Pagination"
import '../Styles/Showdrivers.css'
// import { useSelector,useDispatch } from "react-redux"
// import { fillhd,fillsd,orderalfa,orderopositealfa,orderalfasearch,orderopositealfasearch } from "../redux/actions"
const Showdrivers = (props) => {
    // const dispatch = useDispatch()
    const initidx = props.qt*(props.page-1)
    const finalidx = props.page*props.qt
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
            <div class="contenedor">
                {props.showdrivers.slice(initidx,finalidx).map((driver)=>{
                    return (
                        <div class="elemento">
                            <Driver
                                name = {driver.name.forename}
                                surname = {driver.name.surname}
                                image = {driver.image.url}
                                description = {driver.description}
                                teams = {driver.teams}
                            />
                        </div>
                    )
                })}
                <Pagination nexpage={nexpage} previouspage={previouspage} showdrivers = {props.showdrivers} qt = {props.qt}/>
            </div>

        

    )
}

export default Showdrivers;
        // <div class="container text-center">
        //     <div class="row">
        //         {props.showdrivers.map((driver)=>{
        //             return (
        //                 <div class="col-md-6 md-6">
        //                     <Driver
        //                         name = {driver.name.forename}
        //                         surname = {driver.name.surname}
        //                         image = {driver.image.url}
        //                         description = {driver.description}
        //                         teams = {driver.teams}
        //                     />
        //                 </div>
        //             )
        //         })}
        //         <Pagination nexpage={nexpage} previouspage={previouspage} showdrivers = {props.showdrivers} qt = {props.qt}/>
        //     </div>
        // </div>