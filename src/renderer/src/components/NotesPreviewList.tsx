import { notesMock } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { NotesPreview } from './NotesPreview'
import { twMerge } from 'tailwind-merge'

export const NotesPreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notesMock.map((note) => (
        <NotesPreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
