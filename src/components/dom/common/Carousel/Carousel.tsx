import React, { useEffect, useMemo } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './NavDots'
import { PrevButton, NextButton, usePrevNextButtons } from './Arrows'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import cx from 'classnames'
import Video from '../Video'
import useStore from '@/core/store'
import { TMedia } from '@/core/data/projects'

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const { currentProject } = useStore((state) => ({
    currentProject: state.currentProject,
  }))

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const placeholderImage = { src: '/img/waves.png', alt: 'placeholder', type: 'img' } as TMedia

  if (!currentProject?.media) return null

  return (
    <section className='mx-auto max-w-4xl'>
      <div className='overflow-hidden rounded-3xl' ref={emblaRef}>
        <div className='-ml-4 flex touch-pan-y rounded-3xl'>
          {currentProject?.media?.map((media, index) => (
            <div
              className={cx(
                'translate-3d relative min-h-[200px] w-full min-w-[400px] transition-opacity duration-500 ease-in-out md:min-h-[400px]',
                selectedIndex === index ? 'opacity-100' : 'opacity-40',
                media.type === 'video' ? 'flex-[0_0_100%] bg-black bg-opacity-10' : 'flex-[0_0_100%]',
              )}
              key={index}
            >
              {media.type === 'video' && <Video src={media.src} autoplay loop controls={false} poster={media.poster} />}
              {media.type === 'img' && <Image src={media.src} alt={media.alt} fill className='h-full object-cover' />}
            </div>
          ))}
        </div>
      </div>

      {currentProject?.media?.length > 1 && (
        <div className='mt-4 grid grid-cols-[auto_1fr] justify-between gap-6 xl:mt-[1.8rem]'>
          <div className='grid grid-cols-2 items-center gap-2'>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className='flex flex-wrap items-center justify-end'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={cx(
                  'tap-highlight-transparent mr-2 inline-flex h-[1rem] w-[1rem] cursor-pointer appearance-none items-center justify-center rounded-full xl:mr-4',
                  index === selectedIndex
                    ? 'shadow-[inset_0_0_0_0.1rem_rgb(222,222,222)]'
                    : 'shadow-[inset_0_0_0_0.1rem_rgb(0,0,0)]',
                )}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Carousel
