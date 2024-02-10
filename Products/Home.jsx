import React from 'react'
import Sidebar from '../Header/Sidebar';
import Swipper from '../Body/Swipper';
import Cart from './Cart';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from './phono.jpg'

export default function Home() {
  return (
    <div className='mt-8'>
    <Container>
        <Row> 
            <Col  lg={3}>
                <Sidebar/>
                <img src={Banner} alt='banner' className='w-[98%] mt-3'/>

            </Col>
            <Col lg={9}>
                <Swipper/>
                <Cart/>
            </Col>
        </Row>
    </Container>

   

    </div>
  )
}
