import React from 'react'
import { Button, Card } from 'react-bootstrap'
import currencyFormater from './FormatCurrency'
import { useShopingCard } from './TextMethods'
const StoreItem = ({id,urlImg,name,price}) => {
    const {IncreaceItmeQuantity,GetCardQuantity,decreaceItmeQuantity ,RemoveAll} = useShopingCard() 
   const quentity = GetCardQuantity(id)
  return (
    <Card  className='shadow-sm border-0'>
        <Card.Img src={urlImg} variant='top' style={{height:"250px",objectFit:"contain"}}/>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center p-1'>
                <span>{name}</span><span className='text-muted'>{currencyFormater(price)}</span>
            </Card.Title>
            <div>
                {quentity > 0 ? (
                    <div>
                        <div className='d-flex justify-content-between algin-items-center'>
                            <Button size='sm' onClick={() => decreaceItmeQuantity(id)}>Less</Button>
                            <Card.Title>{quentity} in card</Card.Title>
                            <Button size='sm' onClick={() => IncreaceItmeQuantity(id)}>More</Button>
                        </div>
                        {quentity > 1 &&(<Button variant='danger' className='w-100 mt-3' onClick={() => RemoveAll(id)}>Remove all</Button>)}
                    </div>
                ):<Button className='w-100' onClick={() => IncreaceItmeQuantity(id)}>add to card</Button>}
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem