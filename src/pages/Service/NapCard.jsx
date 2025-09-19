import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import styles from './styles.module.scss';
import FormCard from '@layout/components/Form/FormCard/FormCard';
function NapCard() {
    const { boxCard, boxTextCard } = styles;

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h3 className='fw-bold'>Nạp Card</h3>
                <Breadcrumb content={'Nạp card'} />
            </div>
            <div className={boxCard}>
                <div style={{ width: '600px' }}>
                    <div
                        style={{ padding: '25px', backgroundColor: '#ebf5ff' }}
                    >
                        <strong style={{ color: 'rgb(255, 0, 0)' }}>
                            Hệ thống nạp tự động, 100k nhận 100k không chiết
                            khấu
                            <br />
                            Cam kết không nuốt thẻ, vui lòng kiểm tra kỹ mệnh
                            giá thẻ cào trước khi nạp
                        </strong>
                    </div>

                    <div className={boxTextCard}>
                        <FormCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NapCard;
