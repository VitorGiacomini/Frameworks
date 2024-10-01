import { Aluno } from "./components/aluno"
import { Footer } from "./components/footer"
import { Header } from "./components/header"


export default function App() {

  return (
    <div>
      <Header/>
      <Aluno nome="Vitor Giacomini" idade={24}/>  
      <Aluno nome="Gabriel Inácio" idade={20}/>
     <Footer/>

    </div>
  )
}
