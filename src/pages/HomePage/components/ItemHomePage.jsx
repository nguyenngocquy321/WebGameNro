import styles from '../styles.module.scss';
import cls from 'classnames';
import { BsMoonStarsFill } from 'react-icons/bs';
function Item({
    titleContent,
    descContent,
    iconContent,
    buttonContent,
    imgSrc
}) {
    const { title, desc, colorThr, colorYellow, boxImg, hoverImage } = styles;
    return (
        <>
            <div className='card h-100'>
                <div className={boxImg}>
                    <img
                        src={imgSrc}
                        className='card-img-top'
                        alt='Sản phẩm 1'
                    />
                    <div className={hoverImage}>
                        <span>
                            <BsMoonStarsFill />
                        </span>
                    </div>
                </div>
                <div className='card-body'>
                    <h5 className={title}>{titleContent}</h5>
                    <p
                        className={cls(desc, {
                            [colorThr]: colorThr
                        })}
                    >
                        {descContent}
                    </p>

                    <p
                        className={cls(desc, {
                            [colorYellow]: colorYellow
                        })}
                    >
                        {iconContent}
                        {iconContent}
                        {iconContent}
                        {iconContent}
                        {iconContent}
                    </p>
                    <div className='text-center'>{buttonContent}</div>
                </div>
            </div>
        </>
    );
}

export default Item;
