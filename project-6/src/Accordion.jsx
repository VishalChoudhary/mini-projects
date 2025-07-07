import { useState } from "react";

function Accordion(){

    const data = [
        {title: 'Section 1' , content: 'Content A'},
        {title: 'Section 2' , content: 'Content B'},
    ];

    const [ openIndex, setOpenIndex ] = useState(null);

    return(
        <div>
            {data.map((item,i)=>
                <div key={i}>
                    <h3 onClick={()=>setOpenIndex(i !== openIndex? i : null)}
                    style={{
                        cursor: 'pointer',
                        background: openIndex === i ? '#e0e0e0' : '#f9f9f9',
                        padding: '10px',
                        border: '1px solid #ccc',
                        width: '100px'
                    }}
                    >
                        {item.title}
                    </h3>
                    {i===openIndex && <p>{item.content}</p>}
                </div>
            )}
        </div>
    );

}

export default Accordion;