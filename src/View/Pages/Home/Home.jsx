import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Hero from './Hero';
import Features from './Features';
import Roadmap from './Roadmap';
import WhyArcade from './WhyArcade';
import Team from './Team';
import Partners from './Partners';
import StartSoon from './StartSoon';
import Footer from '../../Components/Footer/Footer';
import './Home.scss'

export default function Home() {
  return <div>
    <Navigation/>
    <Hero/>
    <Features/>
    <Roadmap/>
    <WhyArcade/>
    <Team/>
    <Partners/>
    <StartSoon/>
    <Footer/>
  </div>;
}
