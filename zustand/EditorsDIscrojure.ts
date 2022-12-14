import { NodeProps } from 'reactflow'
import create from 'zustand'
import { ClassNode, ClassNodeData } from '../components/ClassNodePackage/type/ClassNodeComp'
import { devtools } from 'zustand/middleware'

type disclosure = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

type editorDiscrojureKey = {}

export const useDisclojureStore = create(
  devtools<disclosure>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
  })),
)
