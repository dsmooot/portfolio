import useStore from '@/core/store'

export const useRoutingState = () => {
  const routingState = useStore((state) => ({
    currentPathname: state.currentPathname,
    setCurrentPathname: state.setCurrentPathname,
    previousPathname: state.previousPathname,
  }))

  return routingState
}

export const getPreviousPathname = () => useStore.getState().previousPathname
export const getCurrentPathname = () => useStore.getState().currentPathname
export const setCurrentPathname = useStore.getState().setCurrentPathname
