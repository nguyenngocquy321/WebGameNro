import { useState } from 'react';
import styles from '../styles.module.scss';
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp
} from 'react-icons/md';
function CardText() {
    const { title, desc } = styles;
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <>
            <div
                className='card'
                style={{
                    backgroundColor: '#ebf5ff'
                }}
            >
                <div
                    className='p-3'
                    style={
                        isCollapsed
                            ? { height: '150px', overflow: 'hidden' }
                            : { height: 'auto' }
                    }
                >
                    <strong>Thông tin</strong>
                    <div className={desc}>
                        Ngọc rồng online là tựa game gắn liền với tuổi thơ của
                        nhiều game thủ Việt. Sở hữu lượng người chơi đông đảo
                        nên có rất nhiều người chơi có nhu cầu mua bán acc ngọc
                        rồng. Ngoài ra nhu cầu mua vàng ngọc rồng, ngọc xanh
                        thời gian gần đây tại nickmt.com cũng là dịch vụ hot
                        được nhiều game thủ quan tâm.
                    </div>
                    <div>
                        <h4 className={title}>
                            Nickmt.com Cung Cấp Những Dịch Vụ Gì ?
                        </h4>
                        <p className={desc}>
                            Nếu các bạn trải nghiệm ngọc rồng đủ lâu chắc chắn
                            sẽ biết được quá trình nâng cấp tài khoản từ sơ sinh
                            đến 80 tỷ sức mạnh không hề đơn giản. Nắm bắt được
                            nhu cầu của game thủ nickmt.com cung cấp hầu hết các
                            dịch vụ hot nhất hiện nay của game ngọc rồng online.
                        </p>
                    </div>
                    <div>
                        <h4 className={title}>
                            Dịch Vụ Bán Acc Ngọc Rồng Tự Động - Giá Rẻ
                        </h4>
                        <p className={desc}>
                            Nickmt.com là shop ngọc rồng lớn nhất Việt Nam được
                            điều hành bởi youtuber MT Gaming. Nickmt.com mang
                            đến cho các bạn tài khoản game đa dạng về class nhân
                            vật như xayda, namếk, trái đất kết hợp với nhiều thể
                            loại acc khác nhau như : Nick ngọc rồng sơ sinh đệ
                            tử vip, nick ngọc rồng giá rẻ, nick ngọc rồng có
                            bông tai, nick ngọc rồng 50 tỷ sức mạnh, nick ngọc
                            rồng Full cải trang…Đến với shop các bạn không chỉ
                            đơn thuần mua acc để chơi mà còn có thể trải nghiệm
                            cảm giác mới lạ qua nick có pet sự kiện hiếm, nick
                            có trang bị set kích hoạt, đồ thần linh, đồ thiên
                            sứ, đồ 8 sao…với mức giá cực ưu đãi. Không chỉ cung
                            cấp acc ngọc rồng ngon - giá rẻ, acc nro do shop bán
                            ra 100% đăng ký ảo có hệ thống kiểm tra tài khoản,
                            mật khẩu tự động nên quý khách không lo acc bị sai
                            mật khẩu trong quá trình mua. Nickmt.com luôn đặt uy
                            tín lên hàng đầu, tất cả nick nro bán tại shop đều
                            được kiểm tra đảm bảo chất lượng trước khi giao đến
                            tay khách hàng đảm bảo phục vụ người chơi sẵn sàng
                            tham gia vào một thế giới game mobile đầy mê hoặc,
                            huyền bí. Ngoài ra, shop nickmt.com cung cấp các
                            dịch vụ hot liên quan đến game nro như : Bán vàng
                            ngọc rồng, bán ngọc xanh (hồng ngọc), bán đồ ngọc
                            rồng,làm nhiệm vụ thuê uy tín…Tất cả dịch vụ bán vật
                            phẩm, cày thuê đều tự động 100% và có nhân viên hỗ
                            trợ quý khách tư vấn gói dịch vụ tối ưu, giá cả hợp
                            lý.
                        </p>
                    </div>
                    <div>
                        <h4 className={title}>
                            Tại Sao Nên Lựa Chọn Nickmt.com?
                        </h4>
                        <p className={desc}>
                            Nickmt.com là địa điểm được nhiều anh em game thủ
                            lựa chọn mua sắm mỗi khi có nhu cầu. Không chỉ có
                            nguồn acc đa dạng số lượng, giá cả chúng tôi còn có
                            thế mạnh khác như:
                        </p>
                        <ul>
                            <li>
                                <strong>Giá rẻ:</strong>
                                <p className={desc}>
                                    Không chỉ có nguồn nick ngọc rồng khủng,
                                    chúng tôi cam kết tất cả acc nro bán tại
                                    shop luôn có giá cả ưu đãi hơn thị trường 30
                                    - 50%. Chúng tôi nhập acc nro từ khách hàng
                                    nghỉ game sau đó bán lại cho khách hàng có
                                    nhu cầu mua acc ngọc rồng trực tiếp mà không
                                    qua bất kỳ khâu trung gian nào. Với nỗ lực
                                    không ngừng, chúng tôi luôn tìm mọi cách tối
                                    ưu nhằm phân phối đến khách hàng những sản
                                    phẩm ngọc rồng vip - rẻ nhất.
                                </p>
                            </li>
                            <li>
                                <strong>Đảm bảo an toàn:</strong>
                                <p className={desc}>
                                    Tất cả acc ngọc rồng tại shop đều là nick
                                    đăng ký ảo bảo hành vĩnh viễn cho người mua.
                                    Nếu phát hiện acc không đúng chất lượng shop
                                    cam kết chúng tôi xin chịu toàn bộ trách
                                    nhiệm và hoàn tiền quý khách 100% tại shop
                                    nickmt.com.
                                </p>
                            </li>
                            <li>
                                <strong>Tự động, nhanh chóng :</strong>
                                <p className={desc}>
                                    Shop hoạt động 24/7 và tất cả dịch vụ đều
                                    được thực hiện tự động 100%, ngoài ra
                                    nickmt.com còn đa dạng hình thức phù hợp với
                                    cả những bạn khách hàng nhỏ tuổi như thanh
                                    toán như card, atm, momo…
                                </p>
                            </li>
                            <li>
                                <strong>Uy tín và minh bạch :</strong>
                                <p className={desc}>
                                    Shop có đội ngũ nhân viên chăm sóc khách
                                    hàng có kinh nghiệm trong lĩnh ngọc rồng lâu
                                    năm. Thông tin liên hệ và chính sách bảo
                                    hành, mua bán acc tại shop đều công khai và
                                    minh bạch đảm bảo lợi ích cho người mua.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={title}>
                            Những Lưu Ý Khi Mua Acc Ngọc Rồng Tại Shop ?
                        </h4>
                        <ul>
                            <li>
                                Tuyệt đối không sử dụng các phiên bản hack mod
                                như cuibapvh, wapvip, huyme.. nếu không muốn bị
                                khoá acc hoặc mất acc
                            </li>
                            <li>
                                Không truy cập các trang web nhận vàng, ngọc
                                xanh miễn phí
                            </li>
                            <li>Không chia sẻ mật khẩu cho bất kỳ ai</li>
                            <li>
                                Đổi mật khẩu acc ngọc rồng ngay sau khi mua (Chỉ
                                đổi mật khẩu tại trang chủ : ngocrongonline.com)
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className='card-footer text-center text-primary'
                    style={{ cursor: 'pointer' }}
                >
                    <span onClick={() => setIsCollapsed(prev => !prev)}>
                        {isCollapsed === true ? (
                            <>
                                Xem thêm
                                <MdOutlineKeyboardArrowDown
                                    style={{ fontSize: '30px' }}
                                />
                            </>
                        ) : (
                            <>
                                Thu gọn
                                <MdOutlineKeyboardArrowUp
                                    style={{ fontSize: '30px' }}
                                />
                            </>
                        )}
                    </span>
                </div>
            </div>
        </>
    );
}

export default CardText;
