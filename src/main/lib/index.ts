import { appDir, fileEncoding } from '@shared/constants'
import { NoteInfo } from '@shared/Models'
import { CreateNote, GetNotes, ReadNotes, WriteNotes } from '@shared/types'
import { dialog } from 'electron'
import { ensureDir, readdir, readFile, stat, writeFile } from 'fs-extra'
import { homedir } from 'os'
import path from 'path'

export const getRootDir = () => {
  return path.join(homedir(), appDir)
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
  const fileStat = await stat(path.join(getRootDir(), fileName))

  return {
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: fileStat.mtimeMs
  }
}

export const readNotes: ReadNotes = async (fileName) => {
  const rootDir = getRootDir()

  return await readFile(path.join(rootDir, `${fileName}.md`), { encoding: fileEncoding })
}

export const writNotes: WriteNotes = async (fileName, content) => {
  const rootDir = getRootDir()

  console.info(`writing notes ${fileName} `)
  console.info(path.join(rootDir, `${fileName}.md`))
  return await writeFile(path.join(rootDir, `${fileName}.md`), content, { encoding: fileEncoding })
}

export const createNotes: CreateNote = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New Note',
    defaultPath: path.join(rootDir, 'Untitled.md'),
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })

  if (canceled || !filePath) {
    console.info('note creation canceled')
    return false
  }

  const { name: filename, dir: parentDir } = path.parse(filePath)

  if (parentDir !== rootDir) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Creation Error',
      message: 'Please select a directory in the root directory'
    })
    console.error(rootDir)
    return false
  }

  console.info(`creating note ${filename} `)

  await writNotes(filename, '')

  return filename
}
