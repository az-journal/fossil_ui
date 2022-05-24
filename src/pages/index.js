import React from 'react';
import {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Speaker from '../components/Speaker';

const Home = () => {

const[isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

  return (
    <>
    <HeroSection/>
    <Speaker {...homeObjOne}/>
    <InfoSection {...homeObjOne}/>
    <Navbar/>
    </>
  );
}

export default Home