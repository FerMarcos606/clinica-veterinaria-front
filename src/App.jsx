import React from 'react';
import Header from './components/header/Header';
import Button from './components/button/Button';
import Footer from "./components/footer/Footer";
import './App.css';


import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="App">
          <Header />
          <Button></Button>
          <Footer />

    </div>
  );
}

export default App;