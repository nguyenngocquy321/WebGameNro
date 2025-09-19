import { useContext } from 'react';
import styles from './styles.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ModalContext } from '@contexts/ModalProvider';
function CardText() {
    const { title, desc, textCard, showModal } = styles;
    const { setShow } = useContext(ModalContext);
    const handleShow = () => {
        setShow(true);
    };
    return (
        <div className='mb-5'>
            <div className='card'>
                <div className='card-body p-0'>
                    <div className={title}>GIỚI THIỆU VỀ NICKMT.COM</div>
                    <div className={desc}>
                        Chào mừng các bạn đã đến với <strong>nickmt.com</strong>
                        . Shop bán tài khoản game chính thức của
                        <strong> MT Gaming</strong>. Xuyên suốt 6 năm hoạt động,
                        nickmt luôn là địa điểm mua bán trao đổi acc game ngọc
                        rồng uy tín, chất lượng được nhiều game thủ NRO tin
                        tưởng, ủng hộ. Ngọc rồng online là game nhập vai trực
                        tuyến với cốt truyện được xây dựng dựa trên bộ truyện
                        tranh nổi tiếng “Bảy viên ngọc rồng” từng gắn liền với
                        bao thế hệ độc giả Việt Nam. Tham gia chú bé rồng người
                        chơi sẽ được trải nghiệm nhân vật ở 3 tộc hành tinh như
                        : Trái đất, namếk, xayda. Game có rất nhiều bản đồ và
                        nhiệm vụ từ dễ đến khó và để chinh phục được các bạn cần
                        có sự hướng dẫn của các sư phụ cùng sự nỗ lực hết mình
                        của bản thân. Game hoạt động đa nền tảng các bạn có thể
                        tải NRO trên máy tính, iphone và cả android, java. Có
                        thể nói NRO là tựa game có lượng người chơi “khủng” nhất
                        teamobi với lợi thế thích hợp với mọi lứa tuổi. Các bạn
                        hoàn toàn có thể điều khiển trực tiếp nhân vật rất dễ
                        dàng trên màn hình cảm ứng.
                    </div>
                    <div className={textCard}>
                        Chi tiết về game nhập vai Ngọc Rồng Online
                    </div>
                    <div
                        onClick={handleShow}
                        className={showModal}
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalLg'
                    >
                        Xem thêm nội dung
                        <MdKeyboardArrowDown style={{ fontSize: '30px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardText;
