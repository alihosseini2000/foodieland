import Recipes from "./components/recipes/Recipes";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Navbar from "./layout/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-16">
        <Header />
        <Recipes />
        <Footer />
      </div>
    </>
  );
}

export default App;
