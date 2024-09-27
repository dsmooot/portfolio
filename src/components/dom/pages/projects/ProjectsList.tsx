import FilterButton from './FilterButton'
import { IProject, TCategory, projects } from '@/core/data/projects'
import useStore from '@/core/store'
import Link from 'next/link'
import { forwardRef, useMemo } from 'react'
import { ListItemDescription, ListItemStack, Subtitle } from '../../common/Themed'
import { useDeviceType } from '@/core/hooks/useDeviceType'

const categories = ['web', 'mobile', 'xr', '3d'] as TCategory[]

const ProjectList = {
  Header: forwardRef<
    HTMLDivElement,
    { selectedCategory: TCategory | null; setSelectedCategory: (category: TCategory | null) => void }
  >(
    (
      {
        selectedCategory,
        setSelectedCategory,
      }: {
        selectedCategory: TCategory | null
        setSelectedCategory: (category: TCategory | null) => void
      },
      ref,
    ) => {
      const handleCategoryClick = (category: TCategory) => {
        setSelectedCategory(category)
      }
      const { isMobile, isTablet } = useDeviceType()

      return (
        <>
          <div ref={ref} className='flex w-full flex-grow-0 gap-x-2 gap-y-4 xl:gap-x-4'>
            {categories.map((category) => (
              <FilterButton
                key={category}
                onClick={() => handleCategoryClick(category)}
                isActive={
                  ((isMobile || isTablet) && selectedCategory === null && category === 'web') ||
                  selectedCategory === category
                }
                className='filter'
              >
                {category}
              </FilterButton>
            ))}
            {!isMobile && !isTablet && (
              <FilterButton
                onClick={() => setSelectedCategory(null)}
                isActive={selectedCategory === null}
                className='filter'
              >
                All
              </FilterButton>
            )}
          </div>
          <div id='divider' className='h-px w-full border-t border-t-gray-500 pb-4 xl:pb-8' />
        </>
      )
    },
  ),
  List: forwardRef<HTMLUListElement, { selectedCategory: TCategory | null; toggleGradient: () => void }>(
    ({ selectedCategory, toggleGradient }, ref) => {
      const filteredProjects = useMemo((): IProject[] => {
        const res = [] as IProject[]
        if (!selectedCategory) {
          for (let key in projects) {
            res.push(projects[key])
          }
          return res
        }
        for (let key in projects) {
          if (projects[key].categories.includes(selectedCategory)) {
            res.push(projects[key])
          }
        }
        return res
      }, [selectedCategory])

      const { setCurrentProject } = useStore((state) => ({
        setCurrentProject: state.setCurrentProject,
      }))

      const handleEnter = (project: IProject) => {
        setCurrentProject(project)
      }

      const handleLeave = () => {
        setCurrentProject(null)
      }

      return (
        <ul ref={ref} className='flex size-full max-w-screen-xl flex-col overflow-y-scroll'>
          {filteredProjects.map((project, index) => (
            <Link
              href={`/projects/${project.uri}`}
              key={project.title}
              onClick={(event) => {
                event.stopPropagation()
                toggleGradient()
                setCurrentProject(project)
              }}
              className='list-item w-full border-black opacity-0 xl:border-none [&:not(:last-child)]:border-b'
            >
              <li
                key={project.title}
                className='group flex w-full transform flex-col gap-4 overflow-visible py-4 transition-transform duration-300 ease-in-out xl:flex-row xl:items-center xl:hover:-translate-y-1 xl:hover:translate-x-2'
                onMouseOver={() => handleEnter(project)}
                onMouseLeave={() => handleLeave()}
              >
                <Subtitle
                  className={`pointer-events-none whitespace-nowrap transition-all duration-300 ease-in-out xl:min-w-[450px] ${project.twColor}`}
                >
                  {project.title}
                </Subtitle>
                <ListItemDescription className='pointer-events-none flex min-h-[40px] w-full items-center border-black xl:h-[80px] xl:min-w-[400px] xl:max-w-[800px] xl:border-l xl:px-4'>
                  {project.shortDescription}
                </ListItemDescription>
                <div className='pointer-events-none flex min-h-[40px] items-center border-black xl:h-[80px] xl:min-w-[400px] xl:border-l xl:px-4'>
                  <ListItemStack className='pointer-events-none'>{project.stack.join(', ')}</ListItemStack>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )
    },
  ),
}

ProjectList.Header.displayName = 'ProjectListHeader'

ProjectList.List.displayName = 'ProjectListList'

export default ProjectList
