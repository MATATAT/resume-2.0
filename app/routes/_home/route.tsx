import { Outlet } from 'react-router';
import { Header } from './Header';

export default function HomeLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
