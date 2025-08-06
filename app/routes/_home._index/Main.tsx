import { Box, Flex, Heading, List, Stack } from '@chakra-ui/react';
import { useResume } from '~/context/ResumeContext';
import type { Institution } from '~/dto/resume';

export const Main = () => {
    const { experience } = useResume();

    return (
        <Box as={'main'} maxW={{ lg: '1000px' }}>
            <Heading as={'h3'} fontWeight={'bold'} textTransform={'uppercase'} pl={[0, 3]}>
                Professional Experience
            </Heading>
            <Stack gap={5} pl={[4, 8]}>
                {experience.map((exp) => (
                    <ExperienceBlock key={exp.name} {...exp} />
                ))}
            </Stack>
        </Box>
    );
};

const ExperienceBlock = ({ name, position, location, startDate, endDate, summary, notes }: Institution) => {
    return (
        <Box>
            <Flex justifyContent='space-between' alignItems='flex-start' mb={2}>
                <Box>
                    <Box fontWeight={'bold'}>{position}</Box>
                    <Box>{name}</Box>
                </Box>
                <Box fontSize={'sm'} color={'gray.400'} textAlign='right'>
                    {startDate} - {endDate || 'Current'} / {location}
                </Box>
            </Flex>
            {summary && (
                <Box fontSize={'sm'} color={'gray.300'} mt={2} mb={3} fontStyle={'italic'}>
                    {summary}
                </Box>
            )}
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
