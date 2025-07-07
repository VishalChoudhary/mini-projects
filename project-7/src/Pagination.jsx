import { useState } from "react";

function Pagination(){

    // Step 1: Create dummy data and render all items
    const data = Array.from({length:42},(_,i)=>`Item ${i+1}`);

    // Step 2: Create state to track current page
    const [ page, setPage ] = useState(1);

    // Step 3: Set how many items to show per page
    const itemPerPage = 5;

    // Step 4: Calculate total pages
    const totalPage = Math.ceil(data.length/itemPerPage);

    // Ste 5: Slicing data based on current page
    const startIndex = (page-1) * itemPerPage;
    const endIndex = page * itemPerPage;
    const currentItems = data.slice(startIndex,endIndex);

    return(
        <div>
            {currentItems.map((item,i)=>
                <div key={i}>
                    {item}
                </div>
            )}
            <div style={{marginTop:"20px"}}>
                <button disabled={page===1} onClick={()=>setPage(p=>p-1)}>Prev</button>
                <button disabled={page===totalPage} onClick={()=>setPage(p=>p+1)}>Next</button>
            </div>
            <div>
                {Array.from({length:totalPage}, (_,i)=>(
                    <button key={i} onClick={()=>setPage(i+1)}>{i+1}</button>
                ))}
            </div>
        </div>
    );
}

export default Pagination;