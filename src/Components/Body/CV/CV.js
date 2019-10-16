import React, { Component } from 'react'
import OferGilboaCVJ from '../../../files/OferGilboaCVCut.jpeg'
import OferGilboaCV from '../../../files/OferGilboaCV.pdf'


class CV extends Component {
   render() {
      return (
         <div className="cv">
            <img className="cv1" src={OferGilboaCVJ} alt="image"  ></img>
            <br />
            <a className="textDownload" href={OferGilboaCV} download="Ofer Gilboa CV">Download PDF</a>
         </div>)
   }
}
export default CV