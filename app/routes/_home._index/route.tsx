import { Grid, GridItem } from '@chakra-ui/react';
import type { Route } from '../_home._index/+types/route';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

export function meta({}: Route.MetaArgs) {
    return [{ title: 'Matt Macdonald Resume' }, { name: 'description', content: 'Matt Macdonald Resume' }];
}

export default function Home() {
    return (
        <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(5, 1fr)']} minH={'100vh'} data-print-grid>
            <GridItem bg={'sidePanelBg'} p={4} colSpan={[1, 1, 1, 1]} order={[2, 2, 2, 1]} data-print-sidebar>
                <Sidebar />
            </GridItem>
            <GridItem bg={'mainPanelBg'} p={4} colSpan={[1, 1, 1, 4]} order={[1, 1, 1, 2]} data-print-main>
                <Main />
            </GridItem>
        </Grid>
    );
}
