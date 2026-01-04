import Experience from '../Experience'
import Tech from '../Tech'
import Projects from '../Projects'
import Navbar from '../Navbar'
import Header from '../Header'
import Contact from '../Contact'
import Footer from '../Footer'

const Main = () => {
  return (
    <>
      <Header />
      <div className='w-full max-w-4xl mx-auto bg-semilight p-4 sm:p-6 md:p-8 lg:p-10 mt-20 pt-10'>
        <div id="hero" style={{ scrollMarginTop: '88px' }}>
          <Navbar />
        </div>
        <div id="about" style={{ scrollMarginTop: '88px' }}></div>
        <div id="experience" style={{ scrollMarginTop: '88px' }}>
          <Experience />
        </div>
        <div id="skills" style={{ scrollMarginTop: '88px' }}>
          <Tech />
        </div>
        <div id="projects" style={{ scrollMarginTop: '88px' }}>
          <Projects />
        </div>
        <div id="contact" style={{ scrollMarginTop: '88px' }}>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Main
