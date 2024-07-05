import { GetNotes, ReadNotes } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locate: navigator.language,
    getNoteDir: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNoteDir', ...args),
    readNotes: (...args: Parameters<ReadNotes>) => ipcRenderer.invoke('readNotes', ...args)
  })
} catch (error) {
  console.error(error)
}
