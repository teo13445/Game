'use client'
import { Provider } from 'react-redux'
import {store} from '.';
import Header from '@/ui/Include/Header';
import Footer from '@/ui/Include/Footer';

export default function Providers({children}: { children: React.ReactNode }){
    return (
        <Provider store={store}>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </Provider>
    )
};
