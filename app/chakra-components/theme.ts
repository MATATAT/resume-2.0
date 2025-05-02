import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
    theme: {
        semanticTokens: {
            colors: {
                mainPanelBg: {
                    value: {
                        base: 'colors.gray.100',
                        _dark: 'colors.gray.800',
                    },
                },
                sidePanelBg: {
                    value: {
                        base: 'colors.gray.200',
                        _dark: 'colors.gray.700',
                    },
                },
                headerBg: {
                    value: {
                        base: 'colors.gray.400',
                        _dark: 'colors.black',
                    },
                },
                headerTitle: {
                    value: {
                        base: 'colors.white',
                        _dark: 'colors.white',
                    },
                },
                headerSubtitle: {
                    value: {
                        base: 'colors.teal.100',
                        _dark: 'colors.teal.400',
                    },
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
