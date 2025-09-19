import React from 'react';
import { Table } from 'react-bootstrap';

function TableData() {
    return (
        <div className='shadow p-3 mt-4'>
            <h2 className='fw-bold'>Lịch Sử Nạp Tiền</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Loại thẻ</th>
                        <th>Seri</th>
                        <th>Mã thẻ</th>
                        <th>Mệnh giá</th>
                        <th>Thực nhận</th>
                        <th>Trạng thái</th>
                        <th>Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>acb</td>
                        <td>1000645340387621</td>
                        <td>512598794578186</td>
                        <td>
                            +10,000 <sub>đ</sub>
                        </td>
                        <td>
                            +10,000 <sub>đ</sub>
                        </td>
                        <td>Lỗi</td>
                        <td>2 tháng trước</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TableData;
