import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='tc'>
            <h1 className='f1'>WELCOME! This is the HOME PAGE!</h1>
            <p className='f4'>Visit your RoboFriends or your RoboKittens.</p>
            <div className='f3 bg-light-green dib hover-bg-light-pink'>
                <Link to="/robofriends">
                    <img alt='images' src={`https://robohash.org/robot`}/>
                </Link>
            </div>
            {' '}
            <div className='f3 bg-light-green dib hover-bg-light-pink v-mid'>
                <Link to="/robokittens">
                    <img alt='kittens' src={`https://robohash.org/kitten?set=set4`}/>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
