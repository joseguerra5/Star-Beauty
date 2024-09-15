
import './global.css'
import styles from "./App.module.css"

import {Header} from './components/Header.jsx'
import {Hero} from './components/Hero.jsx'
import {AboutUs} from './components/AboutUs.jsx'
import {Service} from './components/Service.jsx'
import {Pricing} from './components/Pricing.jsx'
import {Table} from './components/Table.jsx'
import {Footer} from './components/Footer.jsx'

function App() {

  return (
    <div >
      <Header />

      <div>
        <Hero />
        <AboutUs />
        <Service/>
        <Pricing/>
        <Table/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
