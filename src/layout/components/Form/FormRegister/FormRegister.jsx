import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputCommon from '../../InputCommon/InputCommon';
import { useContext, useState } from 'react';
import { ToastContext } from '@contexts/ToastProvider';

function FormRegister() {
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            account: '',
            email: '',
            phone: '',
            password: ''
        },
        validationSchema: Yup.object({
            account: Yup.string().required('Tên đăng nhập là bắt buộc'),
            email: Yup.string(),
            phone: Yup.string(), // không required, có thể bỏ trống
            password: Yup.string()
                .min(6, 'Mật khẩu ít nhất 6 ký tự')
                .matches(/[a-z]/, 'Mật khẩu phải chứa ít nhất 1 chữ thường')
                .matches(/[A-Z]/, 'Mật khẩu phải chứa ít nhất 1 chữ hoa')
                .matches(/[0-9]/, 'Mật khẩu phải chứa ít nhất 1 chữ số')
                .required('Mật khẩu là bắt buộc')
        }),
        onSubmit: async values => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                toast.success('Thành công');
                console.log('✅ Form values:', values);
                toast.success('Thành công');
                setIsLoading(false);
            } catch (error) {
                toast.error('Có lỗi xảy ra');
                setIsLoading(false);
            }
        }
    });
    return (
        <>
            <div className='shadow p-5' style={{ width: '500px' }}>
                <form onSubmit={formik.handleSubmit}>
                    <h2 className='mb-5'>Đăng Ký</h2>
                    <div className='mb-4'>
                        <InputCommon
                            id={'account'}
                            content={'Tên đăng nhập'}
                            formik={formik}
                        />
                    </div>
                    <div className='mb-4'>
                        <InputCommon
                            id={'email'}
                            content={'Email'}
                            name={'email'}
                            formik={formik}
                        />
                        <span className='text-primary'>Có thể bỏ trống</span>
                    </div>
                    <div className='mb-4'>
                        <InputCommon
                            id={'phone'}
                            content={'Số điện thoại'}
                            formik={formik}
                        />
                        <span className='text-primary'>Có thể bỏ trống</span>
                    </div>
                    <div className='mb-4'>
                        <InputCommon
                            id={'password'}
                            content={'Mật khẩu'}
                            type={'password'}
                            formik={formik}
                        />
                    </div>
                    <Button
                        content={isLoading ? 'LOADING...' : 'Đăng ký'}
                        type={'submit'}
                        className={'btn btn-danger w-100 p-2'}
                    />
                    <div className='mt-3 text-center'>Đã có tài khoản?</div>
                    <Button
                        content={'Đăng Nhập Ngay'}
                        className={'btn btn-primary w-100 p-2'}
                        href={'/login'}
                    />
                </form>
            </div>
        </>
    );
}

export default FormRegister;
