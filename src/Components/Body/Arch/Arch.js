import React, { Component } from 'react'
import './Arch.css'
// import SlideShow from 'react-image-show';
import ImageGallery from 'react-image-gallery';
import i1 from '../../../img/Arch/book/b1.jpg';
import i2 from '../../../img/Arch/book/b2.jpg';
import i3 from '../../../img/Arch/book/b3.jpg';
import i4 from '../../../img/Arch/book/b4.jpg';
import i5 from '../../../img/Arch/book/b5.jpg';
import i6 from '../../../img/Arch/book/b6.jpg';
import i7 from '../../../img/Arch/book/b7.jpg';
import i8 from '../../../img/Arch/book/b8.jpg';
import i9 from '../../../img/Arch/book/b9.jpg';
import i10 from '../../../img/Arch/book/b10.jpg';
import i11 from '../../../img/Arch/book/b11.jpg';
import i12 from '../../../img/Arch/book/b12.jpg';
import i13 from '../../../img/Arch/book/b13.jpg';
import i14 from '../../../img/Arch/book/b14.jpg';
import i15 from '../../../img/Arch/book/b15.jpg';
import i16 from '../../../img/Arch/book/b16.jpg';
import i17 from '../../../img/Arch/book/b17.jpg';
import i18 from '../../../img/Arch/book/b18.jpg';
import i19 from '../../../img/Arch/book/b19.jpg';
import i20 from '../../../img/Arch/book/b20.jpg';
import i21 from '../../../img/Arch/book/b21.jpg';
import i22 from '../../../img/Arch/book/b22.jpg';
import i23 from '../../../img/Arch/book/b23.jpg';

class Arch extends Component {

    render() {
        const images = [
            { original: i1, thumbnail: i1 }, { original: i2, thumbnail: i2 }, { original: i3, thumbnail: i3 },
            { original: i4, thumbnail: i4 }, { original: i5, thumbnail: i5 }, { original: i6, thumbnail: i6 },
            { original: i7, thumbnail: i7 }, { original: i8, thumbnail: i8 }, { original: i9, thumbnail: i9 },
            { original: i10, thumbnail: i10 }, { original: i11, thumbnail: i11 }, { original: i12, thumbnail: i12 },
            { original: i13, thumbnail: i13 }, { original: i14, thumbnail: i14 }, { original: i15, thumbnail: i15 },
            { original: i16, thumbnail: i16 }, { original: i17, thumbnail: i17 }, { original: i18, thumbnail: i18 },
            { original: i19, thumbnail: i19 }, { original: i20, thumbnail: i20 }, { original: i21, thumbnail: i21 },
            { original: i22, thumbnail: i22 }, { original: i23, thumbnail: i23 },
        ]

        return (
            <div id="arch" >
                <div className="ArchStuff" >Arch Stuff</div>
                <div className="ArchImages">
                    <ImageGallery items={images} />
                </div>
            </div>)
    }
}
export default Arch