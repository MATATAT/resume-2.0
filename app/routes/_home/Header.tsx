import { Box, Heading, VStack } from '@chakra-ui/react';
import { useResume } from '~/context/ResumeContext';
import { DownloadPdf } from '~/shared/components/pdf/DownloadPdf';

export const Header = () => {
    const resumeData = useResume();
    const { name, title } = resumeData;

    const handlePrint = () => {
        window.print();
    };

    return (
        <Box position='relative' bg={'headerBg'}>
            <DownloadPdf position={'absolute'} right={4} top={4} />
            <VStack
                gap={2}
                py={8}
                borderBottom={3}
                borderStyle={'solid'}
                borderColor={'gray.700'}
                px={4}
                data-print-border
            >
                <Heading
                    as={'h1'}
                    size={'6xl'}
                    color={'headerTitle'}
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    data-print-header-title
                >
                    {name}
                </Heading>
                <Heading
                    as={'h2'}
                    size={'xl'}
                    color={'headerSubtitle'}
                    textTransform={'uppercase'}
                    fontStyle={'italic'}
                    data-print-header-subtitle
                >
                    {title}
                </Heading>
            </VStack>
        </Box>
    );
};
