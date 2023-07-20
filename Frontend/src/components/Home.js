import React,{ useEffect} from 'react';
//import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container,Button } from 'reactstrap';
import Allcourse from './Allcourses';

    
    const Home = () => {
            useEffect(()=>{
                document.title="Home || Course Application";  
         },[]);
        return (
            <div className="container-fluid bg-light text-dark p-5 text-center">
            <div className="container bg-light p-5">
                <h1 >Learn Code With Harish</h1>
                <p>Developed this full stack CRUD application for basic understanding of React and Spring Boot</p>

                <Button color="primary" outline>Start Using</Button>
    
            </div>
           </div>


            // <div class="jumbotron text-center bg-secondary">
                
            //         <h1>React Application </h1>
            //         <p>Developed by Sakshi Gupta for basic understanding of React</p>
            //         <div class="container">
            //             <h color="primary" outline>Start Using the Application</h>
            //         </div>
                   
            // </div>
        );
    };
    
    export default Home;