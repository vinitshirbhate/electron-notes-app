import { Content, RootLayout, Sidebar, ActionButtonContainer, NotesPreviewList } from './components'

const App = () => {
  return (
    <>
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonContainer className="flex justify-between mt-1" />
          <NotesPreviewList className="mt-3 space-y-1 " />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
