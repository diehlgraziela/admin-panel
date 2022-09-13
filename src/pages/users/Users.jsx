//components
import Container from '../../components/container/Container';
import PageContainer from '../../components/container/PageContainer';
import Content from '../../components/container/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import UserTable from '../../components/table/UserTable';

import './users.scss';

const Users = () => {
    return (
        <Container>
            <Sidebar />

            <PageContainer>
                <Navbar />

                <Content>
                    <h1>Usuários</h1>

                    <UserTable />

                </Content>
            </PageContainer>
        </Container >
    );
}

export default Users;