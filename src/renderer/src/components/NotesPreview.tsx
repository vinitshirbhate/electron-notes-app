import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/Models'
import { ComponentProps } from 'react'

export type NotesPreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotesPreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotesPreviewProps) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-400/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-sm font-light text-left">{date}</span>
    </div>
  )
}
