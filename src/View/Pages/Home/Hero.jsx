import React from 'react';
import Time from '../../Components/Time/Time';
import Heading from '../../Components/Heading/Heading';
import Heading2 from '../../Components/Heading/Heading2';
export default function Hero() {
    return <section className='hero'>
        <div className="container">
            {/* <h2 className='heading_lg text_white mt-4 heading_blue_border'>Insert Coin</h2> */}
            <Heading title="Insert Coin" back="true" />
            <Heading2 title=" for Endless" back="" />
            <Heading2 title="Opportunities" />
            <h2 className='heading_lg text_white mt-4 heading_pink_border'></h2>
            <p className='mt-3 paragraph'>Invest in the Metaverse Starting at $10 </p>
            <div className="time_container">
                <Time Date="7" Month="2" dots="true" />
            </div>
            <button className='start_soon_btn'>Start Soon</button>
        </div>
    </section>;
}
