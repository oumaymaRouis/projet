import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./main-pages/firstPage";
import SecondPage from "./main-pages/secondPage";
import ThirdPage from "./main-pages/thirdPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPage from "./main-pages/adminPage";
import { ProductsProvider } from "./contexts/ProductsContext";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./components/wishlist";
function App() {
  return (
    <ProductsProvider>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/adminPage" element={<AdminPage />} />
          <Route path="/" element={<FirstPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path="/thirdpage" element={<ThirdPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}

export default App;
