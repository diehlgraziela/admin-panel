import { Link } from "react-router-dom";

import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <div className="wrapper">
                    Dashboard
                </div>
            </div>

            <ul>
                <p className="title">Menu</p>
                <Link to="/" className="link">
                    <li>Dashboard</li>
                </Link>

                <p className="title">Listas</p>
                <Link to="/listas/usuarios" className="link">
                    <li>Usuários</li>
                </Link>
                <Link to="/listas/pedidos" className="link">
                    <li>Pedidos</li>
                </Link>
                <Link to="/listas/produtos" className="link">
                    <li>Produtos</li>
                </Link>

                <p className="title">Usuário</p>
                <Link to="/usuario/perfil" className="link">
                    <li>Meu Perfil</li>
                </Link>
                <Link to="/usuario/sair" className="link">
                    <li>Sair</li>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;