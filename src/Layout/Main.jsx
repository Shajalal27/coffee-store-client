import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Main = () => {
    return (
        <div>
            <Outlet>
                <Header></Header>
            </Outlet>
        </div>
    );
};

export default Main;