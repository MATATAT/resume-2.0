import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react';

export const Sidebar = () => {
    return (
        <Box as={'aside'}>
            <VStack align={'start'} gap={3}>
                <SideBlock title={'Contact'} />
                <SideBlock title={'Education'} />
                <SideBlock title={'Skills'} />
            </VStack>
        </Box>
    );
};

type SideBlockProps = {
    title: string;
};
const SideBlock = ({ title }: SideBlockProps) => {
    return (
        <Stack>
            <Heading as={'h3'} fontWeight={'bold'} textTransform={'uppercase'}>
                {title}
            </Heading>
            <Text>Placeholder</Text>
        </Stack>
    );
};
