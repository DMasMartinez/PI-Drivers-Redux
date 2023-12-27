import meteoro from '../utils/meteoro_sq.jpg'
import { useNavigate } from 'react-router-dom'
import Home from './Home'
const Landing = () => {
    const navigate = useNavigate()
    function gohome(){
        navigate('/home')
    }
    return (
        <div>
            <button onClick={()=>gohome()}>Home</button>
            <h1>DRIVERS</h1>
            <img src={meteoro}/>
        </div>
    )
    
    
}

export default Landing