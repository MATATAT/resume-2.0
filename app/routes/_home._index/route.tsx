import type { Route } from '../_home._index/+types/route';

export function meta({}: Route.MetaArgs) {
    return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
    return <div>This is my home page.</div>;
}
