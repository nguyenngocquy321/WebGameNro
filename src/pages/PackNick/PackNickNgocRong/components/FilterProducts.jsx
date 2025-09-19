import Input from '@components/Input/Input';
import { useContext } from 'react';
import { FillterProductContext } from '@contexts/FillterProductProvider';
import { Button } from 'react-bootstrap';
function FilterProducts() {
    const { dataFillterPrice, dataFillterServer, dataFillterPlaned } =
        useContext(FillterProductContext);
    return (
        <>
            <div className='row mt-5'>
                <div className='col-sm-6 col-md-4 col-lg-3 '>
                    <Input content={'Tìm vật phẩm (VIP, Rank, Skin...)'} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3 '>
                    <Input content={'Mã số acc'} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3 '>
                    <select className='form-select shadow-none p-3'>
                        {dataFillterPrice.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>
                                    {item.content}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3 '>
                    <select className='form-select shadow-none p-3'>
                        {dataFillterServer.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>
                                    {item.content}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3 '>
                    <select className='form-select shadow-none p-3'>
                        {dataFillterPlaned.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>
                                    {item.content}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3 '>
                    <Button variant='btn btn-sm btn-success btn-custom-filter me-3 p-2'>
                        Tìm kiếm
                    </Button>
                    <Button variant='btn btn-sm btn-warning btn-custom-filter p-2'>
                        Xóa lọc
                    </Button>
                </div>
            </div>
        </>
    );
}

export default FilterProducts;
