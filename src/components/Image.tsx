import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import image from '../crypto1.png';
const CryptoImage = () => {
    return (
        <Box boxSize='xl'>
            <Image src={image}></Image>
        </Box>
    );
};

export default CryptoImage;
