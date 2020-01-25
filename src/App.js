import React from "react";
import QuoteSearcher from "./components/QuoteSearcher";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <QuoteSearcher />
      <Footer />
    </div>
  );
}

export default App;
