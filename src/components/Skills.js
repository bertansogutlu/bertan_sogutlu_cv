import React from 'react';
import javascript from '../svg/javascript.svg';
import react from '../svg/react.svg';
import redux from '../svg/redux.svg';
import nodejs from '../svg/nodejs.svg';
import vscode from '../svg/vscode.svg';
import figma from '../svg/figma.svg';

export default function Skills() {
    return (
        <div className='Skills'>
            <h2>Skills</h2>
            <div className='skills-container'>
                <div className='card'>
                    <img src={javascript} />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='card'>
                    <img src={nodejs} />
                    <p>NODE</p>
                </div>
                <div className='card'>
                    <img src={react} />
                    <p>REACT</p>
                </div>
                <div className='card'>
                    <img src={vscode} />
                    <p>VS CODE</p>
                </div>
                <div className='card'>
                    <img src={redux} />
                    <p>REDUX</p>
                </div>
                <div className='card'>
                    <img src={figma} />
                    <p>FIGMA</p>
                </div>
            </div>
        </div>
    )
}