import { Outlet } from 'react-router';
import { ResumeProvider } from '~/context/ResumeContext';
import type { Resume } from '~/dto/resume';
import type { Route } from './+types/route';
import { Header } from './Header';

const contentUrl = 'https://raw.githubusercontent.com/MATATAT/website-content/main/content.json';

export async function clientLoader(): Promise<Resume> {
    const response = await fetch(contentUrl);

    if (!response.ok) {
        throw new Error('Failed to fetch content');
    }

    return response.json();
}

export default function HomeLayout({ loaderData }: Route.ComponentProps) {
    return (
        <ResumeProvider value={loaderData}>
            <Header />
            <Outlet />
        </ResumeProvider>
    );
}
