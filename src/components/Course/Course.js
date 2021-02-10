import React from 'react';
import {Card} from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const handleCourseToCart = props.handleCourseToCart;
    const {course, image, instructor, price} = props.course

    return (
        <div className="card-section">
            
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{course}</Card.Title>
                <Card.Text>
                    Instructor : <b>{instructor}</b>
                   
                </Card.Text>
                </Card.Body>
                <Card.Footer className="justify-content-between">
                    
                         <button className="btn btn-success" onClick={()=>handleCourseToCart(props.course)}>Enrolled Now</button>
                         <h4>$ <span style={{color: "green"}}> {price}</span></h4>
                    
                
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;