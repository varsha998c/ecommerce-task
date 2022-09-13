import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/screens/HomePage";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./components/router/MainRouter";


function App() {
    return (
        <>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
