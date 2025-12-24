
import { useState } from 'react';
// import { createRoot } from 'react-dom/client'


function Form() {
    const [name, setname] = useState("");

    function handleChange(e) {
        setname(e.target.value);
    }
    return (
        <div>
            <h1>Entry Form</h1>
            <form  >
                {/* <input type="text" value={name} onChange={handleChange} /><br/><br/> */}
                <input type="text" />
                <button>SUBMIT</button>
            </form>
            <br /><br />
            <p>Current Value : {name}</p>
        </div>
    )
}

export default Form