import { Grid, GridItem } from '@chakra-ui/react';
import type { Route } from '../_home._index/+types/route';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

export function meta({}: Route.MetaArgs) {
    return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
    return (
        <Grid templateColumns={'250px 1fr'} minH={'100vh'} bg={'gray.900'}>
            <GridItem bg={'gray.800'} color={'white'} p={4}>
                <Sidebar />
            </GridItem>
            <GridItem bg={'gray.700'} p={4}>
                <Main />
            </GridItem>
        </Grid>
    );
}
