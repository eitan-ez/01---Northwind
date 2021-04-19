import { BrowserRouter } from "react-router-dom";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element { // JSX.Element = The component UI
    return (
        <BrowserRouter> {/* BrowserRouter - Wrapper over all routes components */}
            <div className="Layout">

                <header>
                    <Header />
                </header>

                <aside>
                    <Menu />
                </aside>

                <main>
                    <Routing />
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </BrowserRouter>
    );
}

export default Layout;