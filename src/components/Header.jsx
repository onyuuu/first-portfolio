import React from 'react';
import './style/Header.scss';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div id='headerPage'>
            <header>
                <h1>
                    <p>Frontend Developer</p>
                    <p>Onyu</p>
                </h1>
            </header>
            <div id='nav'>
                <ul>
                    <li><Link to='/'>Project</Link></li>
                    <li><Link to='/AboutMe'>About Me</Link></li>
                </ul>
            </div>
        </div>
    );
}