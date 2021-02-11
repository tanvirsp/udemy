import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const courseCount = props.courseCount;
    console.log(courseCount)

    //total product price
    const total = courseCount.reduce((total, prd) => total + prd.price , 0)
    const vat = total * .05;


    return (
        <div className="row">
            <div className="col">
                <div className="bottom-cart-section">
                    <div className="bottom-cart">
                        <h4 className="bg-success">CART SUMMERY</h4>
                        <table>
                            <tr>
                                <td> <h5>Courses Enrolled : </h5></td>
                                <td> <h5>{courseCount.length}</h5> </td>
                            </tr>
                            <tr>
                                <td> <p>Price : </p></td>
                                <td><p> $ {total}</p> </td>
                            </tr>
                            <tr>
                                <td> <p>VAT :  </p></td>
                                <td><p>$ {vat}</p> </td>
                            </tr>
                            <tr>
                                <td> <p>Total Price:  </p></td>
                                <td><p>$ {total + vat}</p> </td>
                            </tr>
                        </table>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;