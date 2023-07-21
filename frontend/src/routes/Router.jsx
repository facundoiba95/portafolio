import { Routes as RoutesRouterDom, Route, BrowserRouter } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home/Home";
import NavbarHeader from "../components/organisms/NavbarHeader/NavbarHeader";
import Projects from "../pages/Projects/Projects";
import AllProjects from "../components/organisms/AllProjects/AllProjects";
import SectionProjectDetails from "../components/organisms/SectionProjectDetails/SectionProjectDetails";
import Footer from "../components/organisms/Footer/Footer";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import AdminView from "../pages/AdminView/AdminView";
import CardAddProject from "../components/molecules/CardAddProject/CardAddProject";
import CardAddCertificate from "../components/molecules/CardAddCertificate/CardAddCertificate";
import AboutMe from "../pages/AboutMe/AboutMe";
import HowCreatePortafolio from "../pages/HowCreatePortafolio/HowCreatePortafolio";

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarHeader/>
      <RoutesRouterDom>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin/addProject" element={<AdminView><CardAddProject/></AdminView>}/>
        <Route path="/admin/addCertificate" element={<AdminView><CardAddCertificate/></AdminView>}/>
        <Route path="/admin" element={<AdminView></AdminView>}/>
        <Route path="/projects/allProjects" element={<Projects><AllProjects/></Projects>}/>
        <Route path="/projects/:idProject" element={<Projects><SectionProjectDetails/></Projects>}/>
        <Route path="/howcreateportafolio" element={<HowCreatePortafolio/>}/>
      </RoutesRouterDom>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
