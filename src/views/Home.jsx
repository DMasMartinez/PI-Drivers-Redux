
import showdrivers from "../components/Showdrivers"
const Home = (props) => {
    return (
        <div>
            <Showdrivers showdrivers={props.showdrivers} setPage = {props.setPage} page = {props.page}/>
        </div>
    )
}

export default Home