import { useState,useEffect } from "react";

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
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-lg">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <button aria-hidden="true" onClick={()=>props.previouspage()}>&laquo;</button>
                        </a>
                    </li>
                    {newarray.map((page)=>{
                        return (
                            <div>
                                <li class="page-item">
                                    <a class="page-link" href="#">{page}</a>
                                </li>
                            </div>
                        )
                    })}
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <button aria-hidden="true" onClick={()=>props.nexpage()}>&raquo;</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination



        


        // <button onClick={()=>props.nexpage()}>anterior</button>
        //     <button onClick={()=>props.previouspage()}>siguiente</button>