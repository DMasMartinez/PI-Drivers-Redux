import { Link } from "react-router-dom"
import '../Styles/Driver.css'
const Driver = (props) => {
    const detalle =`/detail/:${props.name}`
    return (
        // <div>
        //     <Link to={`/detail/:${props.name}`}>
        //         <h2>{props.name}</h2>
        //     </Link>
            
        //     <h2>{props.surname}</h2>
        //     <img src={props.image} alt={props.name}/>
        //     <h2>{props.description}</h2>
        // </div>

//         <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Dark card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
        <div class="framedriver">
            <div class="imagen" style={{marginRight: 12 + 'em'}}>
                <img src={props.image} alt={props.name} class="card-img-top"/>
            </div>

            <div class="textocard">
                <h4>{props.name}</h4>
                <h5>{props.surname}</h5>
                <p>{props.teams}</p>
                <a href={detalle}>Detail</a>
            </div>
        </div>
    )
}

export default Driver