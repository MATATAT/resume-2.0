import { Box, Heading, List, Stack } from '@chakra-ui/react';
import { useResume } from '~/context/ResumeContext';
import type { Institution } from '~/dto/resume';

export const Main = () => {
    const { experience } = useResume();

    return (
        <Box as={'main'} maxW={{ lg: '1000px' }}>
            <Heading as={'h3'} fontWeight={'bold'} textTransform={'uppercase'} pl={[0, 3]}>
                Work Experience
            </Heading>
            <Stack gap={5} pl={[4, 8]}>
                {experience.map((exp) => (
                    <ExperienceBlock key={exp.name} {...exp} />
                ))}
            </Stack>
        </Box>
    );
};

const ExperienceBlock = ({ name, position, location, startDate, endDate, notes }: Institution) => {
    return (
        <Box>
            <Box fontWeight={'bold'}>{position}</Box>
            <Box>{name}</Box>
            <Box fontSize={'sm'} fontStyle={'italic'}>
                {startDate} - {endDate || 'Current'} / {location}
            </Box>
            <List.Root pl={8}>
                {notes.map((note, index) => (
                    <List.Item key={index} pl={4}>
                        {note}
                    </List.Item>
                ))}
            </List.Root>
        </Box>
    );
};
