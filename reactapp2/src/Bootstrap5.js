

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Bootstrap5() {
    return (
        <body>

            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link>  |{" "}
                {/* <Link to="/car">Cars</Link>  |{" "} */}
                <Link to="/form">Form</Link>
            </nav>

            {/* Routes */}
            
            

        </body>
    )
}

export default Bootstrap5
