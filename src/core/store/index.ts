import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createSelectionSlice, ISelectionSlice } from './selectionSlice'

export type TStoreState = ISelectionSlice

export type TStoreStateCreator<T> = StateCreator<TStoreState, [['zustand/devtools', never]], [], T>

const useStore = create<TStoreState>()(
  devtools((...a) => ({
    ...createSelectionSlice(...a),
  })),
)

export default useStore
