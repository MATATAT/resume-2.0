import { Box, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import type React from 'react';
import type { JSX } from 'react';
import { FaDiamond, FaGithub, FaLinkedin, FaServer } from 'react-icons/fa6';
import { MdCloud, MdEmail, MdLanguage, MdLocationPin, MdPhone, MdTv } from 'react-icons/md';
import { useResume } from '~/context/ResumeContext';
import { Rank, type CategoricalValue, type Skill, type Skills } from '~/dto/resume';
import { OneDotIcon, ThreeDotIcon, TwoDotIcon } from '~/shared/components/LocalIcons';
import { isRankedCategoricalValue } from '~/util/type-guards';
import { LabelWithIcon, LinkType } from './LabelWithIcon';

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

    return (
        <Stack align={['flex-start', 'flex-end']}>
            <LabelWithIcon value={contact.email} icon={<MdEmail />} clickableNav={LinkType.Mail} />
            <LabelWithIcon value={contact.phone} icon={<MdPhone />} clickableNav={LinkType.Phone} />
            <LabelWithIcon value={contact.location} icon={<MdLocationPin />} clickableNav={LinkType.Location} />
            <LabelWithIcon value={contact.websites.personal} icon={<MdLanguage />} clickableNav={LinkType.Website} />
            <LabelWithIcon value={contact.websites.linkedIn} icon={<FaLinkedin />} clickableNav={LinkType.Website} />
            <LabelWithIcon value={contact.websites.gitHub} icon={<FaGithub />} clickableNav={LinkType.Website} />
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
                <Stack key={index}>
                    <Box fontSize={'sm'} fontWeight={'bold'} textTransform={'uppercase'}>
                        {qualification.title}
                    </Box>
                    <Stack gap={2} align={['flex-start', 'flex-end']} w={'100%'}>
                        {renderQualification(qualification.id, qualification.children)}
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
};

const renderQualification = (id: string, skills: Skills) => {
    return skills.map((skill, index) => {
        const key = `${id}-${index}`;
        switch (id) {
            case 'languages':
                return <LanguageSkill key={key} skill={skill} />;
            case 'tools':
                return <ToolSkill key={key} skill={skill} />;
            case 'likes':
                return <LikesSkill key={key} skill={skill} />;
            default:
                return null;
        }
    });
};

const LanguageSkill: React.FC<{ skill: Skill }> = ({ skill }) => {
    if (typeof skill === 'string') {
        return (
            <Text fontSize={'sm'} data-print-skill-item>
                {skill}
            </Text>
        );
    }

    let icon: JSX.Element = <></>;
    if (isRankedCategoricalValue(skill)) {
        switch (skill.rank) {
            case Rank.High:
                icon = <ThreeDotIcon reverse={[false, true]} />;
                break;
            case Rank.Medium:
                icon = <TwoDotIcon reverse={[false, true]} />;
                break;
            case Rank.Low:
                icon = <OneDotIcon reverse={[false, true]} />;
                break;
            default:
                throw new Error(`Unknown skill category: ${skill.category}`);
        }
    }

    return (
        <Box fontSize={'sm'} data-print-skill-item>
            <LabelWithIcon value={skill.values.join(', ')} icon={icon} />
        </Box>
    );
};

const ToolSkill: React.FC<{ skill: string | CategoricalValue }> = ({ skill }) => {
    if (typeof skill === 'string') {
        return (
            <Text fontSize={'sm'} data-print-skill-item>
                {skill}
            </Text>
        );
    }

    let icon: JSX.Element;
    switch (skill.category.toLowerCase()) {
        case 'frontend':
            icon = <MdTv />;
            break;
        case 'backend':
            icon = <FaServer />;
            break;
        case 'infra':
            icon = <MdCloud />;
            break;
        default:
            throw new Error(`Unknown skill category: ${skill.category}`);
    }

    return (
        <Box fontSize={'sm'} data-print-skill-item>
            <LabelWithIcon value={skill.values.join(', ')} icon={icon} />
        </Box>
    );
};

const LikesSkill: React.FC<{ skill: string | CategoricalValue }> = ({ skill }) => {
    const skillText = typeof skill === 'string' ? skill : skill.values.join(', ');

    return (
        <Box fontSize={'sm'} data-print-skill-item>
            <LabelWithIcon value={skillText} icon={<FaDiamond />} />
        </Box>
    );
};
