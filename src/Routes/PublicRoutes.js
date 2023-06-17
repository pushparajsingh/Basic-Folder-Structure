import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import LoginForm from "../Components/Auth/LoginForm";
import Example from "../Pages"


const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Example" element={<Example/>}/>

      </Routes>
    </Layout>
  );
};

export default PublicRoutes;