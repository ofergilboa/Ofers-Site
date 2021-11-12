import React, { useState } from 'react'
import './Arch.css'
import axios from 'axios'
// import SlideShow from 'react-image-show';
import ImageGallery from 'react-image-gallery';

let i1 = "https://i.imgur.com/H4yMqwj.jpg";
let i2 = "https://i.imgur.com/Qm0cn4U.jpg";
let i3 = "https://i.imgur.com/mix2ptV.jpg";
let i4 = "https://i.imgur.com/InnPJ0g.jpg";
let i5 = "https://i.imgur.com/iCE5X2K.jpg";
let i6 = "https://i.imgur.com/DkT6L2n.jpg";
let i7 = "https://i.imgur.com/f9CzvVi.jpg";
let i8 = "https://i.imgur.com/LuGqjNy.jpg";
let i9 = "https://i.imgur.com/2ZNzNQ0.jpg";
let i10 = "https://i.imgur.com/8CGr95c.jpg";
let i11 = "https://i.imgur.com/KkldtLz.jpg";
let i12 = "https://i.imgur.com/7A4sxI8.jpg";
let i13 = "https://i.imgur.com/ppg4e2V.jpg";
let i14 = "https://i.imgur.com/e1HHjoX.jpg";
let i15 = "https://i.imgur.com/Cwl1V7d.jpg";
let i16 = "https://i.imgur.com/ppDnsDu.jpg";
let i17 = "https://i.imgur.com/q6kPniW.jpg";
let i18 = "https://i.imgur.com/ERgTDNU.jpg";
let i19 = "https://i.imgur.com/cJKktQW.jpg";
let i20 = "https://i.imgur.com/crV02qs.jpg";
let i21 = "https://i.imgur.com/YdBWOVz.jpg";
let i22 = "https://i.imgur.com/Jr8T634.jpg";
let i23 = "https://i.imgur.com/Gwkd4st.jpg";
let i24 = "https://i.imgur.com/0duusp5.jpg";
let i25 = "https://i.imgur.com/zRXofGn.jpg";
let i26 = "https://i.imgur.com/WDPDLWI.jpg";
let i27 = "https://i.imgur.com/5lHC22z.jpg";
let i28 = "https://i.imgur.com/P6GlR1A.jpg";
let i29 = "https://i.imgur.com/B3qMJme.jpg";
let i30 = "https://i.imgur.com/7EXZeWA.jpg";
let i31 = "https://i.imgur.com/RSDDbnl.jpg";
let i32 = "https://i.imgur.com/rbjiXml.jpg";
let i33 = "https://i.imgur.com/9c7dj0d.jpg";
let i34 = "https://i.imgur.com/y6a2ILx.jpg";
let i35 = "https://i.imgur.com/zRaTAbB.jpg";
let i36 = "https://i.imgur.com/WXSMeuT.jpg";
let i37 = "https://i.imgur.com/EDbstPb.jpg";
let i38 = "https://i.imgur.com/vpRBt1W.jpg";
let i39 = "https://i.imgur.com/4PI9Uh2.jpg";
let i40 = "https://i.imgur.com/GJJRvT1.jpg";
let i41 = "https://i.imgur.com/xXkseJr.jpg";
let i42 = "https://i.imgur.com/bDAjfmD.jpg";
let i43 = "https://i.imgur.com/iw3lnh0.jpg";
let i44 = "https://i.imgur.com/yqHuzW4.jpg";
let i45 = "https://i.imgur.com/gpTdSuq.jpg";
let i46 = "https://i.imgur.com/mkgajgS.jpg";
let i47 = "https://i.imgur.com/IazvTkn.jpg";
let i48 = "https://i.imgur.com/GYuzh8b.jpg";
let i49 = "https://i.imgur.com/42paL1H.jpg";
let i50 = "https://i.imgur.com/Uwc7MGR.jpg";
let i51 = "https://i.imgur.com/FZZcjsh.jpg";


let activateCRM = axios.get(`https://crm-ofer-gilboa.herokuapp.com`)
let activatePodMan = axios.get(`https://podman-podcast-manager.herokuapp.com`)
let activateMySite = axios.get(`https://ofers-site.herokuapp.com`)

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
            { original: i20, thumbnail: i20 },
            { original: i19, thumbnail: i19 },
            { original: i18, thumbnail: i18 },
            { original: i17, thumbnail: i17 },
            { original: i16, thumbnail: i16 },
            { original: i21, thumbnail: i21 },
            { original: i22, thumbnail: i22 },
            { original: i23, thumbnail: i23 },
            { original: i24, thumbnail: i24 },
            { original: i25, thumbnail: i25 },
            { original: i30, thumbnail: i30 },
            { original: i29, thumbnail: i29 },
            { original: i28, thumbnail: i28 },
            { original: i27, thumbnail: i27 },
            { original: i26, thumbnail: i26 },
            { original: i31, thumbnail: i31 },
            { original: i32, thumbnail: i32 },
            { original: i33, thumbnail: i33 },
            { original: i34, thumbnail: i34 },
            { original: i35, thumbnail: i35 },
            { original: i40, thumbnail: i40 },
            { original: i39, thumbnail: i39 },
            { original: i38, thumbnail: i38 },
            { original: i37, thumbnail: i37 },
            { original: i36, thumbnail: i36 },
            { original: i41, thumbnail: i41 },
            { original: i42, thumbnail: i42 },
            { original: i43, thumbnail: i43 },
            { original: i44, thumbnail: i44 },
            { original: i45, thumbnail: i45 },
            { original: i50, thumbnail: i50 },
            { original: i49, thumbnail: i49 },
            { original: i48, thumbnail: i48 },
            { original: i47, thumbnail: i47 },
            { original: i46, thumbnail: i46 },
            { original: i51, thumbnail: i51 },
        ])
    }, 200);

    return (
        <div id="arch" >
            <div className="ArchStuff" >Architecture Portfolio</div>
            <div className="ArchImages">
                <ImageGallery items={images} showBullets={true} />
            </div>
        </div>)
}

