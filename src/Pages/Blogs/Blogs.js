import React from 'react';

const Blogs = () => {

    return (
        <section className='max-w-2xl mx-auto mt-6 px-3'>
            <h1 className="text-center text-4xl text-bold mb-6">Questions and Answers</h1>

            <h1 className="text-2xl text-bold mb-2">01. How will you improve the performance of a React Application?</h1>
            <p className='mb-6'>
                I can improve the performance of a react application by following this steps. <br />
                1. Keeping component state local where necessary. <br />
                2. Memoizing React components to prevent unnecessary re-renders. <br />
                3. Code-splitting in React using dynamic import(). <br />
                4. Windowing or list virtualization in React. <br />
                5. Lazy loading images in React.
            </p>

            <h1 className="text-2xl text-bold mb-2">02. What are the different ways to manage a state in a React application?</h1>
            <p className='mb-6'>
                1. useState is the first tool I should reach for to manage state in your components. <br />
                2. useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer. <br />
                3. To manage global state, I can use third-party libraries like Zustand, Jotai, and Recoil. <br />
                4. URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. example: useHistory or useLocation.
            </p>

            <h1 className="text-2xl text-bold mb-2">03. How does prototypical inheritance work?</h1>
            <p className='mb-6'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>

            <h1 className="text-2xl text-bold mb-2">04. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p className='mb-6'>I can Implement the search by using filter() and includes() functions. Here is an example: <br /><br />

                const search = products.filter(product = product.name.includes('keyword')); <br />
                console.log(search);

            </p>

            <h1 className="text-2xl text-bold mb-2">05. What is a unit test? Why should write unit tests?</h1>
            <p className='mb-6'>Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this could mean checking that the component renders correctly for the specified props. In other words, writing unit tests means that we write code that verifies that our code works as expected. We'll go over the other goals of unit testing later on. Generally, I found that it's a good idea to write tests in the following situations: <br />
                1. Before or during implementing new functionality. <br />
                2. Before and during refactoring. <br />
                3. Before fixing a bug.
            </p>

        </section>
    );
};

export default Blogs;