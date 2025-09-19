import { useState } from 'react';
import { createContext } from 'react';
export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
    const optionCard = [
        {
            value: '',
            content: 'Loại thẻ'
        },
        {
            value: 'VIETTEL',
            content: 'Viettel'
        },
        {
            value: 'MOBIFONE',
            content: 'Mobifone'
        },
        {
            value: 'VINAPHONE',
            content: 'Vinaphone'
        },
        {
            value: 'VTC',
            content: 'VTC'
        },
        {
            value: 'GATE',
            content: 'GATE'
        },
        {
            value: 'ZING',
            content: 'ZING'
        }
    ];
    const cardMoney = [
        {
            value: '',
            content: 'Mệnh giá thẻ'
        },
        {
            value: '10000',
            content: '10.000 vnđ'
        },
        {
            value: '20000',
            content: '20.000 vnđ'
        },
        {
            value: '30000',
            content: '30.000 vnđ'
        },
        {
            value: '50000',
            content: '50.000 vnđ'
        },
        {
            value: '100000',
            content: '100.000 vnđ'
        },
        {
            value: '200000',
            content: '200.000 vnđ'
        },
        {
            value: '300000',
            content: '300.000 vnđ'
        },
        {
            value: '500000',
            content: '500.000 vnđ'
        },
        {
            value: '1000000',
            content: '1.000.000 vnđ'
        }
    ];
    const value = { optionCard, cardMoney };

    return (
        <ServiceContext.Provider value={value}>
            {children}
        </ServiceContext.Provider>
    );
};
