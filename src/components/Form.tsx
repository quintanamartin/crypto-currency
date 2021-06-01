import React, { useEffect, useState } from 'react';
import { Alert, Button } from '@chakra-ui/react';

import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';

const Form = ({ setCurrency, setCrypto }: any) => {
    const [cryptoList, setCryptoList] = useState<[]>([]);
    const [error, setError] = useState<boolean>(false);

    const currencies = [
        { code: 'USD', name: 'Dolar americano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'ARS', name: 'Peso argentino' },
        { code: 'GBP', name: 'Libra esterlina' },
    ];
    const [currency, SelectCurrency] = useCurrency('Choose your currency', '', currencies);

    const [crypto, SelectCrypto] = useCrypto('Choose your crypto', '', cryptoList);

    useEffect(() => {
        const getAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const result = await axios.get(url);
            setCryptoList(result.data.Data);
        };
        getAPI();
    }, []);

    const estimateValue = (e: any) => {
        e.preventDefault();
        if (currency === '' || crypto === '') {
            setError(true);
            return;
        }

        setError(false);
        setCrypto(crypto);
        setCurrency(currency);
    };
    return (
        <form onSubmit={estimateValue}>
            {error && (
                <Alert status='error' m={2}>
                    All fields are required
                </Alert>
            )}
            <SelectCurrency />
            <SelectCrypto />
            <Button colorScheme='blue' type='submit'>
                Calculate
            </Button>
        </form>
    );
};

export default Form;
