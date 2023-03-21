import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Kurly from './routes/Kurly';
import Job from './routes/Job';


export default function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <AnimatePresence>
                <Routes>
                    <Route path='/Kurly' element={<Kurly />} />
                    <Route path='/Job' element={<Job />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
}