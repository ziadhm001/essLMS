import React from 'react';
import { Link } from 'react-router-dom';

const StartPage =() => {
    return (
        <div className=''>
            <h1>Welcome!!</h1>
            <Link to='/login'>
                <button>Sign In</button>
            </Link>
            <Link to='/registration'>
                <button>Sign Up</button>
            </Link> 
        </div>
    );
};

export { StartPage as default }