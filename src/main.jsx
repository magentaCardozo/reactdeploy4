import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route,Link,Outlet} from "react-router-dom";
import HomeScreen from './pages/HomeScreen'
import { RoutesList } from './data/Routes';
import ProductsPage from './pages/ProductsPage';
import App from './App';
import { StyledCategoryScreen } from './pages/categoryScreen.syle';
import { StyledDetailsPage } from './pages/detailsPage.style';
import DetailsPage from './pages/DetailsPage';
import Error from './pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { StyledInfoScreen } from './pages/infoScreen.style';
import Login from './pages/Login';
import Register from './pages/Register';
import ArticlesPage from './pages/ArticlesPage';
import AddArticle from './pages/AddArticle';
import EditArticle from './pages/EditArticle';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index element={<HomeScreen/>}></Route>
            <Route path={RoutesList.Products} element={<ProductsPage/>}></Route>
            <Route path={RoutesList.Login} element={<Login/>}></Route>
            <Route path={`${RoutesList.Categorie}:categorie`} element={<StyledCategoryScreen/>}></Route>
            <Route path={`${RoutesList.Details}:id`} element={<StyledDetailsPage/>}></Route>
            <Route path={`${RoutesList.Info}:information`} element={<StyledInfoScreen/>}></Route>
            <Route path={`${RoutesList.REGISTER}`} element={<AddArticle/>}></Route>
            <Route path={`${RoutesList.ARTICLESPAGE}`} element={<ArticlesPage/>}></Route>
            <Route path={`${RoutesList.EDITARTICLE}:id`} element={<EditArticle/>}></Route>
            <Route path="/error" element={<Error/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Route>
    )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
