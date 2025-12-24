import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Blog() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getusers();
    })

    const getusers = () => {
        axios.get('http://localhost/PWAD-68/api/blog/').then(function (response) {
            // console.log(response.data);
            setUsers(response.data);
        })
    }
    return (
        <>
            <header
                className="masthead"
                style={{ backgroundImage: 'url("Assets/assets/img/post-bg.jpg")' }}
            >
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>Blogs</h1>
                                <span className="subheading">This is my blog part.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Main Content*/}
            {/* {console.log(users)} */}
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {users.map((user) => (
                            <tr clasName="table-active"  >
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <footer className="border-top">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <Link to="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x" />
                                            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x" />
                                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x" />
                                            <i className="fab fa-github fa-stack-1x fa-inverse" />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="small text-center text-muted fst-italic">
                                Copyright © Your Website 2023
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Blog