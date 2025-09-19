import BottomFooter from '@components/BottomFooter/BottomFooter';
import { dataInfo } from './constants';
import styles from './styles.module.scss';
function Footer() {
    const { listInfo, desc } = styles;
    return (
        <>
            <div className='bg-dark text-white'>
                <div className='container p-3'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-3 col-md-2 col-1'>
                            <h4>
                                NICKMT.COM - SHOP NICK NGỌC RỒNG CHÍNH THỨC CỦA
                                MT GAMING
                            </h4>
                        </div>
                        <div className='col-lg-3 col-md-2 col-1'>
                            <h4>THÔNG TIN CHUNG</h4>
                            <ul className={listInfo}>
                                {dataInfo.slice(0, 5).map((it, index) => {
                                    return (
                                        <li key={index}>
                                            <a href='#'>{it.content}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-2 col-1'>
                            <h4>THÔNG TIN CHUNG</h4>
                            <div className={desc}>
                                Với Nhiều Năm Kinh Nghiệm Mua Bán Nick Ngọc
                                Rồng, Và Được Nhiều Anh Em Ủng Hộ. Chúng Tôi Làm
                                Việc Một Cách Chuyên Nghiệp, Uy Tín Luôn Đặt
                                Quyền Lợi Của Khách Hàng Lên Hàng Đầu
                            </div>
                            <ul className={listInfo}>
                                {dataInfo
                                    .slice(5, dataInfo.length - 1)
                                    .map((it, index) => {
                                        return (
                                            <li key={index}>
                                                <a href='#'>{it.content}</a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
