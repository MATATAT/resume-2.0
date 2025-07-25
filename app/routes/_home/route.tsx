import { Outlet } from 'react-router';
import { CONTENT_URL } from '~/config';
import { ResumeProvider } from '~/context/ResumeContext';
import type { Resume } from '~/dto/resume';
import type { Route } from './+types/route';
import { Header } from './Header';

export const links: Route.LinksFunction = () => [
    {
        rel: 'alternate',
        type: 'application/json',
        href: CONTENT_URL,
        title: 'Resume JSON',
    },
];

export async function clientLoader(): Promise<Resume> {
    const response = await fetch(CONTENT_URL);

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
