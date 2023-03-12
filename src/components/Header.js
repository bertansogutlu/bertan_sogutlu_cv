import React from 'react';

export default function Header() {
    return (
        <div className='Header'>
            <h1>bertan</h1>
            <container className='header-container'>
                <div>
                    <h2>I am a Fronted<br/>Developer...</h2>
                    <p>...who likes to craft solid and scalable frontend products with great user experiences.</p>
                    <div className='buttons'>
                        <button>Github</button>
                        <button>Linkedin</button>
                    </div>
                </div>
                <div className='header-img'>
                    <img src='https://picsum.photos/id/1/350/375' alt='cv-img'/>
                </div>
            </container>
        </div>
    )
}