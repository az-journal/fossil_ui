import React from 'react';
import {useState} from 'react';
import Agenda from '../components/Agenda';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Speaker from '../components/Speaker';
import Footer from '../components/Footer';

const Home = () => {

const[isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

  return (
    <>
    
    
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <Agenda/>
    <Speaker/>
    <Navbar/>
    </>
  );
}

export default Home