import Drivers from "../components/Drivers";
import { UseSelector, useSelector } from "react-redux";
const Searching = (props) => {
    const conductoresearch = useSelector(state=>state.conductoresearch)
    return (
        <div>
            <Drivers conductoresearch = {conductoresearch}/>
        </div>
    )
}

export default Searching;
