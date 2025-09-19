import FormCard from '../Form/FormCard/FormCard';
function TableCard() {
    return (
        <div className='card p-3 h-100'>
            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link active'
                        id='nap-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#nap'
                        type='button'
                        role='tab'
                        aria-controls='nap'
                        aria-selected='true'
                    >
                        Nạp tiền
                    </button>
                </li>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link'
                        id='topnap-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#topnap'
                        type='button'
                        role='tab'
                        aria-controls='topnap'
                        aria-selected='false'
                    >
                        Top nạp tiền
                    </button>
                </li>
            </ul>

            <div
                className='tab-content p-3 border border-top-0 mt-4'
                id='myTabContent'
            >
                <div
                    className='tab-pane fade show active'
                    id='nap'
                    role='tabpanel'
                    aria-labelledby='nap-tab'
                >
                    <FormCard />
                </div>

                <div
                    className='tab-pane fade'
                    id='topnap'
                    role='tabpanel'
                    aria-labelledby='topnap-tab'
                >
                    <h4>Top nạp tiền</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>User 1 - 5,000,000đ</li>
                        <li className='list-group-item'>User 2 - 3,200,000đ</li>
                        <li className='list-group-item'>User 3 - 1,800,000đ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TableCard;
