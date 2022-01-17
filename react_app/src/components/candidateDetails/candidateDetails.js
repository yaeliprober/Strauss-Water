import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signin } from '../../redux/actions'
import { Link ,useParams } from 'react-router-dom';
import './candidateDetails.css'
import { Checkbox } from '@material-ui/core';

function mapStateToProps(state) {
    return { candidates: state.userReducer.candidates };
}
const mapDispatchToProps = (dispach) => ({
    signin: (obj) => dispach(signin(obj)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function CandidateDetails(props) {
    const { candidates } = props;
    const {index}=useParams()
    const [candidate, setCandidate] = useState(candidates[Number(index)])
  
    return (
        <>
            <Link to='/candidates'>back to candidates</Link>
            <div className="card-list" >
                <div className="card" style={{ backgroundColor: '#ebebe0' }}>
                    <h1>Candidate's Details:</h1>
                    <h3 className='text'>first_name:</h3>
                    <p className='text'>{candidate.first_name}</p>
                    <h3 className='text'>last_name:</h3>
                    <p className='text'>{candidate.last_name}</p>
                    <h3 className='text'>email:</h3>
                    <p className='text'>{candidate.email}</p>
                    <h3 className='text'>gender:</h3>
                    <p className='text'>{candidate.gender}</p>
                    <h3 className='text'>job_title:</h3>
                    <p className='text'>{candidate.job_title}</p>
                    <h3 className='text'>job_description:</h3>
                    <p className='text'>{candidate.job_description}</p>
                    <h3 className='text'>avatar:</h3>
                    <a href={candidate.avatar} className='text'>{candidate.avatar}</a>
                </div>
            </div>
        </>
    );
})





