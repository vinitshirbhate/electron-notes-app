import { useSetAtom } from 'jotai'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { FaRegTrashCan } from 'react-icons/fa6'
import { deleteNoteAtom } from '@renderer/store'

export const DeleteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeleteNote = async () => {
    await deleteNote()
  }
  return (
    <ActionButton {...props} onClick={handleDeleteNote}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-400" />
    </ActionButton>
  )
}
