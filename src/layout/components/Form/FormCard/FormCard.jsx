import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import { useContext, useState } from 'react';
import { ServiceContext } from '@contexts/ServiceProvider';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
function FormCard() {
    const { optionCard, cardMoney } = useContext(ServiceContext);
    const [cardPin, setCardPin] = useState('');
    const [serial, setSerial] = useState('');
    const [cardType, setCardType] = useState('');
    const [cardValue, setCardValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        Swal.fire({
            title: 'Xác nhận!',
            text: 'Bạn thực sự muốn nạp thẻ này?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Nạp ngay',
            cancelButtonText: 'Hủy'
        }).then(result => {
            if (result.isConfirmed) {
                if (!cardType) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi xảy ra!',
                        text: 'Loại thẻ không được để trống'
                    });
                } else if (!cardValue) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi xảy ra!',
                        text: 'Mệnh giá không được để trống'
                    });
                } else if (!cardPin) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi xảy ra!',
                        text: 'Mã thẻ không được để trống'
                    });
                } else if (!serial) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi xảy ra!',
                        text: 'Serial không được để trống'
                    });
                } else {
                    Swal.fire(
                        'Thành công!',
                        `Bạn đã nạp thẻ: ${cardPin}`,
                        'success'
                    );
                    console.log('Dữ liệu thẻ:', { cardPin, serial });
                }
            }
        });
    };
    return (
        <>
            <form action='' onSubmit={handleSubmit}>
                <Form.Select
                    className='mb-3 p-2'
                    name='cardType'
                    onChange={e => setCardType(e.target.value)}
                >
                    {optionCard.map((item, idx) => (
                        <option key={idx} value={item.value}>
                            {item.content}
                        </option>
                    ))}
                </Form.Select>
                <Form.Select
                    className='mb-3 p-2'
                    name='cardValue'
                    onChange={e => setCardValue(e.target.value)}
                >
                    {cardMoney.map((item, idx) => (
                        <option key={idx} value={item.value} className='p-2'>
                            {item.content}
                        </option>
                    ))}
                </Form.Select>
                <Input
                    content='Mã thẻ'
                    value={cardPin}
                    onChange={e => setCardPin(e.target.value)}
                />
                <Input
                    content='Serial thẻ'
                    value={serial}
                    onChange={e => setSerial(e.target.value)}
                />
                <Button
                    content={'Nạp thẻ'}
                    type='submit'
                    isPrimary={true}
                    className={'btn btn-primary w-100 p-2'}
                />
            </form>
        </>
    );
}

export default FormCard;
