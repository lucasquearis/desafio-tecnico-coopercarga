import { ProductsPage } from "./pages/Products";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.scss";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

function App() {
  return (
    <>
      <Header />
      <ProductsPage />
      <Footer />
    </>
  );
}

export default App;
