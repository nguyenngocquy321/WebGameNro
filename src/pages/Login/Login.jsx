import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import FormLogin from '@layout/components/Form/FormLogin/FormLogin';
function Login() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div>
                    <h5>Đăng Nhập</h5>
                </div>
                <div>
                    <Breadcrumb content={'Đăng Nhập'} />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '100px'
                }}
            >
                <FormLogin />
            </div>
        </>
    );
}

export default Login;
