import { Row, Col, Card, Button } from 'react-bootstrap';
import Images from '@ImageSlide/ImageSlide.js';
import styles from '../styles.module.scss';
function Item() {
    const {
        boxCard,
        boxImg,
        boxBtn,
        hoverBtnBuy,
        hoverBtnTraGop,
        boxChiTiet,
        serrial
    } = styles;
    return (
        <>
            <Row className='mt-5'>
                <Col sm={6} md={4} lg={3}>
                    <Card className={boxCard}>
                        <div className={boxImg}>
                            <Card.Img variant='top' src={Images[0].src} />
                            <div className={boxBtn}>
                                <Button
                                    variant='danger'
                                    className={hoverBtnBuy}
                                >
                                    Mua ngay
                                </Button>
                                <Button className={hoverBtnTraGop}>
                                    Trả góp ngay
                                </Button>
                            </div>
                        </div>
                        <Card.Body
                            className='p-0'
                            style={{ position: 'relative' }}
                        >
                            <Card.Text as={'div'} className='pb-3 pt-2'>
                                <div className='d-flex justify-content-between pe-2 ps-2'>
                                    <span>
                                        Hành tinh: <strong>Namec</strong>
                                    </span>
                                    <span>
                                        Server: <strong>5 sao</strong>
                                    </span>
                                </div>
                                <div className='text-center'>
                                    Đăng ký: <strong>Ảo</strong>
                                </div>
                                <div className='text-success fw-bold text-center'>
                                    ATM 1,043,479 <sup>đ</sup>
                                </div>
                                <div className='text-danger fw-bold text-center'>
                                    ATM 1,200,000 <sup>đ</sup>
                                </div>
                            </Card.Text>
                            <div className={boxChiTiet}>
                                <Button variant='danger' href='/checkout'>
                                    Chi tiết
                                </Button>
                            </div>
                        </Card.Body>
                        <div className={serrial}>Acc #31850</div>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <Card className={boxCard}>
                        <div className={boxImg}>
                            <Card.Img variant='top' src={Images[0].src} />
                            <div className={boxBtn}>
                                <Button
                                    variant='danger'
                                    className={hoverBtnBuy}
                                >
                                    Mua ngay
                                </Button>
                                <Button className={hoverBtnTraGop}>
                                    Trả góp ngay
                                </Button>
                            </div>
                        </div>
                        <Card.Body
                            className='p-0'
                            style={{ position: 'relative' }}
                        >
                            <Card.Text as={'div'} className='pb-3 pt-2'>
                                <div className='d-flex justify-content-between pe-2 ps-2'>
                                    <span>
                                        Hành tinh: <strong>Namec</strong>
                                    </span>
                                    <span>
                                        Server: <strong>5 sao</strong>
                                    </span>
                                </div>
                                <div className='text-center'>
                                    Đăng ký: <strong>Ảo</strong>
                                </div>
                                <div className='text-success fw-bold text-center'>
                                    ATM 1,043,479 <sup>đ</sup>
                                </div>
                                <div className='text-danger fw-bold text-center'>
                                    ATM 1,200,000 <sup>đ</sup>
                                </div>
                            </Card.Text>
                            <div className={boxChiTiet}>
                                <Button variant='danger' href='/checkout'>
                                    Chi tiết
                                </Button>
                            </div>
                        </Card.Body>
                        <div className={serrial}>Acc #31850</div>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <Card className={boxCard}>
                        <div className={boxImg}>
                            <Card.Img variant='top' src={Images[0].src} />
                            <div className={boxBtn}>
                                <Button
                                    variant='danger'
                                    className={hoverBtnBuy}
                                >
                                    Mua ngay
                                </Button>
                                <Button className={hoverBtnTraGop}>
                                    Trả góp ngay
                                </Button>
                            </div>
                        </div>
                        <Card.Body
                            className='p-0'
                            style={{ position: 'relative' }}
                        >
                            <Card.Text as={'div'} className='pb-3 pt-2'>
                                <div className='d-flex justify-content-between pe-2 ps-2'>
                                    <span>
                                        Hành tinh: <strong>Namec</strong>
                                    </span>
                                    <span>
                                        Server: <strong>5 sao</strong>
                                    </span>
                                </div>
                                <div className='text-center'>
                                    Đăng ký: <strong>Ảo</strong>
                                </div>
                                <div className='text-success fw-bold text-center'>
                                    ATM 1,043,479 <sup>đ</sup>
                                </div>
                                <div className='text-danger fw-bold text-center'>
                                    ATM 1,200,000 <sup>đ</sup>
                                </div>
                            </Card.Text>
                            <div className={boxChiTiet}>
                                <Button variant='danger' href='/checkout'>
                                    Chi tiết
                                </Button>
                            </div>
                        </Card.Body>
                        <div className={serrial}>Acc #31850</div>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <Card className={boxCard}>
                        <div className={boxImg}>
                            <Card.Img variant='top' src={Images[0].src} />
                            <div className={boxBtn}>
                                <Button
                                    variant='danger'
                                    className={hoverBtnBuy}
                                >
                                    Mua ngay
                                </Button>
                                <Button className={hoverBtnTraGop}>
                                    Trả góp ngay
                                </Button>
                            </div>
                        </div>
                        <Card.Body
                            className='p-0'
                            style={{ position: 'relative' }}
                        >
                            <Card.Text as={'div'} className='pb-3 pt-2'>
                                <div className='d-flex justify-content-between pe-2 ps-2'>
                                    <span>
                                        Hành tinh: <strong>Namec</strong>
                                    </span>
                                    <span>
                                        Server: <strong>5 sao</strong>
                                    </span>
                                </div>
                                <div className='text-center'>
                                    Đăng ký: <strong>Ảo</strong>
                                </div>
                                <div className='text-success fw-bold text-center'>
                                    ATM 1,043,479 <sup>đ</sup>
                                </div>
                                <div className='text-danger fw-bold text-center'>
                                    ATM 1,200,000 <sup>đ</sup>
                                </div>
                            </Card.Text>
                            <div className={boxChiTiet}>
                                <Button variant='danger' href='/checkout'>
                                    Chi tiết
                                </Button>
                            </div>
                        </Card.Body>
                        <div className={serrial}>Acc #31850</div>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <Card className={boxCard}>
                        <div className={boxImg}>
                            <Card.Img variant='top' src={Images[0].src} />
                            <div className={boxBtn}>
                                <Button
                                    variant='danger'
                                    className={hoverBtnBuy}
                                >
                                    Mua ngay
                                </Button>
                                <Button className={hoverBtnTraGop}>
                                    Trả góp ngay
                                </Button>
                            </div>
                        </div>
                        <Card.Body
                            className='p-0'
                            style={{ position: 'relative' }}
                        >
                            <Card.Text as={'div'} className='pb-3 pt-2'>
                                <div className='d-flex justify-content-between pe-2 ps-2'>
                                    <span>
                                        Hành tinh: <strong>Namec</strong>
                                    </span>
                                    <span>
                                        Server: <strong>5 sao</strong>
                                    </span>
                                </div>
                                <div className='text-center'>
                                    Đăng ký: <strong>Ảo</strong>
                                </div>
                                <div className='text-success fw-bold text-center'>
                                    ATM 1,043,479 <sup>đ</sup>
                                </div>
                                <div className='text-danger fw-bold text-center'>
                                    ATM 1,200,000 <sup>đ</sup>
                                </div>
                            </Card.Text>
                            <div className={boxChiTiet}>
                                <Button variant='danger' href='/checkout'>
                                    Chi tiết
                                </Button>
                            </div>
                        </Card.Body>
                        <div className={serrial}>Acc #31850</div>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Item;
