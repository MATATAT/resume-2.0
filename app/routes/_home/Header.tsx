import { Heading, VStack } from '@chakra-ui/react';
import { useResume } from '~/context/ResumeContext';

export const Header = () => {
    const { name, title } = useResume();

    return (
        <VStack gap={2} py={8} borderBottom={3} borderStyle={'solid'} borderColor={'gray.700'} px={4}>
            <Heading as={'h1'} size={'6xl'} textAlign={'center'} textTransform={'uppercase'} color={'white'}>
                {name}
            </Heading>
            <Heading as={'h2'} size={'xl'} color={'teal.400'} textTransform={'uppercase'} fontStyle={'italic'}>
                {title}
            </Heading>
        </VStack>
    );
};
