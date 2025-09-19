import FormRegister from '@/layout/components/Form/FormRegister/FormRegister';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
function Register() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div>
                    <h5>Đăng Ký</h5>
                </div>
                <div>
                    <Breadcrumb content={'Đăng Ký'} />
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
                <FormRegister />
            </div>
        </>
    );
}

export default Register;
