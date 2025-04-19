import { Box, Heading, List } from '@chakra-ui/react';

export const Main = () => {
    return (
        <Box as={'main'}>
            <Heading as={'h3'} fontWeight={'bold'} textTransform={'uppercase'} pl={[0, 3]}>
                Work Experience
            </Heading>
            <Box pl={[4, 8]}>
                <ExperienceBlock />
            </Box>
        </Box>
    );
};

const ExperienceBlock = () => {
    return (
        <Box>
            <Box fontWeight={'bold'}>Software Engineer</Box>
            <Box>Amazon</Box>
            <Box>Seattle, WA</Box>
            {/* {experience.startDate} - {experience.endDate || 'Current'} / {experience.location} */}
            <Box>2021 - Current</Box>
            <List.Root pl={8}>
                <List.Item>Worked on the Amazon Prime Video team.</List.Item>
                <List.Item>Worked on the Amazon Music team.</List.Item>
                <List.Item>Worked on the Amazon Alexa team.</List.Item>
            </List.Root>
        </Box>
    );
};
