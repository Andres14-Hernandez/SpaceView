import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasePage from "./Pages/BasePage";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Videos from "./Pages/Videos";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BasePage/> }>
                    <Route index="/home" element={ <Home/> }/>
                    <Route path="/videos" element={ <Videos/> }/>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes