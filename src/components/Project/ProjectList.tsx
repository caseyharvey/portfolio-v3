import React from 'react'
import projectsArray from './projectsArray'
import ContentBlock from '../ContentBlock/ContentBlock'

const ProjectList: React.FC = () => {
  return (
    <>
      {projectsArray.map(project => (
        <ContentBlock
          id={project.id}
          key={project.id}
          name={project.name}
          tagline={project.tagline}
          extra={project.extra}
          linkOne={project.url}
          linkTwo={project.git}
          textOne={'the app'}
          textTwo={'the code'}
        >
          <p>{project.info}</p>
        </ContentBlock>
      ))}
    </>
  )
}

export default ProjectList
