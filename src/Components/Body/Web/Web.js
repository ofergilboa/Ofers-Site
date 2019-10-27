import React, { Component } from 'react'
import Priceless from './Priceless'
import CRM from './CRM'
import MySite from './MySite'

class Web extends Component {
   render() {
      return (
         <div className="web" id="web">
            <div>my sites</div>
            <br />
            <Priceless />
            <CRM />
            <MySite />
         </div>)
   }
}
export default Web