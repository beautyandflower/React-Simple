import React from 'react';
import './Heading.scss';
export default function Heading2(props) {
  return <div>
      <div className="headings2">
            <h1 class="stroke">{props.title}</h1>
            <h1 class="no-stroke">{props.title}</h1>
            <h1 class="text-shadow">{props.title}</h1>
            {
                props.back == "true" ?
                <div className="heading_background"></div>
                :
                ""
            }
        </div>
  </div>;
}
