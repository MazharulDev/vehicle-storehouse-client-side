import React from 'react';
import PageTitle from '../../../PageTitle/PageTitle';
import Footer from '../../Home/Header/Footer/Footer';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';


const Blogs = () => {
    return (
        <div>
            <SimpleHeader />
            <PageTitle title='Blog'></PageTitle>
                <h1 className='text-4xl text-center my-4'>Question and Answer</h1>
            <div className='w-4/5 md:w-3/5 p-10'>
                <h2 className='text-xl'> <strong>Question:</strong> Difference between Nodejs and JavaScript </h2>
                <p> <strong>Answer:</strong> Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.Javascript basically used on the client-side but NodeJS mostly used on the server-side.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox and other side V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                <h2 className='text-xl'> <strong>Question:</strong> Differences between sql and nosql databases. </h2>
                <p> <strong>Answer:</strong> SQL is relational database management system and nosql is Non-relational or distributed database system. SQL databases have fixed or static or predefined schema but nosql have dynamic schema. SQL is vertically Scalable and nosql is horizontally scalable. Sql databases are not suited for hierarchical data storage and nosql databases are best suited for hierarchical data storage. </p>
                <h2 className='text-xl'> <strong>Question:</strong>What is the purpose of `jwt` and how does it work </h2>
                <p> <strong>Answer:</strong> What purpose of jwt: JWT is a mechanism to verify the owner of JSON data. It is an encoded and url-safe string that can contain an unlimited amount of data and is crypto signed.

                    How does jwt work: we have client and a server.The client wants to access some protected data on our server, but the server knows users cannot be trusted. The server only wants to give the data to a trustworthy user. So our user sends a request to our server along with data to verify who it is.
                    This user data was accepted as valid by the server. Now instead of saving this user data, the server instead creates a token. This token is returned to the user and it is up to the client to store this data and send it along as required for any requests to the server. The next time our user makes a request along a secure route, it does just that. It sends along the job token. But our server knows not to trust the user. Because users cannot be trusted.So our server verifies this token is who it says it is from and that it has not been tampered with. </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Blogs;