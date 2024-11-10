// ProblemList.js
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';

function ProblemList({ problems }) {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: '20px auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Title</strong></TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right"><strong>Actions</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {problems.map((problem, index) => (
                        <TableRow key={index} hover>
                            <TableCell>
                                <IconButton>
                                    <StarIcon color="primary" />
                                </IconButton>
                                {problem.title}
                            </TableCell>
                            <TableCell>{problem.description}</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    {/* add 3 dot functionality here*/}
                                    ...
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProblemList;
