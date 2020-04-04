import Content from "../../components/Content/Content"
import Heading from "../../components/Heading/Heading"
import Links from "../../components/Links/Links"
import React from "react"
import Section from "../../components/Section/Section"

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
    <Section>
      <Heading heading={name} tagLine={tag} />
      <Links linkOne={url} textOne="the app" linkTwo={git} textTwo="the code" />
      <Content>
        <p>{info}</p>
      </Content>
    </Section>
  )
}

export default ProjectCard
