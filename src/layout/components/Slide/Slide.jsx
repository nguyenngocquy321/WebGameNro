import slides from '@ImageSlide/ImageSlide.js';
import styles from './styles.module.scss';
function Slide() {
    const { left, right, containerSlide } = styles;
    return (
        <div className={containerSlide}>
            <div
                id='carouselExampleInterval'
                className='carousel slide'
                data-bs-ride='carousel'
            >
                <div className='carousel-inner'>
                    <div
                        className='carousel-item active'
                        data-bs-interval='10000'
                    >
                        <img
                            src={slides[0].src}
                            className='d-block w-100'
                            alt={slides[0].alt}
                        />
                    </div>
                    <div className='carousel-item' data-bs-interval='2000'>
                        <img
                            src={slides[1].src}
                            className='d-block w-100'
                            alt={slides[1].alt}
                        />
                    </div>
                    <div className='carousel-item'>
                        <img
                            src={slides[2].src}
                            className='d-block w-100'
                            alt={slides[2].alt}
                        />
                    </div>
                </div>

                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleInterval'
                    data-bs-slide='prev'
                >
                    <span
                        className='carousel-control-prev-icon'
                        id={left}
                        aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Previous</span>
                </button>

                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleInterval'
                    data-bs-slide='next'
                >
                    <span
                        className='carousel-control-next-icon'
                        id={right}
                        aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slide;
