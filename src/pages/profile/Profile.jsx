//components
import Container from '../../components/container/Container';
import PageContainer from '../../components/container/PageContainer';
import Content from '../../components/container/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import './profile.scss';

const Profile = () => {
    return (
        <Container>
            <Sidebar />

            <PageContainer>

                <Navbar />

                <Content>
                    <h1>Meu perfil</h1>
                </Content>

            </PageContainer>
        </Container>
    );
}

export default Profile;