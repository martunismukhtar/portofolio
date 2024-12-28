import DeskripsiDiri from './Components/Fragments/DeskripsiDiri'
import Pengalaman from './Components/Fragments/Pengalaman'
import Skills from './Components/Fragments/Skills'
import Layout from './Layouts/Index'

function App() {
  
  return (
      <Layout >
        <DeskripsiDiri />
        <Pengalaman />
        <Skills />        
      </Layout>
  )
}

export default App
