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
                    <div>
                        <h1 className='fw-bold'>
                            ✅ Quy Định Mua Bán Acc Liên Quân Tại Shop
                        </h1>
                        <p className={desc}>
                            Tại{' '}
                            <a
                                style={{
                                    color: '#3366ff',
                                    textDecoration: 'none'
                                }}
                                className='text-primary'
                            >
                                <strong>shop liên quân uy tín</strong>
                            </a>{' '}
                            nickmt.com của chúng tôi, mọi tài khoản game Liên
                            Quân được bán ra đều được kiểm tra kỹ thông tin và
                            đảm bảo trắng thông tin 100%, có thể đổi được mật
                            khẩu ngay sau khi giao dịch thành công. Đây là tiêu
                            chuẩn bắt buộc shop cam kết để đảm bảo quyền sở hữu
                            tuyệt đối cho người mua, đồng thời hạn chế tối đa
                            rủi ro liên quan đến tài khoản.
                        </p>
                        <p className={desc}>
                            Toàn bộ account trên shop đều có hình ảnh minh họa
                            rõ ràng, hiển thị đúng số lượng skin, tướng,
                            ngọc,... theo mô tả. Tuy nhiên, rank của nick có thể
                            thay đổi theo chu kỳ reset hạng của game vì vậy shop
                            không cam kết rank cố định và không hỗ trợ bảo kê
                            rank. Nếu bạn cần xem kỹ hơn về rank hiện tại hoặc
                            chi tiết acc, vui lòng inbox trực tiếp Zalo{' '}
                            <strong className='text-danger'>
                                0339.38.2222
                            </strong>{' '}
                            để được gửi ảnh thực tế và kiểm tra thông tin trước
                            khi mua hàng.
                        </p>
                    </div>
                    <div>
                        <h1 className='fw-bold'>
                            🔐 Hướng Dẫn Đổi Mật Khẩu Nick Liên Quân Sau Khi Mua
                        </h1>
                        <p className={desc}>
                            Sau khi hoàn tất mua acc tại nickmt.com, khách hàng
                            bắt buộc phải truy cập đường link đổi mật khẩu được
                            cung cấp để đảm bảo an toàn tài khoản <br />
                            <a
                                style={{
                                    color: '#3366ff',
                                    textDecoration: 'none'
                                }}
                                href='https://account.garena.com/'
                            >
                                <strong>TẠI ĐÂY</strong>
                            </a>
                            . Việc không đổi mật khẩu ngay sẽ khiến bạn mất
                            quyền được hỗ trợ, bảo hành, đặc biệt với{' '}
                            <a
                                style={{
                                    color: '#3366ff',
                                    textDecoration: 'none'
                                }}
                                href='/pack-ban-nick-lien-quan-lienquangiare'
                            >
                                <strong>acc Liên Quân trắng thông tin.</strong>
                            </a>
                        </p>
                    </div>
                    <div>
                        <h1 className='fw-bold'>
                            📖 Giải Thích Một Số Thuật Ngữ Về Trạng Thái Tài
                            Khoản
                        </h1>
                        <p>
                            Để tránh hiểu nhầm trong quá trình lựa chọn, khách
                            hàng vui lòng đọc kỹ các thuật ngữ sau, thường xuất
                            hiện trong phần mô tả chi tiết acc:
                        </p>
                        <ul>
                            <li>
                                TTT KLK (Trắng thông tin, không liên kết): Tài
                                khoản chưa liên kết với bất kỳ thông tin nào như
                                Facebook, Gmail, số điện thoại,...
                            </li>
                            <li>
                                TRẮNG RIP: Tài khoản từng liên kết Facebook,
                                nhưng hiện tại FB đã bị RIP (xóa). Nick chỉ có
                                thể đăng nhập bằng tài khoản Garena. Nếu trong
                                tương lai Facebook hoạt động lại và truy cập
                                được vào acc, shop cam kết hoàn lại 100% số tiền
                                đã mua.
                            </li>
                            <li>
                                TTT SĐT: Tài khoản trắng thông tin đang có liên
                                kết số điện thoại đổi được. Sau khi thanh toán,
                                khách hàng inbox Zalo 0339.38.2222 để được shop
                                hỗ trợ chuyển sđt về thông tin cá nhân của bạn.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={title}>
                            ⚠️ Lưu Ý Trước Khi Mua Nick Liên Quân Tại Shop
                        </h4>
                        <ul>
                            <li>
                                Tài khoản có mã số từ 11205 trở về trước là
                                những acc cũ thuộc rank mùa S4/2023 trở về
                                trước, không phải rank mùa mới. Anh em nên xem
                                kỹ mã số acc và cân nhắc rõ mục đích sử dụng
                                trước khi thanh toán.
                            </li>
                            <li>
                                Tất cả các acc mua trên shop đều không hỗ trợ
                                kích chủ thiết bị. Nếu acc có thiết bị đăng nhập
                                trước đó, khách hàng phải tự thao tác kích chủ,
                                shop không can thiệp phần này.
                            </li>
                            <li>
                                Shop chỉ cam kết đúng thông tin mô tả trên
                                website, bao gồm: loại acc, cấp độ, số lượng
                                skin, rank (nếu có mô tả), và trạng thái trắng
                                thông tin. Shop không chịu trách nhiệm nếu khách
                                không đọc kỹ mô tả mà tự mua nhầm.
                            </li>
                            <li>
                                Sau khi thanh toán thành công, việc đổi mật khẩu
                                là bắt buộc. Shop không bảo hành đối với các
                                trường hợp khách chưa đổi mật khẩu nhưng bị mất
                                tài khoản.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='fw-bold'>
                            🎯 Vì Sao Nên Mua Acc Liên Quân Tại Shop NickMT?
                        </h1>
                        <p className={desc}>
                            Nếu bạn đang tìm một nơi mua acc Liên Quân chất
                            lượng cao, bảo mật tốt và hỗ trợ tận tình thì shop
                            nickmt.com chính là lựa chọn hàng đầu dành cho bạn.
                            Dưới đây là những lý do khiến hàng ngàn game thủ tin
                            tưởng lựa chọn shop mỗi ngày:
                        </p>
                    </div>
                    <div>
                        <div>
                            <h1>
                                🔹 Shop chính chủ của YouTuber nổi tiếng – MT
                                Gaming
                            </h1>
                            <p className={desc}>
                                NickMT là{' '}
                                <a
                                    className='fw-primary'
                                    style={{
                                        color: '#3366ff',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <strong>shop nick Liên Quân</strong>
                                </a>{' '}
                                do MT Gaming : YouTuber chuyên Ngọc Rồng với hơn
                                300.000 lượt đăng ký điều hành. Với hơn 5 năm
                                hoạt động ổn định, shop đã xây dựng được uy tín
                                và sự tin tưởng vững chắc trong cộng đồng game
                                thủ.
                            </p>
                        </div>
                        <div>
                            <h1>🔹 UY TÍN là yếu tố cốt lõi</h1>
                            <p className={desc}>
                                Khách mua acc tại shop luôn nhận được sự hỗ trợ
                                tận tình trước – trong – và sau khi giao dịch.
                                Đội ngũ hỗ trợ hoạt động liên tục qua Zalo, đảm
                                bảo giải đáp thắc mắc và xử lý nhanh chóng các
                                vấn đề phát sinh. Dù bạn là người mới chơi hay
                                game thủ lâu năm,{' '}
                                <a
                                    className='text-primary'
                                    style={{ textDecoration: 'none' }}
                                    href='/pack-ban-nick-lien-quan-lienquangiare'
                                >
                                    {' '}
                                    <strong>
                                        shop acc liên quân uy tín lâu năm
                                        nickmt.com luôn
                                    </strong>
                                </a>{' '}
                                đồng hành cùng bạn.
                            </p>
                        </div>
                        <div>
                            <h1>🔹 CC được kiểm tra kỹ – đảm bảo minh bạch</h1>
                            <p className={desc}>
                                Mỗi nick Liên Quân đăng bán tại nickmt.com đều
                                được kiểm tra kỹ thông tin đăng nhập, số lượng
                                skin, tướng, ngọc, rank,... trước khi hiển thị
                                trên website. Không có tình trạng acc ảo, acc
                                sai mô tả hay bị ít đồ hơn thực tế. Tất cả thông
                                tin đều minh bạch, hình ảnh thật 100%, giúp bạn
                                yên tâm chọn lựa.
                            </p>
                        </div>
                        <div>
                            <h1>
                                🔹 4. Đa dạng mức giá – Phù hợp mọi người chơi
                            </h1>
                            <p className={desc}>
                                Từ tài khoản trắng thông tin giá rẻ cho đến acc
                                VIP full skin, shop đều có sẵn và cập nhật mỗi
                                ngày. Người chơi có thể dễ dàng chọn acc phù hợp
                                túi tiền và mục đích chơi game, không cần lăn
                                tăn về độ an toàn.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className='fw-bold'>
                            📞 Hỗ Trợ chăm sóc khách hàng :
                        </h1>
                        <p className={desc}>
                            Nếu có bất kỳ thắc mắc nào liên quan đến việc mua
                            bán acc Liên Quân, cách xem thông tin tài khoản, đổi
                            sđt hoặc kiểm tra trạng thái trắng thông tin, anh em
                            hãy liên hệ trực tiếp Zalo{' '}
                            <strong className='fw-danger'>0339.38.2222</strong>{' '}
                            để được hỗ trợ 1-1 nhanh nhất.
                        </p>
                        <p>
                            ✅ Dù bạn đang tìm acc chơi lâu dài, làm nick phụ
                            hoặc muốn mua acc để cày sự kiện, shop nickmt.com
                            luôn có lựa chọn phù hợp. Hãy thử trải nghiệm dịch
                            vụ và chất lượng tại đây – bạn sẽ hiểu vì sao nickmt
                            được đánh giá là một trong những shop bán acc Liên
                            Quân uy tín nhất hiện nay.
                        </p>
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
