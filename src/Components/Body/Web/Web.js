import React, { Component } from 'react'
import Priceless from './Priceless'
import CRM from './CRM'
import MySite from './MySite'

class Web extends Component {
   render() {
      return (
         <div className="web">
            my sites
            <br />
            <Priceless />
            <CRM />
            <MySite />
         </div>)
   }
}
export default Web