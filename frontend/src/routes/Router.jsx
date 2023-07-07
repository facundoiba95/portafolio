import { Routes as RoutesRouterDom, Route, BrowserRouter } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home/Home";
import NavbarHeader from "../components/organisms/NavbarHeader/NavbarHeader";
import Projects from "../pages/Projects/Projects";
import AllProjects from "../components/organisms/AllProjects/AllProjects";
import SectionProjectDetails from "../components/organisms/SectionProjectDetails/SectionProjectDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarHeader/>
      <RoutesRouterDom>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/allProjects" element={<Projects><AllProjects/></Projects>}/>
        <Route path="/projects/:idProject" element={<Projects><SectionProjectDetails/></Projects>}/>
      </RoutesRouterDom>
    </BrowserRouter>
  )
}

export default Router
