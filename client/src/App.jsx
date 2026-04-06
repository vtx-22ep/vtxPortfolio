import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section className="home">
          <div className="my-self">
            <h5>Hello, Everyone! This is</h5>
            <h1>Vignesh Thilagaraj</h1>
            <p>
              B.E CSE Student | On a Journey to Master Cybersecurity & Ethical Hacking | Linux Learner.
            </p>
          </div>
          <div className="my-img"></div>
        </section>
      </main>
    </>
  )
}

export default App
