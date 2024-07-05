import { ComponentProps } from 'react'
import { NewNoteButton, DeleteButton } from '@/components'

export const ActionButtonContainer = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteButton />
    </div>
  )
}
