import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style/Book.scss';

export default function Book() {
    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);
    const [hide3, setHide3] = useState(false);
    const [hide4, setHide4] = useState(false);
    const url = 'http://onyu.dothome.co.kr/';

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.8}}>
            <div id='book'>
                <div className='left'>
                    <h2>Book</h2>
                    <div id='projectInfo'>
                        <div className='infoBox'>
                            <h3>Get Info</h3>
                            <div className='toggle'>
                                <h4 onClick={() => setHide1(!hide1)}>
                                    <div className='toggleImg'>
                                        <img src={`${process.env.PUBLIC_URL}/img/toggle1.png`} alt="toggle" />
                                    </div>
                                    Subject
                                </h4>
                                <span className={(hide1 ? 'hidden' : '')}>컬리 메인, 회원가입 페이지</span>
                            </div>
                            <div className='toggle'>
                                <h4 onClick={() => setHide2(!hide2)}>
                                    <div className='toggleImg'>
                                        <img src={`${process.env.PUBLIC_URL}/img/toggle1.png`} alt="toggle" />
                                    </div>
                                    Skills
                                </h4>
                                <span className={(hide2 ? 'hidden' : '')}>React, JavaScript, SCSS</span>
                            </div>
                            <div className='toggle'>
                                <h4 onClick={() => setHide3(!hide3)}>
                                    <div className='toggleImg'>
                                        <img src={`${process.env.PUBLIC_URL}/img/toggle1.png`} alt="toggle" />
                                    </div>
                                    Description
                                </h4>
                                <span className={(hide3 ? 'hidden' : '')}>React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요. 그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링합니다.</span>
                            </div>
                            <div className='toggle'>
                                <h4 onClick={() => setHide4(!hide4)}>
                                    <div className='toggleImg'>
                                        <img src={`${process.env.PUBLIC_URL}/img/toggle1.png`} alt="toggle" />
                                    </div>
                                    Open
                                </h4>
                                <span className={(hide4 ? 'hidden' : '')}>http://onyu.dothome.co.kr/</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='p_imgBox'>
                        <img onClick={()=>{window.open(url)}} src={`${process.env.PUBLIC_URL}/img/kurlyFull.png`} alt="컬리" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};