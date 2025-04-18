import { Heading, VStack } from '@chakra-ui/react';

export const Header = () => {
    return (
        <VStack gap={2} py={8} borderBottom={3} borderStyle={'solid'} borderColor={'gray.700'} px={4}>
            <Heading as={'h1'} size={'6xl'} textTransform={'uppercase'} color={'white'}>
                Matt Macdonald
            </Heading>
            <Heading as={'h2'} size={'xl'} color={'teal.400'} textTransform={'uppercase'} fontStyle={'italic'}>
                Senior Software Developer
            </Heading>
        </VStack>
    );
};
