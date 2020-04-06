import Heading from '../../components/Heading/Heading'
import Links from '../../components/Links/Links'
import React from 'react'

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
      <Heading heading={name} tagLine={tag} />
      <Links linkOne={url} textOne="the app" linkTwo={git} textTwo="the code" />
      <p>{info}</p>
    </div>
  )
}

export default ProjectCard
