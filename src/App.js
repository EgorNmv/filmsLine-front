import React from "react";
import Header from "./components/Header/Header";
import Routes from "./routes/routes";
import AuthHandler from "./components/AuthHandler/AuthHandler";
// import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <AuthHandler>
                <Routes/>
            </AuthHandler>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
