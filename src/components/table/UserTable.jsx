import userData from '../../services/userData.json';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper, styled,
    tableCellClasses,
} from '@mui/material';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#3d6dc7",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    overflow: "auto",
}));


const UserTable = () => {
    return (
        <StyledTableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>E-mail</StyledTableCell>
                        <StyledTableCell>País</StyledTableCell>
                        <StyledTableCell>Telefone</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        userData.map(row => (
                            <StyledTableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.country}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
}

export default UserTable;