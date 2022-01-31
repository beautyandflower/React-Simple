import React from 'react';
import Time from '../../Components/Time/Time';
import Heading from '../../Components/Heading/Heading';
import Heading2 from '../../Components/Heading/Heading2';

export default function StartSoon() {
    return <section className='startsoon'>
        <div className="container">
            <Heading2 title="Excited? Want in? Participate" back="" />
            <Heading2 title="in our IDO. Get airdrops," back="" />
            <Heading2 title="whitelist and more!" back="" />
            <div className="time_container">
                <Time Date="1" Month="2" />
            </div>
            <div className="start_soon_main">
                <button className='start_soon_btn'>Start Soon</button>
            </div>
        </div>
    </section>;
}
