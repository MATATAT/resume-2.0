import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

type LocalIconsProps = React.ComponentProps<typeof Text> & { reverse: boolean | boolean[] | null };

const reverseText = (text: string) => {
    return text.split('').reverse().join('');
};

const convertToBreakpointValue = (value: boolean | boolean[]): boolean[] => (Array.isArray(value) ? value : [value]);

const DOTS = {
    three: '●●●',
    two: '●●○',
    one: '●○○',
} as const;

export const ThreeDotIcon = ({ reverse, ...props }: LocalIconsProps) => {
    const isReversed = reverse ? useBreakpointValue(convertToBreakpointValue(reverse)) : null;
    return (
        <Box
            display={'inline-block'}
            style={{ width: 'fit-content', height: 'fit-content' }}
            whiteSpace={'nowrap'}
            verticalAlign={'middle'}
            {...props}
        >
            {isReversed ? reverseText(DOTS.three) : DOTS.three}
        </Box>
    );
};

export const TwoDotIcon = ({ reverse, ...props }: LocalIconsProps) => {
    const isReversed = reverse ? useBreakpointValue(convertToBreakpointValue(reverse)) : null;
    return (
        <Box
            display={'inline-block'}
            style={{ width: 'fit-content', height: 'fit-content' }}
            whiteSpace={'nowrap'}
            verticalAlign={'middle'}
            {...props}
        >
            {isReversed ? reverseText(DOTS.two) : DOTS.two}
        </Box>
    );
};

export const OneDotIcon = ({ reverse, ...props }: LocalIconsProps) => {
    const isReversed = reverse ? useBreakpointValue(convertToBreakpointValue(reverse)) : null;
    return (
        <Box
            display={'inline-block'}
            style={{ width: 'fit-content', height: 'fit-content' }}
            whiteSpace={'nowrap'}
            verticalAlign={'middle'}
            {...props}
        >
            {isReversed ? reverseText(DOTS.one) : DOTS.one}
        </Box>
    );
};
