
import Showdrivers from "../components/Showdrivers"
const Home = (props) => {
    return (
        <div>
            <Showdrivers showdrivers={props.showdrivers} setPage = {props.setPage} page = {props.page} showdrivershome={props.showdrivershome}/>
        </div>
    )
}

export default Home