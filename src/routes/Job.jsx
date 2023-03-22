import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style/Job.scss';

export default function Job() {
    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);
    const [hide3, setHide3] = useState(false);
    const url = 'http://onyu.dothome.co.kr/project01/'

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.8}}>
            <div id='job'>
                <div className='left'>
                    <h2>잡아바</h2>
                    <div id='projectInfo'>
                        <div className='infoBox'>
                            <h3>Get Info</h3>
                            <div className='toggle'>
                                <h4 onClick={() => setHide1(!hide1)}>Subject</h4>
                                <span className={(hide1 ? 'hidden' : '')}>잡아바 메인, 서브페이지</span>
                            </div>
                            <div className='toggle'>
                                <h4 onClick={() => setHide1(!hide1)}>Skills</h4>
                                <span className={(hide1 ? 'hidden' : '')}>HTML, CSS, JavaScript</span>
                            </div>
                            <div className='toggle'>
                                <h4 onClick={() => setHide2(!hide2)}>Description</h4>
                                <span className={(hide2 ? 'hidden' : '')}>React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요. 그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링합니다.</span>
                            </div>
                            <div className='toggle'>
                                <h4 onClick={() => setHide3(!hide3)}>Open</h4>
                                <span className={(hide3 ? 'hidden' : '')}>http://onyu.dothome.co.kr/project1/</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='p_imgBox'>
                        <img onClick={()=>{window.open(url)}} src={`${process.env.PUBLIC_URL}/img/job.png`} alt="잡아바" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};