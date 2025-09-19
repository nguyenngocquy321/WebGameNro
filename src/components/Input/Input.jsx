function Input({ content, type = 'text', value, onChange }) {
    return (
        <div className='mb-4'>
            <input
                placeholder={content}
                type={type}
                value={value}
                onChange={onChange}
                className={'form-control shadow-none p-3'}
            />
        </div>
    );
}
export default Input;
