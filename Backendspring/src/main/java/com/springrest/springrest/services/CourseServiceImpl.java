package com.springrest.springrest.services;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;
//      List<Course> list;
	
	public CourseServiceImpl() {
		
//		list=new ArrayList<>();
//		list.add(new Course(145, "Java Core Course", "this course contains basics o java"));
//		list.add(new Course(4343,"Spring boot course","creating rest api using spring boot"));
//		
	}
	
	
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}


	@Override
	public Course getCourse(long courseId) {
//		Course c =null;
//		for(Course course:list) {
//			
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}
		return courseDao.getById(courseId);
	}


	@Override
	public Course addCourse(Course course) {
		//list.add(course);
		return courseDao.save(course);
	}


	@Override
	public Course updateCourse(Course course) {
//		int c=0;
//		for(Course v:list ) {
//			if(v.getId()==course.getId()) {
//				list.set(c,course);
//				break;
//			}
//			c++;			
//		}
		return courseDao.save(course);
	}


	@Override
	public void deleteCourse(long courseId) {
//		int c=0;
//		Course c1=null;
//		for(Course v:list ) {
//			if(v.getId()==courseId) {
//				c1=v;
//				list.remove(c);
//				break;
//			}
//			c++;			
//		}
		Course entity=courseDao.getById(courseId);
		courseDao.delete(entity);
	}
}


