import './App.css';
import Header from './Components/Header.jsx'
import Nav from './Components/Nav.jsx'
import Hero from './Components/Hero.jsx'
import Contact from './Components/Contact.jsx'
// import About from './Components/About.jsx'
import Logo from './Components/Logo.jsx'
import Footer from './Components/Footer.jsx'



function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Nav />
      <Hero />
      {/* <About /> */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
