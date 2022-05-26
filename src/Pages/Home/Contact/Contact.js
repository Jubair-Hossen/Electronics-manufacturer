import React from 'react';

const Contact = () => {
    return (
        <section className='mt-24'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Need any support? Feel free to contact us</h1>
            <div className="grid md:grid-cols-2 items-center gap-12">
                <img className='w-1/2 md:w-2/3 mx-auto' src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1651988021~exp=1651988621~hmac=0d242a227707aaab50f6c6455ea34b4f03e2b03386744f9bc0b9ad6ec4fbb078&w=740" alt="" />
                <div>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xl mb-3" />
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xl mb-3" />
                    <textarea className="textarea w-full max-w-xl mb-3 input-bordered" placeholder="Write Your Question here"></textarea>
                    <input type="submit" className='btn btn-primary block' value="Contact Now" />
                </div>
            </div>
        </section>
    );
};

export default Contact;