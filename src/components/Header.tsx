import { Heading } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import React from 'react';

interface Prop {
    title: string;
}
const Header: React.FC<Prop> = ({ title }) => {
    return <Heading>{title}</Heading>;
};

export default Header;
