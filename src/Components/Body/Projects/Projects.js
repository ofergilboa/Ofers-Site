import React, { Component } from 'react'
import PriceLess from './PriceLess'
import CRM from './CRM';
import Recorder from './Rcorder';
import PodMan from './PodMan';
import MySite from './MySite';


export default function Projects() {


    return (
        <div >
            <div id="web">Projects</div>
            <CRM />
            <Recorder />
            <PriceLess />
            <PodMan />
            <MySite />
        </div>
    );
}
