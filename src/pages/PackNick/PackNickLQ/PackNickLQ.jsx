import CardText from './components/CardText';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import styles from './styles.module.scss';
import FilterProducts from './components/FilterProducts';
import Item from './components/Item';
function PackNickLQ() {
    const { boxCard } = styles;
    return (
        <>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='fw-bold'>
                            BÁN NICK LIÊN QUÂN LIENQUANGIARE
                        </h2>
                    </div>
                    <div>
                        <Breadcrumb
                            content={'BÁN NICK LIÊN QUÂN LIENQUANGIARE'}
                        />
                    </div>
                </div>
                <div className={boxCard}>
                    <CardText />
                </div>
                <div>
                    <FilterProducts />
                </div>
                <div>
                    <Item />
                </div>
            </div>
        </>
    );
}

export default PackNickLQ;
