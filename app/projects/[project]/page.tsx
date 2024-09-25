import { projects } from '@/core/data/projects'
import Project from '@/components/dom/pages/project/Project'

// This generates the static paths for all project pages at build time
export async function generateStaticParams() {
  return Object.keys(projects).map((project) => ({
    project,
  }))
}

const ProjectPage = ({ params }: { params: { project: string } }) => {
  return <Project params={params} />
}

export default ProjectPage
