import { useState,useEffect } from "react";
import '../Styles/Pagination.css'

const Pagination = (props) => {
    const total_pages = 60/props.qt
    const total = Math.ceil(total_pages)
    const [newarray,setNewarray] = useState([])
    function range(end) {
        return Array.from({ length: end + 1 }, (_, index) => index);
    }
    useEffect(()=>{
        setNewarray(range(total))
    },[])
    console.log(newarray)
    return (
            <div class="framepagination">
                    <span class="extremoizq">
                        <a class="page-link" href="#" aria-label="Previous">
                            <button aria-hidden="true" onClick={()=>props.previouspage()}>&laquo;</button>
                        </a>
                    </span>
                    {newarray.map((page)=>{
                        return (
                            <div class="intermedios">
                                <span>
                                    <a class="page-link" href="#">{page}</a>
                                </span>
                            </div>
                        )
                    })}
                    <span class="extremoder">
                        <a class="page-link" href="#" aria-label="Next">
                            <button aria-hidden="true" onClick={()=>props.nexpage()}>&raquo;</button>
                        </a>
                    </span>
            </div>
    )
}

export default Pagination



        


        // <button onClick={()=>props.nexpage()}>anterior</button>
        //     <button onClick={()=>props.previouspage()}>siguiente</button>