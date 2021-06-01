import { Box, Text } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';
import React from 'react';

const Value = ({ result }: any) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR } = result;
    if (Object.keys(result).length === 0) return null;
    return (
        <Stat m={5}>
            <StatLabel>Price</StatLabel>
            <StatNumber>{PRICE}</StatNumber>
            <StatLabel>Highest price of the day</StatLabel>
            <StatNumber>{HIGHDAY}</StatNumber>
            <StatLabel>Lowest price of the day</StatLabel>
            <StatNumber>{LOWDAY}</StatNumber>
            <StatLabel>Variation in last 24hs</StatLabel>
            {CHANGEPCT24HOUR < 0 ? (
                <>
                    <StatNumber>
                        <StatArrow type='decrease' />
                        {CHANGEPCT24HOUR}%
                    </StatNumber>
                </>
            ) : (
                <>
                    <StatNumber>
                        <StatArrow type='increase' />
                        {CHANGEPCT24HOUR}%
                    </StatNumber>
                </>
            )}
        </Stat>
    );
};

export default Value;
