import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/home/Header";
import Footer from "../components/layout/home/Footer";

const Layout: FC = () => {
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}

export default Layout;