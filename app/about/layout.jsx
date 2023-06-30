import React from 'react'

export const metadata = {
    title: 'About John Flavian',
    description: 'My Portfolio',
    keywords: 'software engineer, web design, javascript, react, node, html, css'
  }

const AboutLayout = ({children}) => {
  return (
    <div>
        <h1>This is the About Layout</h1>
        {children}
    </div>
  )
}

export default AboutLayout