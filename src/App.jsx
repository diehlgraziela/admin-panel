import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route index element={<Home />} />

            <Route path="listas">
              <Route path="usuarios" index element={<Users />} />
              <Route path="produtos" element={<Products />} />
              <Route path="pedidos" element={<Orders />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
