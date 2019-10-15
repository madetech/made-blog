import React from 'react'

export default function ContentfulHeaderImages({
  extraLarge,
  large,
  medium,
  small,
}) {
  const className = 'contentful-header-image'

  return (
    <div className={className}>
      {extraLarge && extraLarge.fixed && (
        <img
          className={`${className}__extraLarge`}
          src={extraLarge.fixed.src}
          alt=""
        />
      )}
      {large && large.fixed && (
        <img className={`${className}__large`} src={large.fixed.src} alt="" />
      )}
      {medium && medium.fixed && (
        <img className={`${className}__medium`} src={medium.fixed.src} alt="" />
      )}
      {small && small.fixed && (
        <img className={`${className}__small`} src={small.fixed.src} alt="" />
      )}
    </div>
  )
}