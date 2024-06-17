import React from 'react'

function Card({ imageSrc, scaleEmoji }) {
    return (
        <div className='col-3 d-flex hoverCur flex-wrap mx-auto p-0'>
            <img src={imageSrc} className='img-fluid rounded' alt='Car' data-scale-emoji={scaleEmoji} />
        </div>
    )
}

export default Card
