import React from 'react';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Bio from './components/Bio';
    import Trajectory from './components/Trajectory';
    import Causes from './components/Causes';
    import Accountability from './components/Accountability';
    import Ombudsman from './components/Ombudsman';
    import Footer from './components/Footer';
    import WhatsAppBtn from './components/WhatsAppBtn';

    function App() {
      return (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Bio />
            <Trajectory />
            <Causes />
            <Accountability />
            <Ombudsman />
          </main>
          <Footer />
          <WhatsAppBtn />
        </div>
      );
    }

    export default App;
