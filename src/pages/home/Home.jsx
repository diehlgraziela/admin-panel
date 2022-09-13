//components
import Container from '../../components/container/Container';
import PageContainer from '../../components/container/PageContainer';
import Content from '../../components/container/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import HomeAreaChart from '../../components/chart/HomeAreaChart';

import './home.scss';

const Home = () => {
    return (
        <Container>
            <Sidebar />

            <PageContainer>
                <Navbar />

                <Content>
                    <HomeAreaChart />
                </Content>
            </PageContainer>
        </Container>
    );
}

export default Home;