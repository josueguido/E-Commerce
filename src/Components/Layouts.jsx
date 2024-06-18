import Header from './Header'
import Principal from './Principal'
import Footer from './Footer'
import { Cart } from './Cart';


function Layout() {
    return (
        <>
            <Header />
            <Cart/>
            <Principal />
            <Footer />
        </>
    );
}

export default Layout;