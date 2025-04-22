import { Box, Heading, IconButton, VStack } from '@chakra-ui/react';
import { FiPrinter } from 'react-icons/fi';
import { useResume } from '~/context/ResumeContext';

export const Header = () => {
    const { name, title } = useResume();

    const handlePrint = () => {
        window.print();
    };

    return (
        <Box position='relative'>
            <IconButton
                variant={'surface'}
                aria-label='Print resume'
                position='absolute'
                right={4}
                top={4}
                onClick={handlePrint}
                data-print-hide
            >
                <FiPrinter />
            </IconButton>
            <VStack
                gap={2}
                py={8}
                borderBottom={3}
                borderStyle={'solid'}
                borderColor={'gray.700'}
                px={4}
                data-print-border
            >
                <Heading as={'h1'} size={'6xl'} textAlign={'center'} textTransform={'uppercase'} color={'white'}>
                    {name}
                </Heading>
                <Heading as={'h2'} size={'xl'} color={'teal.400'} textTransform={'uppercase'} fontStyle={'italic'}>
                    {title}
                </Heading>
            </VStack>
        </Box>
    );
};
