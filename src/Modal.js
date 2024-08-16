import React, { Children } from "react";
import './Modal.css'

function Modal({children}) {
    return (
        <div className='modal-container'>
            <div className='modal-box'>
                {children}
            </div>



        </div>
    )
}

export default Modal;