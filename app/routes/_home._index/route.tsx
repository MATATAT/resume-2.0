import { Grid, GridItem } from '@chakra-ui/react';
import type { Route } from '../_home._index/+types/route';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

export function meta({}: Route.MetaArgs) {
    return [{ title: 'Matt Macdonald Resume' }, { name: 'description', content: 'Matt Macdonald Resume' }];
}

export default function Home() {
    return (
        <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(5, 1fr)']} minH={'100vh'} bg={'gray.900'}>
            <GridItem bg={'gray.800'} color={'white'} p={4} colSpan={[1, 1, 1, 1]} order={[2, 2, 2, 1]}>
                <Sidebar />
            </GridItem>
            <GridItem bg={'gray.700'} p={4} colSpan={[1, 1, 1, 4]} order={[1, 1, 1, 2]}>
                <Main />
            </GridItem>
        </Grid>
    );
}
