import React from 'react';
import Heading3 from '../../Components/Heading/Heading3';
import Linkedin from './../../../Assets/images/linkedin.svg';
import Twitter from './../../../Assets/images/twitter.svg';
import Player1 from './../../../Assets/images/player1.jpg';
import Player2 from './../../../Assets/images/player2.jpg';
import Player3 from './../../../Assets/images/player3.jpg';
import Player4 from './../../../Assets/images/player4.jpg';
import Player5 from './../../../Assets/images/player5.jpg';
import Player6 from './../../../Assets/images/player6.jpg';
function TeamBox(props) {
    return <div className={`team_box text-center ${props.class}`}>
        <div className="team_img">
            <img src={props.image} alt="" />
        </div>
        <h4 className='player'>{props.player}</h4>
        <p className='position'>{props.position}</p>
        <div className="social_links">
            <a href="#"><svg width="23" height="21" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2031 0.37207H1.79688C1.33018 0.37207 0.953125 0.736759 0.953125 1.18816V19.9581C0.953125 20.4095 1.33018 20.7742 1.79688 20.7742H21.2031C21.6698 20.7742 22.0469 20.4095 22.0469 19.9581V1.18816C22.0469 0.736759 21.6698 0.37207 21.2031 0.37207ZM7.21006 17.7573H4.08027V8.02033H7.21006V17.7573ZM5.64648 6.68909C5.2877 6.68909 4.93697 6.58618 4.63865 6.39339C4.34032 6.20059 4.10781 5.92656 3.97051 5.60595C3.83321 5.28534 3.79728 4.93256 3.86728 4.5922C3.93727 4.25184 4.11005 3.93921 4.36375 3.69382C4.61745 3.44844 4.94068 3.28133 5.29258 3.21363C5.64447 3.14593 6.00922 3.18068 6.3407 3.31348C6.67217 3.44628 6.95549 3.67117 7.15482 3.95971C7.35415 4.24825 7.46055 4.58748 7.46055 4.9345C7.45791 5.9036 6.6458 6.68909 5.64648 6.68909ZM18.9276 17.7573H15.8005V13.0214C15.8005 11.8916 15.7794 10.4405 14.1736 10.4405C12.5468 10.4405 12.2963 11.6698 12.2963 12.9398V17.7573H9.17178V8.02033H12.1724V9.35157H12.2146C12.6312 8.58649 13.6516 7.77805 15.1756 7.77805C18.3449 7.77805 18.9276 9.79531 18.9276 12.417V17.7573Z" />
            </svg></a>
            <a href="#"><svg className="m-0" width="22" height="18" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.91075 17.367C15.213 17.367 19.7546 10.7134 19.7546 4.95355C19.7546 4.76736 19.7546 4.57851 19.7464 4.39232C20.6306 3.77323 21.3937 3.00675 22 2.1288C21.1741 2.48103 20.2988 2.71318 19.4026 2.8177C20.3466 2.27195 21.0536 1.41327 21.3923 0.40124C20.5054 0.909434 19.5346 1.26618 18.5226 1.45587C17.8423 0.75503 16.9419 0.290748 15.9611 0.134934C14.9803 -0.0208793 13.9737 0.140472 13.0973 0.593995C12.2209 1.04752 11.5236 1.7679 11.1134 2.64356C10.7031 3.51922 10.6029 4.50129 10.8281 5.43764C9.03339 5.3506 7.27762 4.89965 5.67468 4.11403C4.07175 3.32841 2.65744 2.22568 1.5235 0.877351C0.947843 1.83899 0.772164 2.97649 1.03214 4.05887C1.29211 5.14124 1.96825 6.08734 2.92325 6.70505C2.20762 6.68154 1.50772 6.49567 0.88 6.16245V6.22229C0.881234 7.22968 1.24205 8.20576 1.90145 8.98554C2.56086 9.76532 3.4784 10.301 4.499 10.502C4.11161 10.6052 3.71144 10.6566 3.30963 10.6549C3.02635 10.6557 2.74365 10.6304 2.46537 10.5791C2.75383 11.4463 3.3155 12.2045 4.07171 12.7475C4.82793 13.2905 5.74081 13.5912 6.6825 13.6073C5.08276 14.8226 3.10668 15.4817 1.0725 15.4785C0.714066 15.48 0.355882 15.46 0 15.4187C2.06458 16.6918 4.46228 17.3677 6.91075 17.367Z" />
            </svg></a>
        </div>
    </div>
}

export default function Team() {
    return <div className='team'>
        <div className="container">
            <div className="heading-wraper justify-content-start">
                <Heading3 title="Team" back="true" backcolor="bg_lightblue" headclass="pink_heading" />
            </div>
            <div className="team_row">
                <TeamBox image={Player1} player="Player1" position="Marketing Director" class="active" />
                <TeamBox image={Player2} player="Player2" position="Marketing Director" />
                <TeamBox image={Player3} player="Player3" position="Marketing Director" />
                <TeamBox image={Player4} player="Player4" position="Marketing Director" />
                <TeamBox image={Player5} player="Player5" position="Marketing Director" />
                <TeamBox image={Player6} player="Player6" position="Marketing Director" />
            </div>
        </div>
    </div>
}