import { Outlet } from 'react-router-dom';
import Header from './Components/Header/header';

const AppLayout = () => {
    return (
     <>
     <Header/>
     <Outlet/>
     </>
    );
}

export default AppLayout;
