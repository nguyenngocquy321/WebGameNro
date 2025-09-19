import { useState } from 'react';
import { createContext } from 'react';

export const FillterProductContext = createContext();

export const FillterProductProvider = ({ children }) => {
    const dataFillterPrice = [
        { content: 'Lọc theo giá (Tất cả)', value: 'all' },
        { content: 'Từ 50k trở xuống', value: '0-50000' },
        { content: 'Từ 50k đến 100k', value: '50000-100000' },
        { content: 'Từ 100k đến 300k', value: '100000-300000' },
        { content: 'Từ 300k đến 500k', value: '300000-500000' },
        { content: 'Từ 500k đến 700k', value: '500000-700000' },
        { content: 'Từ 700k đến 1 Triệu', value: '700000-1000000' },
        { content: 'Từ 1 Triệu đến 2 Triệu', value: '1000000-2000000' },
        { content: 'Từ 2 Triệu đến 5 Triệu', value: '2000000-5000000' },
        { content: 'Từ 5 Triệu đến 10 Triệu', value: '5000000-10000000' },
        { content: 'Từ 10 Triệu trở lên', value: '10000000-100000000' }
    ];
    const dataFillterServer = [
        { content: 'Lọc theo server', value: '0' },
        { content: '1 sao', value: '1' },
        { content: '2 sao', value: '2' },
        { content: '3 sao', value: '3' },
        { content: '4 sao', value: '4' },
        { content: '5 sao', value: '5' },
        { content: '6 sao', value: '6' },
        { content: '7 sao', value: '7' },
        { content: '8 sao', value: '8' },
        { content: '9 sao', value: '9' },
        { content: '10 sao', value: '10' },
        { content: '11 sao', value: '11' }
    ];
    const dataFillterPlaned = [
        { content: 'Lọc theo hành tinh', value: '0' },
        { content: 'Trái đất', value: '1' },
        { content: 'Namec', value: '2' },
        { content: 'Xayda', value: '3' }
    ];
    const value = { dataFillterPrice, dataFillterServer, dataFillterPlaned };

    return (
        <FillterProductContext.Provider value={value}>
            {children}
        </FillterProductContext.Provider>
    );
};
