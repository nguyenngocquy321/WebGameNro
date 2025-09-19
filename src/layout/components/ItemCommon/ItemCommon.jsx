import { Card, Button } from 'react-bootstrap';
import { BsMoonStarsFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import cls from 'classnames';
import { FaStar } from 'react-icons/fa';
function ItemCommon({ titleContent, descContent, href, imgSrc }) {
    const {
        title,
        desc,
        colorThr,
        colorYellow,
        boxImg,
        hoverImage,
        boxImgBlogs,
        boxCard
    } = styles;

    return (
        <Card className={boxCard}>
            <div className={boxImg}>
                <Card.Img variant='top' src={imgSrc} />
                <div className={hoverImage}>
                    <span>
                        <BsMoonStarsFill />
                    </span>
                </div>
            </div>

            <Card.Body className={boxImgBlogs}>
                <Card.Title className={title}>{titleContent}</Card.Title>

                <Card.Text className={cls(desc, { [colorThr]: colorThr })}>
                    {descContent}
                </Card.Text>

                <Card.Text
                    className={cls(desc, { [colorYellow]: colorYellow })}
                >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </Card.Text>

                <Button variant='danger' href={href}>
                    Mua ngay
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCommon;
