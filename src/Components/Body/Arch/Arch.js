import React, { Component } from 'react'
import './Arch.css'
// import SlideShow from 'react-image-show';
import ImageGallery from 'react-image-gallery';
import i1 from '../../../img/Arch/random/1.jpg';
import i2 from '../../../img/Arch/random/2.png';
import i3 from '../../../img/Arch/random/3.jpg';
import i4 from '../../../img/Arch/random/4.jpg';
import i5 from '../../../img/Arch/random/5.jpg';
import i6 from '../../../img/Arch/random/6.jpg';
import i7 from '../../../img/Arch/random/7.jpg';
import i8 from '../../../img/Arch/random/8.JPG';
import i9 from '../../../img/Arch/random/9.jpg';
import i10 from '../../../img/Arch/random/10.jpg';
import i11 from '../../../img/Arch/random/11.png';
import i12 from '../../../img/Arch/random/12.png';

class Arch extends Component {

   render() {
      const images = [
         { original: i1, thumbnail: i1 }, { original: i2, thumbnail: i2 }, { original: i3, thumbnail: i3 },
         { original: i4, thumbnail: i4 }, { original: i5, thumbnail: i5 }, { original: i6, thumbnail: i6 },
         { original: i7, thumbnail: i7 }, { original: i8, thumbnail: i8 }, { original: i9, thumbnail: i9 },
         { original: i10, thumbnail: i10 }, { original: i11, thumbnail: i11 }, { original: i12, thumbnail: i12 },
      ]

      return (
         <div id="arch" className="arch">
            <div className="ArchStuff" >Arch Stuff</div>
            <br />
            {/* <div className="archPics"></div> */}
            <ImageGallery items={images} />
            {/* <ImageGallery className="archPics" sizes={"width:50px"} items={images} /> */}
         </div>)
   }
}
export default Arch