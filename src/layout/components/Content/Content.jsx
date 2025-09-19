// import Item from '@components/Item/Item';
import styles from './styles.module.scss';
// import Button from '@components/Button/Button';
import { FaStar } from 'react-icons/fa';
import Images from '@ImageSlide/ImageSlide.js';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ItemCommon from '../ItemCommon/ItemCommon';
function Content() {
    const { title, containerContent, line, containerHeader, content } = styles;
    return (
        <div className='mt-5 mb-5'>
            <div className={containerContent}>
                <div>
                    <div className={containerHeader}>
                        <h1 className={title}>NICK GAME GIÁ RẺ</h1>
                        <div className={line}></div>
                    </div>
                    <div className={content}>
                        <Row>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    href={'/pack-nick-ngoc-rong-vip'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    href={'/pack-nick-so-sinh-ngon'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    href={'/pack-ban-do-ngoc-rong'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    href={'/pack-ban-bo-1-sao'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    href={
                                        '/pack-ban-nick-lien-quan-lienquangiare'
                                    }
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className={containerHeader}>
                        <h1 className={title}>DỊCH VỤ NGỌC RỒNG</h1>
                        <div className={line}></div>
                    </div>
                    <div className={content}>
                        <Row>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    iconContent={<FaStar />}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    iconContent={<FaStar />}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className={containerHeader}>
                        <h1 className={title}>RANDOM CỰC HOT</h1>
                        <div className={line}></div>
                    </div>
                    <div className={content}>
                        <Row>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    iconContent={<FaStar />}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    iconContent={<FaStar />}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    iconContent={<FaStar />}
                                />
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-3'>
                                <ItemCommon
                                    imgSrc={Images[0].src}
                                    titleContent='BÁN NICK NGỌC RỒNG'
                                    descContent={'Đã Bán: 91,004'}
                                    iconContent={<FaStar />}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
