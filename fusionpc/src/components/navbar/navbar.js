import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import Home from '/workspaces/fusionpc/fusionpc/src/pages/home/home.js';
import Assemblies from '/workspaces/fusionpc/fusionpc/src/pages/assemblies/assemblies.js';
import Guarantee from '/workspaces/fusionpc/fusionpc/src/pages/guarantee/guarantee.js';
import Components from '/workspaces/fusionpc/fusionpc/src/pages/components/components.js';
import Periphery from '/workspaces/fusionpc/fusionpc/src/pages/periphery/periphery.js';




import logo from '/workspaces/fusionpc/fusionpc/src/components/img/Fusion PC.png';
import login from '/workspaces/fusionpc/fusionpc/src/components/img/login.png';
import basket from '/workspaces/fusionpc/fusionpc/src/components/img/basket.png';

import '/workspaces/fusionpc/fusionpc/src/components/navbar/navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Router>
                <div>
                    <nav class='header'>
                        <ul>
                            <li>
                                <Link to='/' className='logo'><img src={logo}></img></Link>
                            </li>
                            <div class='navbar'>
                            <li>
                                <Link to='/assemblies'>Сборки</Link>
                            </li>
                            <li>
                                <Link to='/guarantee'>Гарантии</Link>
                            </li>
                            <li>
                                <Link to='/periphery'>Периферия</Link>
                            </li>
                            <li>
                                <Link to='/components'>Комплектующие</Link>
                            </li>
                            
                            </div>
                            <div className='loginbasket'>
                                <ul>
                                    <li>
                                        <Link to='#' className='login'><img src={login}></img></Link>
                                    </li>
                                    <li>
                                        <Link to='#' className='basket'><img src={basket}></img></Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/Assemblies" element={<Assemblies/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Guarantee" element={<Guarantee/>}/>
                        <Route path="/Components" element={<Components/>}/>
                        <Route path="/Periphery" element={<Periphery/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}