import { Header } from "./Components/Header"

/** CSS */
import style from './App.module.css';
import { Todos } from "./Components/Todos";


function App() {


  return (
    <>
      <Header />
      <div className={style.wrapper}>
          <main>
              <Todos/>
          </main>
      </div>
    </>
  )
}

export default App
