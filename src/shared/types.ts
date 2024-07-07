import { NoteContent, NoteInfo } from './Models'

export type GetNotes = () => Promise<NoteInfo[]>

export type ReadNotes = (title: NoteInfo['title']) => Promise<NoteContent>

export type WriteNotes = (title: NoteInfo['title'], content: NoteContent) => Promise<void>

export type CreateNote = () => Promise<NoteInfo['title'] | false>

export type DeleteNote = (title: NoteInfo['title']) => Promise<boolean>
