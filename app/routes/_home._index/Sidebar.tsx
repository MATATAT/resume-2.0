import { Box, Flex, Heading, Icon, Link, Stack, VStack, Wrap } from '@chakra-ui/react';
import type React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail, MdLanguage, MdLocationPin, MdPhone } from 'react-icons/md';
import { useResume } from '~/context/ResumeContext';

export const Sidebar = () => {
    return (
        <Box as={'aside'} pb={10} data-print-sidebar-container>
            <VStack align={['flex-start', 'flex-end']} gap={3} data-print-sidebar-content>
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
        <Stack align={['flex-start', 'flex-end']} data-print-sidebar-block>
            <Heading as={'h3'} fontWeight={'bold'} textTransform={'uppercase'}>
                {title}
            </Heading>
            {children}
        </Stack>
    );
};

const Contacts = () => {
    const { contact } = useResume();

    const LabelWithIcon = ({
        contact,
        icon,
        clickableNav = LinkType.None,
    }: {
        contact: string;
        icon: React.ReactNode;
        clickableNav: LinkType;
    }) => {
        const convert = (contact: string, linkType: LinkType): string => {
            switch (linkType) {
                case LinkType.Mail:
                    return `mailto:${contact}`;
                case LinkType.Website:
                    return `https://${contact}`;
                case LinkType.Phone:
                    return `tel:${contact}`;
                case LinkType.Location:
                    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact)}`;
                default:
                    return contact;
            }
        };

        return (
            <Stack direction={['row-reverse', 'row']} align={'center'} gap={2}>
                <Box>
                    {clickableNav ? (
                        <Link href={convert(contact, clickableNav)} target='_blank' rel='noopener noreferrer'>
                            {contact}
                        </Link>
                    ) : (
                        contact
                    )}
                </Box>
                <Icon boxSize={5}>{icon}</Icon>
            </Stack>
        );
    };

    return (
        <Stack align={['flex-start', 'flex-end']}>
            <LabelWithIcon contact={contact.email} icon={<MdEmail />} clickableNav={LinkType.Mail} />
            <LabelWithIcon contact={contact.phone} icon={<MdPhone />} clickableNav={LinkType.Phone} />
            <LabelWithIcon contact={contact.location} icon={<MdLocationPin />} clickableNav={LinkType.Location} />
            <LabelWithIcon contact={contact.websites.personal} icon={<MdLanguage />} clickableNav={LinkType.Website} />
            <LabelWithIcon contact={contact.websites.linkedIn} icon={<FaLinkedin />} clickableNav={LinkType.Website} />
            <LabelWithIcon contact={contact.websites.gitHub} icon={<FaGithub />} clickableNav={LinkType.Website} />
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
        <Stack gap={2} maxW={'250px'} data-print-skill-block>
            {qualifications.map((qualification, index) => (
                <Stack key={index} align={['flex-start', 'flex-end']}>
                    <Box fontSize={'sm'} fontWeight={'bold'} textTransform={'uppercase'}>
                        {qualification.title}
                    </Box>
                    <Wrap justify={['flex-start', 'flex-end']} maxW={'250px'}>
                        {qualification.children.map((skill, index) => (
                            <Box key={index} fontSize={'sm'} as={'span'} data-print-skill-item>
                                {skill}
                            </Box>
                        ))}
                    </Wrap>
                </Stack>
            ))}
        </Stack>
    );
};

enum LinkType {
    None,
    Mail,
    Website,
    Phone,
    Location,
}
