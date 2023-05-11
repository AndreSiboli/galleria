import { ReactElement } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainTypes {
    children: ReactElement;
}

export default function MainContainer({ children }: MainTypes) {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
}
