import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import ZBar from './Components/ZBar/ZBar';
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            something: [],
            data: ""
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            console.log("run")
            let activateCRM = axios.get(`https://crm-ofer-gilboa.herokuapp.com`)
            let activatePodMan = axios.get(`https://podman-podcast-manager.herokuapp.com`)
            let activateMySite = axios.get(`https://ofers-site.herokuapp.com`)
        }, 600000);
    }

    render() {
        return (
            // <Router>
            <div className='app'>
                <Contact />
                {/* <Navbar /> */}
                <Header />
                <Body />
                <ZBar />
            </div>
            // </Router>
        )
    }
}

export default App;


