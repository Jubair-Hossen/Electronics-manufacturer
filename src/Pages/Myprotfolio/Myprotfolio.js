import { faBook, faEnvelopeCircleCheck, faLink, faLocationDot, faPhone, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Myprotfolio = () => {
    return (
        <section className='px-2 mt-12'>
            <div className="avatar w-24 mx-auto block text-center">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src='https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-1/278541309_1507014883028389_2807711950386679685_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGe8mrQP78R6fMnnApnTYTyM1BmZks5I48zUGZmSzkjj2aFD-JBHrXQkI3rafdhrqfvZfOCOTmMUMevlkyrBjjX&_nc_ohc=JlTAZuJiXBUAX_ncjeJ&_nc_oc=AQnpvbMn1_0bWOyz461oWubkLMm5dCTgwSNBT6tJwNvzC514yV4onZpFFTiss-LzaWM&_nc_ht=scontent.fdac34-1.fna&oh=00_AT--oBPysctiE0VKVP6F-fW03-TqUxaBbeerzmxhgGWTgA&oe=629535B5' alt='' />
                </div>
            </div>
            <div style={{ marginTop: "-48px" }} className='max-w-2xl mx-auto border-2 shadow p-5 rounded'>
                <h1 className="text-2xl font-bold text-center mt-9 mb-3">Jubair Hossen</h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faEnvelopeCircleCheck} />jubairhossen55@gmail.com </h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faBook} />Study in Department Of physics (2nd year), Netrokona govt. college </h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faLocationDot} />Live in Netrokona, Mymenshingh </h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faPhone} /> 01775580950</h1>
                <h1 className='mb-5 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faCode} />Expert In: HTML, CSS, JavaScript, React.js, Node.js, Express.js</h1>
                <h1 className='mb-2 text-lg'><FontAwesomeIcon className='mr-3 text-2xl' icon={faLink} /> Websites  developed by me:</h1>
                <h1 className='mb-2 ml-12 text-lg'><a className='text-primary' href="https://laptop-analysis.netlify.app/">Analitics Application</a></h1>
                <h1 className='mb-2 ml-12 text-lg'><a className='text-primary' href="https://jubair-photography.web.app/">Photography website</a></h1>
                <h1 className='mb-2 ml-12 text-lg'><a className='text-primary' href="https://hero-electronics.netlify.app/">Simple React App</a></h1>
            </div>

        </section>
    );
};

export default Myprotfolio;