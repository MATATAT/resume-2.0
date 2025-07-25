import { Text } from '@chakra-ui/react';

export const ThreeDotIcon = (props: React.ComponentProps<typeof Text>) => (
    <Text
        display={'inline-block'}
        style={{ width: 'fit-content', height: 'fit-content' }}
        whiteSpace={'nowrap'}
        verticalAlign={'middle'}
        {...props}
    >
        {'●●●'}
    </Text>
);

export const TwoDotIcon = (props: React.ComponentProps<typeof Text>) => (
    <Text
        display={'inline-block'}
        style={{ width: 'fit-content', height: 'fit-content' }}
        whiteSpace={'nowrap'}
        verticalAlign={'middle'}
        {...props}
    >
        {'●●○'}
    </Text>
);

export const OneDotIcon = (props: React.ComponentProps<typeof Text>) => (
    <Text
        display={'inline-block'}
        style={{ width: 'fit-content', height: 'fit-content' }}
        whiteSpace={'nowrap'}
        verticalAlign={'middle'}
        {...props}
    >
        {'●○○'}
    </Text>
);
