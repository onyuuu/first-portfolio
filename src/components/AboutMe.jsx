import React from 'react';
import { motion } from 'framer-motion';
import './style/AboutMe.scss';


export default function Aboutme() {
    const gitUrl = 'https://github.com/onyuuu';
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.8}}>
            <div id='aboutMe'>
                <div className="am_left">
                    <h2>About Me</h2>
                    <div className='selfie'>
                        <img src={`${process.env.PUBLIC_URL}/img/ch.png`} alt="임시사진" />
                    </div>
                    <div className='leftInfo'>
                        <ul>
                            <li>010-2240-9954</li>
                            <li>6000951@naver.com</li>
                            <li onClick={()=>{window.open(gitUrl)}}>github.com/onyuuu</li>
                        </ul>
                    </div>
                </div>
                <div className="am_right">
                    <div className="certificate">
                        <h3>Certification</h3>
                        <ul>
                            <li>전자출판기능사 &nbsp;&nbsp;<span>2022</span></li>
                            <li>컴퓨터활용능력 2급 &nbsp;&nbsp;<span>2021</span></li>
                            <li>전산세무 2급 &nbsp;&nbsp;<span>2020</span></li>
                            <li>TAT 2급 &nbsp;&nbsp;<span>2019</span></li>
                            <li>전산회계 2급 &nbsp;&nbsp;<span>2019</span></li>
                        </ul>
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        <ul>
                            <li><span>2022.10 - 2023.03</span>&nbsp;&nbsp;더휴먼컴퓨터아트아카데미 프론트엔드 과정 수료</li>
                            <li><span>2020.08</span>&nbsp;&nbsp;수원대학교 회계학과 졸업</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h3>Skills</h3>
                        <div className='ulBox'>
                            <ul>
                                <li>HTML</li>
                                <li>CSS / SCSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                
                            </ul>
                            <ul>
                                <li>Postman</li>
                                <li>Node.js</li>
                                <li>PHP</li>
                                <li>Git</li>
                            </ul>
                            <ul>
                                <li>Figma</li>
                                <li>Zeplin</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Indesign</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    );
}