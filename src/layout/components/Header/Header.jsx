import logo from '@logo/logo-shop-acc-nickmt-mua-he.png';
import styles from './styles.module.scss';
import { dataMenu, dataSubMenu } from './constants.js';
import { CiUser } from 'react-icons/ci';
import { MdKeyboardArrowDown } from 'react-icons/md';
import SubMenu from './SubMenu/SubMenu.jsx';

function Header() {
    const { Menu } = styles;
    return (
        <div className='container'>
            <div className='row p-3'>
                <div className='col-4'>
                    <img src={logo} alt='logo' width={280} />
                </div>
                <div className='col-6'>
                    <ul className={Menu}>
                        {dataMenu.slice(0, 4).map((item, index) => {
                            return (
                                <li key={item.content}>
                                    <a href={item.href}>
                                        {item.content}
                                        {index === 1 && (
                                            <MdKeyboardArrowDown
                                                style={{ fontSize: '20px' }}
                                            />
                                        )}
                                    </a>
                                    {(index == 1 && (
                                        <SubMenu dataSubMenu={dataSubMenu} />
                                    )) ||
                                        (index == 3 && (
                                            <SubMenu
                                                dataSubMenu={dataSubMenu}
                                                isContent={false}
                                            />
                                        ))}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='col-2'>
                    <ul className={Menu}>
                        {dataMenu.slice(5, dataMenu.length).map(item => {
                            return (
                                <li key={item.content}>
                                    <a href={item.href}>
                                        <CiUser style={{ fontSize: '30px' }} />
                                        {item.content}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
