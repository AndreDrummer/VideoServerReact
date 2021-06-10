import React from "react";
import logo from '../database/files/logo.png'

const Navbar = props => (
    <nav class="navbar fixed-top  navbar-expand-lg" style={{ backgroundColor: "#008000" }}>
        <img src={logo} width="40" height="40" alt=""></img>
        <h4 class="navbar-brand" href="#" style={{ color: "white", marginLeft: "10px" }}>WhatsVideo</h4>
    </nav>
);

export default Navbar;