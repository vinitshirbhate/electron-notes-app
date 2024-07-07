import { useRef } from 'react'
import {
  Content,
  RootLayout,
  Sidebar,
  ActionButtonContainer,
  NotesPreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from './components'

const App = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    scrollRef.current?.scrollTo(0, 0)
  }
  return (
    <>
      <RootLayout>
        <Sidebar className="p-2 border-t-slate-300">
          <ActionButtonContainer className="flex justify-between mt-1" />
          <NotesPreviewList className="mt-3 space-y-1 " onSelect={resetScroll} />
        </Sidebar>
        <Content ref={scrollRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
