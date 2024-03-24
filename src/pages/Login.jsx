import React, { useState ,} from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from'reactstrap'
import {Link} from'react-router-dom'
import "../styles/login.css"

import loginImg from "../assets/images/login.png"
import userIcon from "../assets/images/user.png"


const Login = () => {

 
  return (
   <Container>
    <Row>
  
      <Col lg='8' className='m-auto'>
                <div className='login__container d-flex justify-content-between'>
                    <div className='login__img'>
                        <img src={loginImg} alt="" />
                    </div>
                    
                    <div className='login__form'>
                    <div className="user">
                        <img src={userIcon} alt="" />
                    </div>
                    <h2>Login</h2>
                    <Form>
                  <FormGroup>
                      <imput type="email" placeholder='Email' required id='email' />
                    </FormGroup>
                    <FormGroup>
                      <imput type="email" placeholder='Email' required id='email' />
                    </FormGroup>
                    <Button type='submit' className='btn secondary_btn auth_btn'>Login</Button>
                  </Form>
                    </div>

                    </div>
      </Col>
    </Row>
   </Container>
  )
}

export default Login