function Button({
    content,
    type = 'button',
    className,
    href,
    isPrimary = true
}) {
    if (href) {
        return (
            <div className={isPrimary ? 'mt-4' : undefined}>
                <a className={className} href={href}>
                    {content}
                </a>
            </div>
        );
    }

    return (
        <div className={isPrimary ? 'mt-4' : undefined}>
            <button type={type} className={className}>
                {content}
            </button>
        </div>
    );
}

export default Button;
