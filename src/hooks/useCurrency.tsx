import React, { useState } from 'react';
import { Select, Stack, Text } from '@chakra-ui/react';
type currency = {
    code: string;
    name: string;
};
const useCurrency = (label: string, initialState: any, currencies: currency[]) => {
    const [state, setState] = useState(initialState);
    const SelectCurrency = () => (
        <>
            <Text m={1}>{label}</Text>
            <Stack m={2}>
                <Select onChange={e => setState(e.target.value)} value={state}>
                    <option value=''>--Choose currency-- </option>
                    {currencies.map(option => (
                        <option key={option.code} value={option.code}>
                            {option.name}
                        </option>
                    ))}
                </Select>
            </Stack>
        </>
    );
    //return state,interface and fn
    return [state, SelectCurrency, setState];
};

export default useCurrency;
