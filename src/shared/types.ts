import { NoteContent, NoteInfo } from './Models'

export type GetNotes = () => Promise<NoteInfo[]>

export type ReadNotes = (title: NoteInfo['title']) => Promise<NoteContent>
