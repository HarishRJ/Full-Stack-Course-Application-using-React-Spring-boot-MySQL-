import axios from 'axios';
import React,{ Fragment,useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import {Form, FormGroup ,Input,Container,Button} from 'reactstrap';
import base_url from '../api/bootapi';
import { Link } from 'react-router-dom';


const Updatecourse=({id})=>{
 useEffect(()=>{
          document.title="Update Courses || Course Application";  //it 'll call times at componentdidmount and componentdidupdate
        },[]);

     const [course, setCourse]=useState ({});
        //form handler function
        const handleForm=(e)=>{
            console.log(course);
            putDatatoServer(course);
            e.preventDefault();
        };

        //creating function to post data on server
        const putDatatoServer=(data)=>{
           axios.put(`${base_url}/courses`,data).then(
               (response)=>{
                   console.log(response);
                   console.log("success");
                   toast.success("Course updated successfully")
                   setCourse({id:"", title:"", description:""});
               }
               ,
               (error)=>{
                  console.log(error);
                  console.log("error");
                  toast.error("Error!Something went wrong");
                  }
               
           );
        };
        
    return (
        <Fragment>
            <h1 className="text-center my-3">Update Course Details</h1>
            <Form onSubmit={handleForm}>
            <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text"  placeholder="Enter ID here" id="userId" onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title" onChange={(e)=>
                    {setCourse({...course,title:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}} onChange={(e)=>
                    {setCourse({...course,description:e.target.value});
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success" onClick={Updatecourse}>Update Course</Button>
                    <Button type="reset" onClick={()=>{setCourse({id:"", title:"", description:""});}}color="warning ms-2">clear</Button>
                </Container>

            </Form>

        </Fragment>
    );
};

export default Updatecourse;