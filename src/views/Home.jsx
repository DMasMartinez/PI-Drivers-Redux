import Showdriversbdd from "../components/Showdriversbdd"

import Showdrivers from "../components/Showdrivers"
const Home = (props) => {
    console.log(props.origen)
    return (
        <div>
            {props.origen==="API"?(<Showdrivers showdrivers={props.showdrivers} setPage = {props.setPage} page = {props.page} showdrivershome={props.showdrivershome} qt={props.qt}/>):(<Showdriversbdd showdriversbdd={props.showdriversbdd} showbddform = {props.showbddform} showsurenameform={props.showsurenameform} surename={props.surename}/>)}
        </div>
    )
}

export default Home