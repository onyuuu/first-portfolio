import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Kurly from './routes/Kurly';
import Job from './routes/Job';


export default function Router() {
    return (
        <HashRouter>
            <AnimatePresence>
                <Routes>
                    <Route path='/Kurly' element={<Kurly />} />
                    <Route path='/Job' element={<Job />} />
                </Routes>
            </AnimatePresence>
        </HashRouter>
    );
}