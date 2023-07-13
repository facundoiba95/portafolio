import React from 'react'
import { CardNotificationContainerStyles } from './CardNotificationStyles'
import { BsCheckAll } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';

const CardNotification = ({condition, title}) => {
  return (
    <CardNotificationContainerStyles>
        <h2>{title}</h2>
        {
            condition === 200
             ? <BsCheckAll className='iconCheck'/>
             : <BiErrorCircle className='iconError'/>
        }
    </CardNotificationContainerStyles>
    )
}

export default CardNotification