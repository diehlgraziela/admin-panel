import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';

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

            <Route path="usuario">
              <Route path="perfil" index element={<Profile />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="login" element={<Login />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
