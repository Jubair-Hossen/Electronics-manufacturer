import React from 'react';
import spinner from '../images/spinner.gif';

const Spinner = () => {
    return (
        <div>
            <img className='w-12 block mx-auto' src={spinner} alt="" />
        </div>
    );
};

export default Spinner;