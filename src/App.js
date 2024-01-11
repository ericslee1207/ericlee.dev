import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css"; // Assuming your CSS is in App.css

function App() {
  return (
    <div className="page-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
