//components
import Container from '../../components/container/Container';
import PageContainer from '../../components/container/PageContainer';
import Content from '../../components/container/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import HomeAreaChart from '../../components/chart/HomeAreaChart';

import './home.scss';

const Home = () => {
    return (
        <Container>
            <Sidebar />

            <PageContainer>
                <Navbar />

                <Content class="home-content">
                    <div className="cards">
                        <Card title="Visitantes diários" number="5" percentage="🡡 +2%" percentage_color="green" />
                        <Card title="Pedidos" number="20" percentage="🡣 -4%" />
                        <Card title="Ganhos" number="R$349,50" percentage="🡣 -4%" />
                        <Card title="Em Estoque" number="50" percentage="🡡 +8%" percentage_color="green" />
                    </div>

                    <HomeAreaChart />
                </Content>
            </PageContainer>
        </Container>
    );
}

export default Home;