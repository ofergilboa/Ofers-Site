import React, { useState } from 'react'
import './Arch.css'
import axios from 'axios'
// import SlideShow from 'react-image-show';
import ImageGallery from 'react-image-gallery';
// import i1 from '../../../img/Arch/book/b1.jpg';
// import i2 from '../../../img/Arch/book/b2.jpg';
// import i3 from '../../../img/Arch/book/b3.jpg';
// import i4 from '../../../img/Arch/book/b4.jpg';
// import i5 from '../../../img/Arch/book/b5.jpg';
// import i6 from '../../../img/Arch/book/b6.jpg';
// import i7 from '../../../img/Arch/book/b7.jpg';
// import i8 from '../../../img/Arch/book/b8.jpg';
// import i9 from '../../../img/Arch/book/b9.jpg';
// import i10 from '../../../img/Arch/book/b10.jpg';
// import i11 from '../../../img/Arch/book/b11.jpg';
// import i12 from '../../../img/Arch/book/b12.jpg';
// import i13 from '../../../img/Arch/book/b13.jpg';
// import i14 from '../../../img/Arch/book/b14.jpg';
// import i15 from '../../../img/Arch/book/b15.jpg';
// import i16 from '../../../img/Arch/book/b16.jpg';
// import i17 from '../../../img/Arch/book/b17.jpg';
// import i18 from '../../../img/Arch/book/b18.jpg';
// import i19 from '../../../img/Arch/book/b19.jpg';
// import i20 from '../../../img/Arch/book/b20.jpg';
// import i21 from '../../../img/Arch/book/b21.jpg';
// import i22 from '../../../img/Arch/book/b22.jpg';
// import i23 from '../../../img/Arch/book/b23.jpg';
// import i24 from '../../../img/Arch/book/b24.jpg';
// import i25 from '../../../img/Arch/book/b25.jpg';
// import i26 from '../../../img/Arch/book/b26.jpg';
// import i27 from '../../../img/Arch/book/b27.jpg';
// import i28 from '../../../img/Arch/book/b28.jpg';
// import i29 from '../../../img/Arch/book/b29.jpg';
// import i30 from '../../../img/Arch/book/b30.jpg';
// import i31 from '../../../img/Arch/book/b31.jpg';
// import i32 from '../../../img/Arch/book/b32.jpg';
// import i33 from '../../../img/Arch/book/b33.jpg';
// import i34 from '../../../img/Arch/book/b34.jpg';
// import i35 from '../../../img/Arch/book/b35.jpg';
// import i36 from '../../../img/Arch/book/b36.jpg';
// import i37 from '../../../img/Arch/book/b37.jpg';
// import i38 from '../../../img/Arch/book/b38.jpg';
// import i39 from '../../../img/Arch/book/b39.jpg';
// import i40 from '../../../img/Arch/book/b40.jpg';
// import i41 from '../../../img/Arch/book/b41.jpg';
// import i42 from '../../../img/Arch/book/b42.jpg';
// import i43 from '../../../img/Arch/book/b43.jpg';
// import i44 from '../../../img/Arch/book/b44.jpg';
// import i45 from '../../../img/Arch/book/b45.jpg';
// import i46 from '../../../img/Arch/book/b46.jpg';
// import i47 from '../../../img/Arch/book/b47.jpg';
// import i48 from '../../../img/Arch/book/b48.jpg';
// import i49 from '../../../img/Arch/book/b49.jpg';
// import i50 from '../../../img/Arch/book/b50.jpg';
// import i51 from '../../../img/Arch/book/b51.jpg';

let activateCRM = axios.get(`https://crm-ofer-gilboa.herokuapp.com`)
let activatePodMan = axios.get(`https://podman-podcast-manager.herokuapp.com`)

export default function Arch() {

    const [images, setImages] = useState([])
    setTimeout(() => {
        setImages([
            { original: i1, thumbnail: i1 },
            { original: i2, thumbnail: i2 },
            { original: i3, thumbnail: i3 },
            { original: i4, thumbnail: i4 },
            { original: i5, thumbnail: i5 },
            { original: i6, thumbnail: i6 },
            { original: i7, thumbnail: i7 },
            { original: i8, thumbnail: i8 },
            { original: i9, thumbnail: i9 },
            { original: i10, thumbnail: i10 },
            { original: i11, thumbnail: i11 },
            { original: i12, thumbnail: i12 },
            { original: i13, thumbnail: i13 },
            { original: i14, thumbnail: i14 },
            { original: i15, thumbnail: i15 },
            { original: i16, thumbnail: i16 },
            { original: i17, thumbnail: i17 },
            { original: i18, thumbnail: i18 },
            { original: i19, thumbnail: i19 },
            { original: i20, thumbnail: i20 },
            { original: i21, thumbnail: i21 },
            { original: i22, thumbnail: i22 },
            { original: i23, thumbnail: i23 },
            { original: i24, thumbnail: i24 },
            { original: i25, thumbnail: i25 },
            { original: i26, thumbnail: i26 },
            { original: i27, thumbnail: i27 },
            { original: i28, thumbnail: i28 },
            { original: i29, thumbnail: i29 },
            { original: i30, thumbnail: i30 },
            { original: i31, thumbnail: i31 },
            { original: i32, thumbnail: i32 },
            { original: i33, thumbnail: i33 },
            { original: i34, thumbnail: i34 },
            { original: i35, thumbnail: i35 },
            { original: i36, thumbnail: i36 },
            { original: i37, thumbnail: i37 },
            { original: i38, thumbnail: i38 },
            { original: i39, thumbnail: i39 },
            { original: i40, thumbnail: i40 },
            { original: i41, thumbnail: i41 },
            { original: i42, thumbnail: i42 },
            { original: i43, thumbnail: i43 },
            { original: i44, thumbnail: i44 },
            { original: i45, thumbnail: i45 },
            { original: i46, thumbnail: i46 },
            { original: i47, thumbnail: i47 },
            { original: i48, thumbnail: i48 },
            { original: i49, thumbnail: i49 },
            { original: i50, thumbnail: i50 },
            { original: i51, thumbnail: i51 },
        ])
    }, 15000);

    return (
        <div id="arch" >
            <div className="ArchStuff" >Architecture Portfolio</div>
            <div className="ArchImages">
                <ImageGallery items={images} />
            </div>
        </div>)
}

