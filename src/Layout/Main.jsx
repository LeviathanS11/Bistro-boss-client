
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    //track path location.ami kon route a jacchi sei route er path name diye dibe.
    const location = useLocation();
    // console.log(location)

    //jodi login path a dhuki tobe 'true' hobe.eikhene check kore dekha hocche je location er path "login" kina.echara 'false' hobe.
    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signUp')
    // console.log(noHeaderFooter)
    return (
        //(noHeaderFooter er value jodi false hoy tobe <Navbar>,<Footer> dekhabe)
        <div>     
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter ||<Footer></Footer>}
        </div>
    );
};

export default Main;