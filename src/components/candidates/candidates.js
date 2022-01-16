import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setId } from '../../redux/actions'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useNavigate, Link } from 'react-router-dom';
import CandidateDetails from '../candidateDetails/candidateDetails'
// import { useRoute } from '@react-navigation/native';

function mapStateToProps(state) {
    return { candidates: state.userReducer.candidates };
}
const mapDispatchToProps = (dispach) => ({
})

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(function Candidates(props) {
    const { candidates } = props;
    let navigate = useNavigate()
    const classes = useStyles();
    const showDetails = (i) => {
        navigate(`/candidateDetails/${i}`)
    }
    return (
        <>
            {/* <h1>Candidates List:</h1> */}
           <TableContainer style={{ width: '80%', marginLeft: '10%', marginTop: '5%' }} component={Paper}>
           {candidates &&   <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Full Name</TableCell>
                            <TableCell align="left">Job Title</TableCell>
                            <TableCell align="left">Avatar</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {candidates.map((row, i) => (
                            <TableRow key={row.id}>
                                {/* <TableCell component="th" scope="row">
                                {row.first_name && row.last_name}
                            </TableCell> */}
                                <TableCell align="left">{row.first_name + ' ' + row.last_name}</TableCell>
                                <TableCell align="left">{row.job_title}</TableCell>
                                <TableCell align="left"><a href={row.avatar}>{row.avatar}</a></TableCell>
                                <TableCell align="left"><Button variant="contained" color="primary" onClick={() => { showDetails(i) }}>more</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>}
            </TableContainer>
        </>
    );
})
