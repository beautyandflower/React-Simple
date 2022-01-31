import React from 'react';
import Heading3 from '../../Components/Heading/Heading3';
import icon1 from './../../../Assets/images/why1.svg';
import icon2 from './../../../Assets/images/why2.svg';
import icon3 from './../../../Assets/images/why3.svg';
import icon4 from './../../../Assets/images/why4.svg';
function ArcadeBox(props){
    return <div className="why_arcade_box">
        <div className="arcade_box_img">
            <img src={props.image} alt="" />
        </div>
        <div className="arcade_box_content">
            <p className='paragraph_md text_darkblue'>{props.content}</p>
        </div>
    </div>
}

export default function WhyArcade() {
    return <div className='whyarcade'>
        <div className="container">
            <div className="heading-wraper justify-content-start">
                <Heading3 title="Why Arcade?" back="true" backcolor="bg_blue" headclass="blue_heading" />
            </div>
            <div className="why_row">
                <ArcadeBox image={icon1} content="There is no dedicated launchpad for GameFi projects that provides a first class user-experience that gamers understand."/>
                <ArcadeBox image={icon2} content="There is no single unified interface where gamers are able to track their game assets across blockchains."/>
                <ArcadeBox image={icon3} content="There are no GameFi Vault protocols"/>
                <ArcadeBox image={icon4} content="There are no GameFi fractionalization nor yield optimization automation protocols"/>
            </div>
        </div>
    </div>;
}
