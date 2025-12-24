import Footer from "./components/Footer"
import Navber from "./components/Navber"
import Sidebar from "./components/Sidebar"

function About() {
    return (
        <body>

            <div className="jumbotron text-center" style={{ marginBottom: "0" }}>
                <h1>My First Bootstrap 4 Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <Navber />
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="row">
                    <Sidebar />
                    <div className="col-sm-8">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <br />
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>

                <input type="text" />
            </div>
            <Footer />


        </body>
    )
}

export default About