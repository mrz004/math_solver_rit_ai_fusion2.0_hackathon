import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[90svh]">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
