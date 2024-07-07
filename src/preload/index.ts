import { CreateNote, DeleteNote, GetNotes, ReadNotes, WriteNotes } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locate: navigator.language,
    getNoteDir: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNoteDir', ...args),
    readNotes: (...args: Parameters<ReadNotes>) => ipcRenderer.invoke('readNotes', ...args),
    writNotes: (...args: Parameters<WriteNotes>) => ipcRenderer.invoke('writeNotes', ...args),
    createNotes: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNotes', ...args),
    deleteNotes: (...args: Parameters<DeleteNote>) => ipcRenderer.invoke('deleteNotes', ...args)
  })
} catch (error: any) {
  console.error(error.message)
}
