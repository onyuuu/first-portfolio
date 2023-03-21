import React from 'react';
import Tab from './Tab';
import Header from './Header';
import { motion } from 'framer-motion';
import './style/Home.scss'


export default function Home() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.8}}>
            <div className='home_flex'>
                <Header />
                <Tab />
            </div>
        </motion.div>
    );
}