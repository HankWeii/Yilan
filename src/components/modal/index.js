import React from 'react'
import './modal.css'

export default function Modal(props) {
    console.log(props.imageUrl)
    return (props.trigger)? (
        <div className="popup" onClick={()=>props.setModalIsOpen(false)}>
            <div className="popup-inner">
                <img src={props.imageUrl} className='modal_image' />
            </div>
        </div>
    ):'';
}
