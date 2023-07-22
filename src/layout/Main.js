import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './main.css';

import Dropdown from 'react-bootstrap/Dropdown';
import { MyContext } from '../MyContext';
const Main = () => {
    let {type,setType}=useContext(MyContext)
    return (
        <div id='body'>
           
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <h4>TSC-Cafeteria</h4>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="./Home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="Cart">Cart</Link>
                                    </li>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="" id="dropdown-basic">
                                            Categories
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Link to='./breakfastfoods'><button  onClick={()=>setType("breakfast")} >Breakfast</button></Link>
                                            <Link to='./breakfastfoods'><button  onClick={()=>setType("launch")} >Launch</button></Link>
                                            <Link to='./breakfastfoods'><button  onClick={()=>setType("dinner")} >Dinner</button></Link>
                                            <Link to='./breakfastfoods'><button  onClick={()=>setType("snacks")} >Snacks</button></Link>
                                            <Link to='./Allfoods'><button   >All Foods</button></Link>
                                            
                                        </Dropdown.Menu>
                                    </Dropdown>


                                    <div id='login-register' className='d-flex'>
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="./Login">Log In</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="./Register">Register</Link>
                                        </li>
                                    </div>


                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            

            <Outlet>

            </Outlet>
            <footer className='d-flex justify-content-center align-items-center' id='footer'>
                <p>Contact Us</p>
            </footer>
        </div>
    )
}

export default Main
