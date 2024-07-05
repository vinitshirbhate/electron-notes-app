import { appDir, fileEncoding } from '@shared/constants'
import { NoteInfo } from '@shared/Models'
import { GetNotes, ReadNotes } from '@shared/types'
import { ensureDir, readdir, readFile, stat } from 'fs-extra'
import { homedir } from 'os'

export const getRootDir = () => {
  return `${homedir()}/${appDir}`
}

export const getNoteDir: GetNotes = async () => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)

  const notesFileName = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileName.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFileName))
}

export const getNoteInfoFileName = async (fileName: string): Promise<NoteInfo> => {
  const fileStat = await stat(`${getRootDir()}/${fileName}`)

  return {
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: fileStat.mtimeMs
  }
}

export const readNotes: ReadNotes = async (fileName) => {
  const rootDir = getRootDir()

  return await readFile(`${rootDir}/${fileName}.md`, { encoding: fileEncoding })
}
