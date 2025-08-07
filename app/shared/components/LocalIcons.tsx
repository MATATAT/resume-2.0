import { HStack, type StackProps } from '@chakra-ui/react';
import { MdCircle, MdOutlineCircle } from 'react-icons/md';

type LocalIconsProps = StackProps;

const reverseText = (text: string) => {
    return text.split('').reverse().join('');
};

const convertToBreakpointValue = (value: boolean | boolean[]): boolean[] => (Array.isArray(value) ? value : [value]);

const Dot = ({ count }: { count: number }) => (
    <>
        {Array.from({ length: 3 }, (_, index) => (
            <span key={index}>{index < count ? <MdCircle /> : <MdOutlineCircle />}</span>
        ))}
    </>
);

const DotContainer = ({ children, ...props }: LocalIconsProps) => {
    return (
        <HStack
            gap={0}
            style={{ width: 'fit-content', height: 'fit-content' }}
            whiteSpace={'nowrap'}
            verticalAlign={'middle'}
            flexDir={['row', 'row-reverse']}
            {...props}
        >
            {children}
        </HStack>
    );
};

export const ThreeDotIcon = (props: LocalIconsProps) => {
    return (
        <DotContainer {...props}>
            <Dot count={3} />
        </DotContainer>
    );
};

export const TwoDotIcon = (props: LocalIconsProps) => {
    return (
        <DotContainer {...props}>
            <Dot count={2} />
        </DotContainer>
    );
};
export const OneDotIcon = (props: LocalIconsProps) => {
    return (
        <DotContainer {...props}>
            <Dot count={1} />
        </DotContainer>
    );
};
