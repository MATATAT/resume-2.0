import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';

export const LabelWithIcon = ({
    value,
    icon,
    clickableNav = LinkType.None,
}: {
    value: string;
    icon: React.ReactNode;
    clickableNav?: LinkType;
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
                    <Link href={convert(value, clickableNav)} target='_blank' rel='noopener noreferrer'>
                        <Text textAlign={['left', 'right']}>{value}</Text>
                    </Link>
                ) : (
                    <Text textAlign={['left', 'right']}>{value}</Text>
                )}
            </Box>
            <Icon boxSize={5} color={'blue.400'}>
                {icon}
            </Icon>
        </Stack>
    );
};

export enum LinkType {
    None,
    Mail,
    Website,
    Phone,
    Location,
}
