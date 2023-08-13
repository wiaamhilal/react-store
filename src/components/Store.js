import React from 'react';
import storeItems from "../data/storeItems.json";
import StoreItem from './storeItem';
import { Col, Row } from 'react-bootstrap';
const Store = () => {
  return (
    <div  className='container'>
    <h1 className='text-start'>store</h1>
    <Row xs={1} md={3} xl={4}>
      {storeItems.map((item) => (
        <Col key={item.id} className='mb-4'>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>  
    </div>
  )
}

export default Store