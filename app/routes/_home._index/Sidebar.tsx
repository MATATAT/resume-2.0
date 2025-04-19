import { Box, Flex, Heading, Icon, Stack, VStack } from '@chakra-ui/react';
import type React from 'react';
import { MdEmail } from 'react-icons/md';

export const Sidebar = () => {
    return (
        <Box as={'aside'}>
            <VStack align={['start', 'end']} gap={3}>
                <SideBlock title={'Contact'}>
                    <Contacts />
                </SideBlock>
                <SideBlock title={'Education'}>
                    <Education />
                </SideBlock>
                <SideBlock title={'Skills'}>
                    <Skills />
                </SideBlock>
            </VStack>
        </Box>
    );
};

interface SideBlockProps extends React.PropsWithChildren {
    title: string;
}
const SideBlock = ({ title, children }: SideBlockProps) => {
    return (
        <Stack align={['start', 'end']}>
            <Heading as={'h3'} fontWeight={'bold'} textTransform={'uppercase'}>
                {title}
            </Heading>
            {children}
        </Stack>
    );
};

const Contacts = () => {
    const LabelWithIcon = ({ contact, icon }: { contact: string; icon: React.ReactNode }) => {
        return (
            <Stack direction={['row-reverse', 'row']} align={'center'} gap={2}>
                <Box>{contact}</Box>
                <Icon boxSize={5}>{icon}</Icon>
            </Stack>
        );
    };

    return (
        <Stack>
            <LabelWithIcon contact={'matt.david.macdonald@gmail.com'} icon={<MdEmail />} />
        </Stack>
    );
};

const Education = () => {
    return (
        <Flex direction={'column'} align={['start', 'end']}>
            <Box>Washington State University</Box>
            <Box>Pullman, WA</Box>
            <Box>BS Computer Science</Box>
            <Box>2017</Box>
            <Box>GPA 3.7</Box>
        </Flex>
    );
};

const Skills = () => {
    return (
        <Flex direction={'column'} align={['start', 'end']}>
            <Box>React</Box>
            <Box>JavaScript</Box>
            <Box>TypeScript</Box>
            <Box>Node.js</Box>
            <Box>GraphQL</Box>
        </Flex>
    );
};
