import Footer from "components/Footer";
import Hero from "components/Hero";
import Main from "components/Main";

function App() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
