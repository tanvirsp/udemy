import Header from './components/Header/Header';
import Course from './components/Course/Course';
import { useEffect, useState } from 'react';
import courseData from './courseData/courseData.json';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart/Cart';

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
     setCourses(courseData);
  }, [])

  //Click Handelar Function to Enroll course
  const handleCourseToCart = (courseToCart)=>{
    const newCart = [...cart, courseToCart ];
    setCart(newCart);
  };

  return (
    <div className="app">
      <Header courseCount = {cart}></Header>
        <div className="d-flex mx-4">
          <div className="col-md-10">
              <Row className="d-flex align-items-center">
                <Col md={4}><hr/></Col>
                <Col md={4}>
                  <div className ="course-title"> <span className="our-course">Our Courses</span></div>
                </Col>
                <Col md={4}><hr/></Col>
              </Row>
              
              <Row className="d-flex align-items-center justify-content-center">
                {
                  courses.map(course => <Course course = {course} key ={course.id} handleCourseToCart ={handleCourseToCart} ></Course>)
                }
              </Row>
          </div>
          <div className="col-md-2 mt-5 bg-light">
              <Cart courseCount = {cart}></Cart>
          </div>
        </div>
      
       
      
      
      

      
    </div>
  );
}

export default App;
