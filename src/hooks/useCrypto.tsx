import React, { useState } from 'react';
import { Select, Stack, Text } from '@chakra-ui/react';

const useCrypto = (label: string, initialState: any, cryptoList: any) => {
    const [state, setState] = useState(initialState);
    const SelectCrypto = () => (
        <>
            <Text m={1}>{label}</Text>
            <Stack m={2}>
                <Select onChange={e => setState(e.target.value)} value={state}>
                    <option value=''>--Choose crypto-- </option>
                    {cryptoList.map((crypto: any) => (
                        <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </Select>
            </Stack>
        </>
    );
    return [state, SelectCrypto, setState];
};

export default useCrypto;
