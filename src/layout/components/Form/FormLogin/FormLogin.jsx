import Button from '@components/Button/Button';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputCommon from '../../InputCommon/InputCommon';
import { useState } from 'react';
function FormLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: { account: '', password: '' },
        validationSchema: Yup.object({
            account: Yup.string().required('Tài khoản không được bỏ trống'),
            password: Yup.string().required('Mật khẩu không được bỏ trống')
        }),
        onSubmit: value => {
            setIsLoading(true);
            console.log(value);
        }
    });
    return (
        <>
            <div className='shadow p-5' style={{ width: '500px' }}>
                <form action='' onSubmit={formik.handleSubmit}>
                    <h2 className='mb-5'>Đăng Nhập</h2>
                    <div className='mb-4'>
                        <InputCommon
                            id={'account'}
                            content={'Tên đăng nhập hoặc email'}
                            formik={formik}
                        />
                    </div>
                    <div className='mb-4'>
                        <InputCommon
                            id={'password'}
                            content={'Mật Khẩu'}
                            formik={formik}
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label
                            htmlFor='memberMe'
                            style={{
                                display: 'flex',
                                cursor: 'pointer'
                            }}
                        >
                            <div className='me-2'>
                                <input type='checkbox' id='memberMe' />
                            </div>
                            Remember me
                        </label>
                        <div>
                            <div href='#' style={{ cursor: 'pointer' }}>
                                Quên mật khẩu?
                            </div>
                        </div>
                    </div>
                    <Button
                        content={isLoading ? 'LOADING...' : 'Đăng Nhập'}
                        type={'submit'}
                        className={'btn btn-danger w-100 p-2'}
                    />
                    <div className='mt-3 text-center'>Chưa có tài khoản?</div>
                    <Button
                        content={'Đăng Ký Ngay'}
                        className={'btn btn-primary w-100 p-2'}
                        href={'/register'}
                    />
                </form>
            </div>
        </>
    );
}

export default FormLogin;
