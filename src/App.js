import "./App.css";
import React from "react";
import { Header, Home, Footer } from "./Components/Components";
function App() {
  return (
    <div id="App" className="bg-dark">
      <Header />
      <div style={styles.home}>
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;

const styles = {
  home: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
