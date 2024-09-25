import { IProject } from '@/core/data/projects'
import { TStoreStateCreator } from '.'
export interface ISelectionSlice {
  currentProject: IProject | null
  setCurrentProject: (value: IProject | null) => void
}

export const createSelectionSlice: TStoreStateCreator<ISelectionSlice> = (set, get, api) => ({
  currentProject: null,
  setCurrentProject: (value) => set((state) => ({ ...state, currentProject: value })),
})
