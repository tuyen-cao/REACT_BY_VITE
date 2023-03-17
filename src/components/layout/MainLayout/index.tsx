import { Footer } from '../../common';
import Header from '../../header';

interface MainLayoutProps {
    children?: React.ReactElement;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
