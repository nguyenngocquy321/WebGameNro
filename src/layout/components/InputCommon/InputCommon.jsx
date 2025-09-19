function InputCommon({ content, type = 'text', id, formik }) {
    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];
    return (
        <>
            <label htmlFor={id} className='form-label'>
                {content}
            </label>
            <input
                id={id}
                type={type}
                placeholder={content}
                value={formik.values[id] ?? ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='form-control shadow-none'
            />
            {isErr && <div className='text-danger mt-1'>{messageErr}</div>}
        </>
    );
}

export default InputCommon;
