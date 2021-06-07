import React from 'react'
import { MDCRipple } from '@material/ripple';

const Friend = props => {

    return (
        <>
            <div className='mdc-card'>
                <div className='friend'>
                    {props.friend.name}
                    {props.friend.age}
                    {props.friend.email}
                    {props.friend.nickname}
                    {props.friend.image}
                </div>

            </div>
        </>
    )
}
export default Friend