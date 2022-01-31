import React from 'react';

export default function Heading3(props) {
  return <div>
      <div className={`headings3 ${props.headclass}`}>
          {
              props.number ?
              <div className="number">
                <h2>{props.number}</h2>
            </div>
            :
            ""
            }
            <div className={`h_text ${props.number ? "h_t_l" : "h_l"}`}>
            <h2 class="stroke">{props.title}</h2>
            <h2 class="no-stroke">{props.title}</h2>
            <h2 class="text-shadow">{props.title}</h2>
            </div>
            <div className={`heading_background ${props.backcolor}`}></div>
        </div>
  </div>
}
