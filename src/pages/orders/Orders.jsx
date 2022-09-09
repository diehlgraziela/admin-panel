//components
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import './orders.scss';

const Orders = () => {
    return (
        <div className="orders">
            <Sidebar />

            <div className="ordersContainer">
                <Navbar />
                <h1>Pedidos</h1>
            </div>
        </div>
    );
}

export default Orders;