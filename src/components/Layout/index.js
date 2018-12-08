import React from 'react'
import '@madetech/frontend/dist/css/madetech-frontend.css'
import Meta from '../Meta'
import { Header, TopBar } from '@madetech/frontend'

export default function Layout ({ data, children }) {
  return (
    <div>
      <Meta />
      <TopBar
        links={[
          <a href='/blog'>Blog</a>,
          <a href='/learn'>Learn</a>,
          <a href='/careers'>Careers</a>
        ]}
        />
      <Header
        logoHref='/'
        navLinks={[
          <a href='https://www.madetech.com/agile-transformation' className='nav-link'>
            Agile Team Transformation
          </a>,

          <a href='https://www.madetech.com/software-development' className='nav-link'>
            Software Development
          </a>,

          <a href='https://www.madetech.com/continuous-delivery' className='nav-link'>
            Continuous Delivery
          </a>,

          <a href='https://www.madetech.com/devops' className='nav-link'>
            DevOps &amp;
            <br className='d-none d-lg-block' />
            Live Services
          </a>
        ]}
        />
      {children}
    </div>
  )
}
