function Breadcrumb({ content }) {
    return (
        <>
            <nav
                style={{ '--bs-breadcrumb-divider': "'>'" }}
                aria-label='breadcrumb'
            >
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <a
                            href='/'
                            className='text-decoration-none text-dark fw-bold'
                        >
                            Trang Chủ
                        </a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                        {content}
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default Breadcrumb;
