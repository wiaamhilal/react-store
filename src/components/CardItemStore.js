import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItems from "../data/storeItems.json"
import currencyFormater from "./FormatCurrency"
import { useShopingCard } from './TextMethods'

export const CardItemStore = ({id , quantity}) => {
  const {decreaceItmeQuantity} = useShopingCard()
  const item = storeItems.find((i) => i.id === id)
  if(item == null) return null

  return (
    <Stack direction='horizontal' className='d-flex align-items-center justify-content-between mb-4 shadow-sm bg-white'>
      <div className='d-flex align-items-center'>
        <img src={item.urlImg} className='rounded me-1' alt='img' style={{width:"120px", height:"75px",objectFit:"contain"}} />
        <div>
          <span>{item.name}</span>
          {quantity > 1 && (<span className='text-secondary ms-2' style={{fontSize:"13px"}}>x {quantity}</span>)}          
          <span className='d-block text-secondary' style={{fontSize:"13px"}}>{currencyFormater(item.price)}</span>
        </div>
      </div>
      <div className='d-flex align-items-center'>
        <span className='me-1'  style={{fontSize:"14px", fontWeight:"normal"}}>{currencyFormater(item.price * quantity)}</span>
        <Button variant='outline-danger' onClick={ () => decreaceItmeQuantity(id)}>x</Button>
      </div>
    </Stack>
  )
}
export default CardItemStore
