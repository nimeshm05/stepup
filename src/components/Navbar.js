import React, { Component } from 'react'
import '../components/Navbar.css'
import resize from '../images/logo6.jpg'

class Navbar extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            // eslint-disable-next-line no-unused-vars
            var instances = M.Sidenav.init(elems, {});
          });
    }

    render() {
        return (
            <div className="navbar-wrapper">
                <nav className="nav-wrapper white black-text">
                    <div className="container">
                        <a href="/"className="brand-logo">
                            <img src={resize} alt="logs" className="responsive-img"/> 
                        </a>
                        <a href="/" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons icon-black">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/growth">Growth Accelerator</a></li>
                            <li><a href="/services">Services</a></li>
                        </ul>
                    </div>
                    <ul className="sidenav" id="mobile-links">
                        <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/growth">Growth Accelerator</a></li>
                            <li><a href="/services">Services</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navbar