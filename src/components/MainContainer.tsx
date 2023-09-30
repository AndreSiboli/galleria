import { ReactElement } from 'react';
import Navbar from './bars/Navbar';
import Footer from './bars/Footer';

interface MainTypes {
    children: ReactElement;
}

export default function MainContainer({ children }: MainTypes) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
