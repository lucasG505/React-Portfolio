import styles from './App.module.css'
import { Intro } from './components/Intro/Intro'
import { Navbar } from './components/Navbar/Navbar'
import {About} from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
