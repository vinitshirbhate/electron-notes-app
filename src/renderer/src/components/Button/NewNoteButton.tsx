import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreateEmptyNote = async () => {
    await createEmptyNote()
  }
  return (
    <ActionButton onClick={handleCreateEmptyNote} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-400" />
    </ActionButton>
  )
}
