import { Link } from "react-router-dom"
const Driver = (props) => {
    return (
        <div>
            <Link to={`/detail/:${props.name}`}>
                <h2>{props.name}</h2>
            </Link>
            
            <h2>{props.surname}</h2>
            <img src={props.image} alt={props.name}/>
            <h2>{props.description}</h2>
        </div>
    )
}

export default Driver