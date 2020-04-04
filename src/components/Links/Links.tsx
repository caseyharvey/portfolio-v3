import React from "react"

interface Props {
  linkOne: string
  linkTwo: string
  textOne: string
  textTwo: string
}

const Links: React.FC<Props> = ({ linkOne, linkTwo, textOne, textTwo }) => {
  return (
    <div className="links-container">
      <div className="links">
        <a href={linkOne} target="_blank" rel="noopener noreferrer">
          {textOne}
        </a>
        <a href={linkTwo} target="_blank" rel="noopener noreferrer">
          {textTwo}
        </a>
      </div>
    </div>
  )
}

export default Links
