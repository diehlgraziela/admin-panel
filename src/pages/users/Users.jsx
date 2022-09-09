//components
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import './users.scss';

const Users = () => {
    return (
        <div className="users">
            <Sidebar />

            <div className="usersContainer">
                <Navbar />
                <h1>Usuários</h1>
            </div>
        </div>
    );
}

export default Users;