import { Box, Flex } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import CryptoImage from './components/Image';
import Value from './components/Value';

function App() {
    const [currency, setCurrency] = useState('');
    const [crypto, setCrypto] = useState('');
    const [result, setResult] = useState({});

    useEffect(() => {
        const estimateCurrency = async () => {
            if (currency === '') return;

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
            const result = await axios.get(url);
            setResult(result.data.DISPLAY[crypto][currency]);
        };
        estimateCurrency();
    }, [currency, crypto]);
    return (
        <Flex spacing='24px' bg='gray.100' align='center' justify='center' height='100vh' direction='row'>
            <Box>
                <Center>
                    <CryptoImage />
                </Center>
            </Box>
            <Box>
                <Header title='Cryptocurrency' />
                <Form setCurrency={setCurrency} setCrypto={setCrypto} />
                <Value result={result} />
            </Box>
        </Flex>
    );
}

export default App;
