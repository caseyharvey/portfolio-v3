import React from 'react'
import PinkC from '../../images/pink-c-favicon.svg'

interface Props {
  id?: number
  key?: number
  name: any
  tagline: any
  extra: any
  linkOne: string
  linkTwo: string
  textOne: string
  textTwo: string
}

const ContentBlock: React.FC<Props> = ({
  name,
  tagline,
  extra,
  children,
  linkOne,
  linkTwo,
  textOne,
  textTwo,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleContent = () => {
    setIsOpen(isOpen ? false : true)
  }

  return (
    <div>
      <div className="block-container">
        <div className="head">
          <div className="heading-text">
            <h2>{name}</h2>
            <h4>{tagline}</h4>
            <span>{extra}</span>
          </div>
          <div className="avatar">{/* <PinkC /> */}</div>
        </div>
        <div className="link-container">
          <a href={linkOne} target="_blank" rel="noopener noreferrer">
            {textOne}
          </a>
          <a href={linkTwo} target="_blank" rel="noopener noreferrer">
            {textTwo}
          </a>
        </div>
        <button onClick={toggleContent}>{isOpen ? 'collapse' : 'info'}</button>
        <div className="text-container">
          <div className={isOpen ? 'text expanded-text' : 'text'}>
            {children}
          </div>
          <button className={isOpen ? '' : 'hide'} onClick={toggleContent}>
            {isOpen ? 'collapse' : ''}
          </button>
        </div>
      </div>
    </div>
  )
}
export default ContentBlock
