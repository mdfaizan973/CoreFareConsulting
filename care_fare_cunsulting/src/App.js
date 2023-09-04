import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Navbar";
import Footer from "./Components/Footer";
import Middle from "./Components/Middle";

function App() {
  return (
    <div className="App">
      <Navbars />
      {/* <Middle /> */}
      <Footer />
    </div>
  );
}

export default App;
