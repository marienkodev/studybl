import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Alcohols from "../components/Alcohols";
import Alcohol from "../components/Alcohol";
import AlcoholLists  from "../components/AlcoholLists";
import Menu from "../components/Menu";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';

import "./App.css";

const router = createBrowserRouter( createRoutesFromElements(
  
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }>
    <Route path="about" element={ <About/>}/>
    <Route path="sign-up" element={ <SignUp/>}/>
    <Route path="articles" element={ <Articles/>}/>
    <Route path="articles/:title" element={ <Article/> }/>
    <Route path="categories" element={ <Categories/>}>
      <Route path=":name" element={ <Category/> }/>
    </Route>
    <Route path="alcohol" element={<Alcohols />}>
          <Route index element={<AlcoholLists />} />
          <Route path=":slug" element={<Alcohol />} />
    </Route>
    <Route path="menu" element={ <Menu/>}/>
    <Route path="profile" element={ <Profile/>}>
      <Route path="edit" element={ <EditProfileForm/> }/>
    </Route>
    <Route path="/" element={<Navigate replace to="about" />} />
  </Route>
  
))
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
