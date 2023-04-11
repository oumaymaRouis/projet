import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./main-pages/firstPage";
import SecondPage from "./main-pages/secondPage";
import ThirdPage from "./main-pages/thirdPage";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path="/thirdpage" element={<ThirdPage />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}

export default App;
