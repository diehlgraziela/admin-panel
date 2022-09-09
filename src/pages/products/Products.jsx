//components
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import './products.scss';

const Products = () => {
    return (
        <div className="products">
            <Sidebar />

            <div className="productsContainer">
                <Navbar />
                <h1>Produtos</h1>
            </div>
        </div>
    );
}

export default Products;