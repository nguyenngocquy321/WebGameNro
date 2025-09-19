import styles from '../styles.module.scss';
import { FaCalendar } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
function ItemBlogs({ imgSrc, titleBlogs, descBlogs, ...props }) {
    const { containerBlogs, boxImg, title, desc, boxText, boxContent } = styles;
    return (
        <>
            <div className={containerBlogs}>
                <div className={boxImg}>
                    <img src={imgSrc} alt='Name' />
                </div>
                <div className={boxContent}>
                    <div className={title}>{titleBlogs}</div>
                    <div className={boxText}>
                        <span>
                            <FaCalendar
                                style={{
                                    fontSize: '14px',
                                    marginRight: '4px',
                                    color: '#ff324d'
                                }}
                            />
                            10 Tháng Trước
                        </span>
                        <span>
                            <CiUser
                                style={{
                                    fontSize: '18px',
                                    marginRight: '4px',
                                    color: '#ff324d'
                                }}
                            />
                            Admin
                        </span>
                    </div>
                    <div className={desc}>{descBlogs}</div>
                </div>
            </div>
        </>
    );
}

export default ItemBlogs;
