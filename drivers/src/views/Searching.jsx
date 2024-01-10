import Drivers from "../components/Drivers";

const Searching = (props) => {
    console.log(props.driverlist)
    return (
        <div>
            <Drivers driverlist = {props.driverlist}/>
        </div>
    )
}

export default Searching;
