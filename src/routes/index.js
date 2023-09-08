import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/watch/:id" element={<Layout/>}/>
        <Route path="/list/add/:id" element={<Layout/>}/>
    </Routes>
  );
}

export default AppRoutes;