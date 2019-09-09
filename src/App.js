import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';


class App extends Component {
   constructor() {
      super()
      this.state = {
         something: [],
         data: ""
      }
   }

   componentDidMount = () => {
   }

   render() {
      return (
         <Router>
            <div className=" App-header ">
               <Header />
               <Navbar className="App"/>
               <Body />
            </div>
         </Router>
      )
   }
}

export default App;


