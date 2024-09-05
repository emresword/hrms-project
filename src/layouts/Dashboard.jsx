import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CandidateList from '../pages/CandidateList';
import CandidateDetail from '../pages/CandidateDetail';
import CandidateAdd from '../forms/CandidateAdd';
import Login from '../pages/Login';
import CityAdd from '../forms/CityAdd';
import JobTitleAdd from '../forms/JobTitleAdd';
import SignUp from './SignUp';

export default function Dashboard() {
  return (
    <Routes>
      <Route exact path="/" element={<CandidateList />} />
      <Route exact path="/candidates" element={<CandidateList />} />
      <Route path="/candidate/:id" element={<CandidateDetail />} />
      <Route path="/candidate/add" element={<CandidateAdd/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/city/add" element={<CityAdd/>} />
      <Route path="/jobTitle/add" element={<JobTitleAdd/>} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}
