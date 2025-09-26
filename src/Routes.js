import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasePage from "./Pages/BasePage";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Gallery from "./Pages/Gallery";
import APOD from "./Pages/APOD";
import Articles from "./Pages/Articles";
import ScrollToTop from "./Components/ScrollToTop";

function AppRoutes(){
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={ <BasePage/> }>
                    <Route index="/home" element={ <Home/> }/>
                    <Route path="/gallery" element={ <Gallery/> }/>
                    <Route path="/apod" element={ <APOD/> }/>
                    <Route path="/articles" element={ <Articles/> }/>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes