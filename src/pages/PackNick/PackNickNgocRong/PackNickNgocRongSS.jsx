import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import CardText from './components/CardText';
import styles from './styles.module.scss';
import FilterProducts from './components/FilterProducts';
import Item from './components/Item';
function PackNickNgocRongSS() {
    const { boxCard } = styles;
    return (
        <>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='fw-bold'>NICK SƠ SINH NGON</h2>
                    </div>
                    <div>
                        <Breadcrumb content={'NICK SƠ SINH NGON'} />
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

export default PackNickNgocRongSS;
