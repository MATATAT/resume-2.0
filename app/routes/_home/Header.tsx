import { Heading, VStack } from '@chakra-ui/react';

export const Header = () => {
    return (
        <VStack gap={2} py={8}>
            <Heading as='h1' size='6xl'>
                Matt Macdonald
            </Heading>
            <Heading as='h2' size='xl' color='gray.400'>
                Senior Software Developer
            </Heading>
        </VStack>
    );
};
