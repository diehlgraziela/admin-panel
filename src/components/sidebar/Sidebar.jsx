import { Link } from "react-router-dom";

import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <p>Menu</p>
                <Link to="/" className="link">
                    <li>Dashboard</li>
                </Link>

                <p>Listas</p>
                <Link to="/listas/usuarios" className="link">
                    <li>Usuários</li>
                </Link>
                <Link to="/listas/pedidos" className="link">
                    <li>Pedidos</li>
                </Link>
                <Link to="/listas/produtos" className="link">
                    <li>Produtos</li>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;