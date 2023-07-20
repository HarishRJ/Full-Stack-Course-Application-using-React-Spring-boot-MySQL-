import React, { useState,useEffect } from 'react';
import Course from "./Course";
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourse=()=>{
     useEffect(()=>{
         document.title="All Courses || Course Aplication";  //it 'll call times at componentdidmount and componentdidupdate
     },[]);//----> now won't call at the time of update
     
     //function to call server:
     const getAllcoursesFromServer=()=>{
         axios.get(`${base_url}/courses`).then(
             (response)=>{
                 //success
                 console.log(response.data);
                 toast.success("courses has been loaded",{
                     position:"bottom-center"});
                 setCourses(response.data);
             },
             (error)=>{
                 console.log(error);
                 toast.error("something went wrong")
             }
         
         );
     };

     //calling loading coirse function
     useEffect(()=>{
        getAllcoursesFromServer();
     },[]);


    const [courses, setCourses]=useState ([ //hook: it 'll enable estate.to create  variable for Allcourse.
     //{title:"Java Course", description:"this is demo course"},   //array of objects
     //{title:"Django Course", description:"this is demo course"},
     //{title:"React Course", description:"this is demo course"},
    ]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));

    }
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length>0 
                ? courses.map((item)=> (<Course key={item.id} course={item} update={updateCourses} />))
                :"No courses"
            }
        </div>
    
    )
}

export default Allcourse;