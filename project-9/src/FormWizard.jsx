import { useState } from "react";

function FormWizard(){

    const [ step,setStep ] = useState(0); 

    const [ form,setForm ] = useState({
        name:'',
        email:'',
        age:'',
    });

    const [ error, setError ] = useState({});

    const validate = () =>{
        let e={};
        if(step===1 && !form.name) e.name='Name is required';
        if(step===2 && !/\S+@\S+\.\S+/.test(form.email)) e.email='Valid email required';
        if(step===3 && (!form.age || isNaN(form.age))) e.age='Valid Age required';
        
        setError(e);

        return Object.keys(e).length===0;

    };

    const handleNext = () => {
        if (validate()) setStep(step + 1);
    };

    const handleBack = () => setStep(step - 1);


    return(
        <div>
            Step {step+1} of 3

            {step===0 &&  (
                <div>
                    <input 
                    type="text"
                    placeholder="Enter you name"
                    value={form.name}
                    onChange={(e)=>setForm({...form,name:e.target.value})}
                    />
                    {error.name && <p style={{color:'red'}}>{error.name}</p>}
                </div>
            )}

            {step===1 && (
                <div>
                    <input 
                    placeholder="Enter you email"
                    value={form.email}
                    onChange={(e)=>setForm({...form,email: e.target.value})}
                    />
                    {error.email && <p style={{color:'red'}}>{error.email}</p>}
                </div>
            )}

            {step===2 && (
                <div>
                    <input 
                        placeholder="Enter your age: "
                        value={form.age}
                        onChange={(e)=>setForm({...form,age:e.target.value})}
                    />
                    {error.age && <p style={{color:"red"}}>{error.age}</p>}
                </div>
            )}
            <div style={{ marginTop: 10 }}>
                {step > 0 && <button onClick={handleBack}>Back</button>}
                {step < 2 && <button onClick={handleNext}>Next</button>}
                {step === 2 && <button onClick={() => alert(JSON.stringify(form))}>Submit</button>}
            </div>
        </div>
    );
}

export default FormWizard;