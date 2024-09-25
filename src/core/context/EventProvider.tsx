// context/EventContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react'

type EventContextType = {
  eventData: any
  triggerEvent: (data: any) => void
}

const EventContext = createContext<EventContextType | undefined>(undefined)

export const useEvent = () => {
  const context = useContext(EventContext)
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider')
  }
  return context
}

interface EventProviderProps {
  children: ReactNode
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [eventData, setEventData] = useState<any>(null)

  const triggerEvent = (data: any) => {
    setEventData(data)
  }

  return <EventContext.Provider value={{ eventData, triggerEvent }}>{children}</EventContext.Provider>
}
