import { Box, Flex, Heading, Icon, Stack, VStack } from '@chakra-ui/react';
import type React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail, MdLanguage, MdLocationPin, MdPhone } from 'react-icons/md';
import { useResume } from '~/context/ResumeContext';

export const Sidebar = () => {
    return (
        <Box as={'aside'}>
            <VStack align={['flex-start', 'flex-end']} gap={3}>
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
        <Stack align={['flex-start', 'flex-end']}>
            <Heading as={'h3'} fontWeight={'bold'} textTransform={'uppercase'}>
                {title}
            </Heading>
            {children}
        </Stack>
    );
};

const Contacts = () => {
    const { contact } = useResume();

    const LabelWithIcon = ({ contact, icon }: { contact: string; icon: React.ReactNode }) => {
        return (
            <Stack direction={['row-reverse', 'row']} align={'center'} gap={2}>
                <Box>{contact}</Box>
                <Icon boxSize={5}>{icon}</Icon>
            </Stack>
        );
    };

    return (
        <Stack align={['flex-start', 'flex-end']}>
            <LabelWithIcon contact={contact.email} icon={<MdEmail />} />
            <LabelWithIcon contact={contact.phone} icon={<MdPhone />} />
            <LabelWithIcon contact={contact.location} icon={<MdLocationPin />} />
            <LabelWithIcon contact={contact.websites.personal} icon={<MdLanguage />} />
            <LabelWithIcon contact={contact.websites.linkedIn} icon={<FaLinkedin />} />
            <LabelWithIcon contact={contact.websites.gitHub} icon={<FaGithub />} />
        </Stack>
    );
};

const Education = () => {
    const { education } = useResume();

    return (
        <Flex direction={'column'} align={['flex-start', 'flex-end']}>
            <Box>{education.name}</Box>
            <Box>{education.position}</Box>
            <Box>{education.location}</Box>
            <Box>
                {education.startDate} - {education.endDate}
            </Box>
        </Flex>
    );
};

const Skills = () => {
    const { qualifications } = useResume();

    return (
        <Stack gap={3}>
            {qualifications.map((qualification, index) => (
                <Stack key={index} align={['flex-start', 'flex-end']}>
                    <Box key={index} fontSize={'sm'} fontWeight={'bold'} textTransform={'uppercase'}>
                        {qualification.title}
                    </Box>
                    <Flex direction={'column'} align={['flex-start', 'flex-end']}>
                        {qualification.children.map((note, index) => (
                            <Box key={index} fontSize={'sm'}>
                                {note}
                            </Box>
                        ))}
                    </Flex>
                </Stack>
            ))}
        </Stack>
    );
};
