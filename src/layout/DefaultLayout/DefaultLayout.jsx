import Header from '@layout/components/Header/Header';
import BottomFooter from '@components/BottomFooter/BottomFooter';
import Footer from '@layout/components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import ToastModal from '@components/Modal/Modal';
import { useEffect, useState } from 'react';
import TableData from '@layout/components/TableData/TableData';
function DefaultLayout({ children }) {
    const path = useLocation();
    const [isTableCard, setIsTableCard] = useState(false);
    const isHomePage = path.pathname === '/' ? true : false;
    const pathCard = {
        napCard: '/nap-card',
        napATM: '/nap-atm',
        napMoMo: '/nap-momo'
    };
    useEffect(() => {
        const paths = Object.values(pathCard);
        setIsTableCard(paths.includes(path.pathname));
    }, [path.pathname]);

    return (
        <>
            <div>
                <Header />
                <div className='container'>{children}</div>
                {isHomePage && <Footer />}
                {isTableCard && (
                    <div className='container'>
                        <TableData />
                    </div>
                )}
                <BottomFooter />
            </div>
            <ToastModal />
        </>
    );
}

export default DefaultLayout;
