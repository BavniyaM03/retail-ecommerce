import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import LoginSignupForm from "../features/login-signup/LoginSignupForm"


export const Layout = () =>{
    return (
        <>
        <Header/>
        <LoginSignupForm/>
        <Outlet/>
        <Footer/>
        </>
    )
}