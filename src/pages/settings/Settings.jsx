import Container from '../../components/container/Container';
import PageContainer from '../../components/container/PageContainer';
import Content from '../../components/container/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import './settings.scss';

const Settings = () => {
    return (
        <Container>
            <Sidebar />

            <PageContainer>
                <Navbar />

                <Content class="settings-content">
                    <h1>Configurações</h1>
                </Content>
            </PageContainer>
        </Container>
    )
}

export default Settings;