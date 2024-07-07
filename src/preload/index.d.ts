import { ElectronAPI } from '@electron-toolkit/preload'
import { CreateNote, DeleteNote, GetNotes, ReadNotes, WriteNotes } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locate: string
      getNoteDir: GetNotes
      readNotes: ReadNotes
      writNotes: WriteNotes
      createNotes: CreateNotes
      deleteNotes: DeleteNote
    }
  }
}
