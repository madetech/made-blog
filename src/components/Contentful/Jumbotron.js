import React from 'react'
import { Jumbotron } from '@madetech/frontend'

export default function ContentfulJumbotron({
  backgroundUrl,
  columnWidth,
  columnOffset,
  html,
  id,
  textAlign,
  textColor,
}) {
  let className = 'contentful-jumbotron'

  if (backgroundUrl) className += ` with-background`
  if (textColor === 'black') className += ` with-black-text`
  if (textAlign) className += ` text-${textAlign}`

  return (
    <div className={className} id={id}>
      <Jumbotron backgroundUrl={backgroundUrl}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-${columnWidth} offset-lg-${columnOffset}`}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}
