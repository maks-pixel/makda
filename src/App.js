import React, { useState } from "react";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";


function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <About />
        ;
    }
  };

  return (
    <div className="home-page">
      <Header  handlePageChange={handlePageChange} />
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
