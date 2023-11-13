import { Outlet } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';

const AppLayout = () => {
    return (
     <>
     <Header/>
     <Outlet/>
     <Footer/>
     </>
    );
}

export default AppLayout;
