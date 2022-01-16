import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/signin/signin'
import Signup from './components/signup/signup'
import Candidates from './components/candidates/candidates'
import CandidateDetails from './components/candidateDetails/candidateDetails'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/candidateDetails/:index' element={<CandidateDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
