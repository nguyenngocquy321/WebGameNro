import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '@/routes/routes.js';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import { ToastProvider } from '@contexts/ToastProvider';
import { ModalProvider } from '@contexts/ModalProvider';
import { ServiceProvider } from '@contexts/ServiceProvider';
import { FillterProductProvider } from '@contexts/FillterProductProvider';
function App() {
    return (
        <div className='App'>
            <FillterProductProvider>
                <ServiceProvider>
                    <ModalProvider>
                        <ToastProvider>
                            <BrowserRouter>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Routes>
                                        {routes.map(item => (
                                            <Route
                                                key={item.path}
                                                path={item.path}
                                                element={
                                                    <DefaultLayout>
                                                        <item.component />
                                                    </DefaultLayout>
                                                }
                                            />
                                        ))}
                                    </Routes>
                                </Suspense>
                            </BrowserRouter>
                        </ToastProvider>
                    </ModalProvider>
                </ServiceProvider>
            </FillterProductProvider>
        </div>
    );
}

export default App;
