import TableCard from '@layout/components/TableCard/TableCard';
import Slide from '@layout/components/Slide/Slide';
import Content from '@layout/components/Content/Content';
import CardText from '@layout/components/CardText/CardText.jsx';
function HomePage() {
    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <TableCard />
                    </div>
                    <div className='col-12 col-md-6 col-lg-8 p-0'>
                        <Slide />
                    </div>
                </div>
                <Content />
                <CardText />
            </div>
        </>
    );
}

export default HomePage;
