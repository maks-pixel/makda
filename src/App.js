import React from "react";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";


function App() {

  return (
   <div>
     <Header></Header>
     <main>
     <About></About>
     <ContactForm></ContactForm>
     <Portfolio></Portfolio>
     </main>
     <Footer></Footer>
   </div>
  );
}

export default App;
