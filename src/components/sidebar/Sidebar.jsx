import { Link } from "react-router-dom";

import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';

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
                    <GridViewIcon className="icon" />
                    <li>Dashboard</li>
                </Link>

                <p className="title">Listas</p>
                <Link to="/listas/usuarios" className="link">
                    <GroupIcon className="icon" />
                    <li>Usuários</li>
                </Link>
                <Link to="/listas/pedidos" className="link">
                    <PaymentIcon className="icon" />
                    <li>Pedidos</li>
                </Link>
                <Link to="/listas/produtos" className="link">
                    <InventoryIcon className="icon" />
                    <li>Produtos</li>
                </Link>

                <p className="title">Usuário</p>
                <Link to="/usuario/perfil" className="link">
                    <PersonIcon className="icon" />
                    <li>Meu Perfil</li>
                </Link>
                <Link to="/usuario/sair" className="link">
                    <LogoutIcon className="icon" />
                    <li>Sair</li>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;