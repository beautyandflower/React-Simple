import React from 'react';
import Heading3 from '../../Components/Heading/Heading3';
import Partner1 from '../../../Assets/images/partner1.svg';
import Partner2 from '../../../Assets/images/partner2.svg';
import Partner3 from '../../../Assets/images/partner3.svg';
import Partner4 from '../../../Assets/images/partner4.svg';
import Partner5 from '../../../Assets/images/partner5.svg';
import Partner6 from '../../../Assets/images/partner6.svg';

function PartnerBox(props) {
    return <div className='partersbox'>
        <img src={props.images} alt="" />
    </div>
}

export default function Partners() {
  return <div className='partners'>
        <div className="container">
        <div className="heading-wraper justify-content-start">
                <Heading3 title="Partners" back="true" backcolor="bg_yellow" headclass="blue_heading" />
            </div>
            <div className="partner_row">
                <PartnerBox images={Partner1}/>
                <PartnerBox images={Partner2}/>
                <PartnerBox images={Partner3}/>
                <PartnerBox images={Partner4}/>
                <PartnerBox images={Partner5}/>
                <PartnerBox images={Partner6}/>
            </div>
        </div>
  </div>;
}
