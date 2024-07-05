import { ElectronAPI } from '@electron-toolkit/preload'
import { GetNotes, ReadNotes } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locate: string
      getNoteDir: GetNotes
      readNotes: ReadNotes
    }
  }
}
