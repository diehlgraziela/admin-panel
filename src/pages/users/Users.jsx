//components
import Container from '../../components/container/Container';
import PageContainer from '../../components/container/PageContainer';
import Content from '../../components/container/Content';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import UserTable from '../../components/table/UserTable';
import Button from '../../components/button/Button';

import './users.scss';

const Users = () => {
    return (
        <Container className="users">
            <Sidebar />

            <PageContainer>
                <Navbar />

                <Content>
                    <h1>Usuários</h1>

                    <Button buttonText="Adicionar Usuários" />
                    <UserTable />

                </Content>
            </PageContainer>
        </Container >
    );
}

export default Users;