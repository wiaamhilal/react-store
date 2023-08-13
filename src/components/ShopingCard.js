import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShopingCard } from './TextMethods'
import  CardItemStore  from './CardItemStore'
import currencyFormater from './FormatCurrency'
import storeItems from "../data/storeItems.json"
const ShopingCard = ({isOpen}) => {;
  const {CartItems,closeCard} = useShopingCard();
  return (
    <Offcanvas show = {isOpen} placement='end'>
        <Offcanvas.Header closeButton onHide={closeCard}>
            <Offcanvas.Title>
                card
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-light'>
            {CartItems.map((item) => (
                <CardItemStore key = {item.id} {...item} />
            ))}
           { CartItems.length > 0 ? ( <div className='fw-bold'>
            Total price : {currencyFormater(CartItems.reduce((total,cartitem) => {
               const item = storeItems.find((i) => i.id === cartitem.id)
               return total + (item.price) * cartitem.quantity 
            },0))}
            </div>):(<span className='d-flex justify-content-center fs-4'>your card is empty</span>)}
        </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShopingCard