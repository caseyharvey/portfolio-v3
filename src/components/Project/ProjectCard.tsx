import Links from '../Links/Links'
import React from 'react'
import './project-card.sass'

interface Props {
  id: number
  key: number
  name: string
  tag: string
  url: string
  git: string
  info: string
}

const ProjectCard: React.FC<Props> = ({ name, tag, url, git, info }) => {
  return (
    <div className="project-container">
      <div className="title">
        <h3>{name}</h3>
        <span>{tag}</span>
      </div>
      <Links linkOne={url} textOne="the app" linkTwo={git} textTwo="the code" />
      <p>{info}</p>
    </div>
  )
}

export default ProjectCard
