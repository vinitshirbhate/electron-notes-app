import { ComponentProps } from 'react'
import { NotesPreview } from './NotesPreview'
import { twMerge } from 'tailwind-merge'
import { useNotesList } from '@renderer/hooks/useNotesList'
import { isEmpty } from 'lodash'

export type NotesPreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotesPreviewList = ({ onSelect, className, ...props }: NotesPreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })
  if (!notes) return null
  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotesPreview
          isActive={selectedNoteIndex == index}
          onClick={handleNoteSelect(index)}
          key={note.title + note.lastEditTime}
          {...note}
        />
      ))}
    </ul>
  )
}
