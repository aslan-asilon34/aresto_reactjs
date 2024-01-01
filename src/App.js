import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import './frontend/lib/animate/animate.min.css';
import './frontend/lib/owlcarousel/assets/owl.carousel.min.css';
import './frontend/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import './frontend/css/bootstrap.min.css';
import './frontend/css/style.css';
import WelcomePage from "./pages/WelcomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import "./App.css";
 
class App extends Component {

    
    render() {
        return (
            <Router>

                <div className="container-xxl bg-white p-0">

                {/* <!-- Navbar & Hero Start --> */}
                <div className="container-xxl position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                        <a href="" className="navbar-brand p-0">
                            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Aresto</h1>
                            {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0 pe-4">
                                <a  ><Link to="/" className="nav-item nav-link active">Welcome</Link></a>
                                <a  ><Link to="/about" className="nav-item nav-link active">About</Link></a>
                                <a href="menu.html" className="nav-item nav-link">Menu</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <a href="booking.html" className="dropdown-item">Booking</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <a href="" className="btn btn-primary py-2 px-4">Book A Table</a>
                        </div>
                    </nav>


                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<WelcomePage />}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                    </Routes>


                </div>
                {/* <!-- Navbar & Hero End --> */}




                </div>
            </Router>
        );
    }
}
 
export default App;