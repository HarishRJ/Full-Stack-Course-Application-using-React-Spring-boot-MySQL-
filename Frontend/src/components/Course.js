import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course,update})=>{


    const deleteCourse=(id)=>{
axios.delete(`${base_url}/courses/${id}`).then(
    (response)=>{
         toast.success("course deleted")
         update(id);
    },
    (error)=>{
          toast.error("course not deleted!!Server problem");
    }
    )
    };
    
  
 return(
     <Card className="text-center">
         <CardBody className="text-center">
             {/* <CardText>ID:{course.id}</CardText>
             <CardSubtitle> {course.title}</CardSubtitle> */}
             <CardTitle><h3>{course.title}</h3></CardTitle>
             <CardText>{course.description}</CardText>
             
             <Container className="text-center">
                 <Button color="danger" onClick={()=>{
                     deleteCourse(course.id);
                     }}>Delete</Button>
                 <Link  tag="a" to="/update-courses" action>
                 <Button color="warning ms-3" id={course.id}>Update</Button>
                 </Link>
             </Container>
             </CardBody>
     </Card>
 )
}

export default Course;
<Link  tag="a" to="/update-courses" action>
                 
</Link>