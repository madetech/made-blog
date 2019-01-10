import React from 'react'

export default function InlineImages ({ caption, images }) {
  const imageComponents = images.map((image, i) => {
    return (
      <img
        alt={image.title}
        className='mx-3 my-3'
        height='40'
        key={i}
        src={image.fixed.src}
        />
    )
  })

  return (
    <div className='container my-5 text-center' key={i}>
      <div className='row'>
        <div className='col-lg-10 offset-lg-1'>
          <p className='lead text-muted'>{content.caption}</p>

          <div className='d-lg-flex justify-content-between'>
            {imageComponents}
          </div>
        </div>
      </div>
    </div>
  )
}
