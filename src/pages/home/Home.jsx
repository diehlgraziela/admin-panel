//components
import Container from '../../components/container/Container';
import PageContainer from '../../components/container/PageContainer';
import Content from '../../components/container/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import ProgressBar from '../../components/chart/ProgressBar';
import HomeAreaChart from '../../components/chart/HomeAreaChart';

import './home.scss';

const Home = () => {
    return (
        <Container>
            <Sidebar />

            <PageContainer>
                <Navbar />

                <Content>
                    <div className="cards">
                        <Card title="Visitantes diários" number="5" percentage="🡡 +2%" percentage_color="green" img={require('../../images/users.png')} />
                        <Card title="Pedidos" number="20" percentage="🡣 -4%" img={require('../../images/cart.png')} />
                        <Card title="Em Estoque" number="50" percentage="🡡 +8%" percentage_color="green" img={require('../../images/stock.png')} />
                        <Card title="Ganhos" number="R$349,50" percentage="🡣 -4%" img={require('../../images/coin.png')} />
                    </div>

                    <div className="charts">
                        <ProgressBar />
                        <HomeAreaChart />
                    </div>

                </Content>
            </PageContainer>
        </Container>
    );
}

export default Home;