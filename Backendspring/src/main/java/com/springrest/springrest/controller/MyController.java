package com.springrest.springrest.controller;

import java.util.List;
//
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;


@RestController
@CrossOrigin
public class MyController {
              
	      @Autowired
	      private CourseService courseService;
	      
	    /*  @GetMapping("/home")
	      public String home() {
	    	  return "this is home page";
	      }*/
	      
	      //get the courses
	      //@CrossOrigin
	      
	      @GetMapping("/courses")
	      @ResponseStatus(HttpStatus.OK)
	      public List<Course> getCourses()
	      {
	    	  return this.courseService.getCourses();
	    	  
	      }
	     
	      @GetMapping("/courses/{courseId}")
	      public Course getCourse(@PathVariable String courseId) 
	      {
	    	  return this.courseService.getCourse(Long.parseLong(courseId));
	      }
	      
	      @PostMapping("/courses")
	      public Course addCourse(@RequestBody Course course) 
	      {
	    	  return this.courseService.addCourse(course); 
	      }
	      
	      //In mvc we use this alternative of passing the request as RequestMapping by specifying the path and type of method 
          //Bydefault its a get method. 
	      /*@RequestMapping(path="/courses",method=RequestMethod.GET) 
            public List<Course> getCourses(){
            return this.courseService.getCourses();
            }
            */
	      
	      @PutMapping("/courses")
	      public Course updateCourse(@RequestBody Course course)
	      {
			return this.courseService.updateCourse(course);
	    	  
	      }
	      
	      @DeleteMapping("/courses/{courseId}")
	      public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId ) {
	    	  try {
	    		  this.courseService.deleteCourse(Long.parseLong(courseId));
	    		    return new ResponseEntity<>(HttpStatus.OK);
	    	  }
	    	  catch(Exception e) {
	    		  return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    		  
	    	  }
	      }
               
}
