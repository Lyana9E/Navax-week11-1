import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import React from "react";


interface Props{
    children:React.ReactNode;
}

function Layout({children}:Props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;