import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(async () => await import('../pages/Home.page'));
const RegisterPage = React.lazy(async () => await import('../pages/Register.page'));
const LoginPersonPage = React.lazy(async () => await import('../pages/LoginPerson.page'));
const LoginEntityPage = React.lazy(async () => await import('../pages/LoginEntity.page'));

function RoutingComponent() {
    return (
        <React.Suspense>
            <Routes>
                <Route path="/">
                    <Route
                        path=""
                        element={
                            <React.Suspense>
                                <HomePage />
                            </React.Suspense>
                        }>
                    </Route>
                    <Route
                        path='/register'
                        element={
                            <React.Suspense>
                                <RegisterPage />
                            </React.Suspense>
                        }
                    />  
                    <Route
                        path='/login-person'
                        element={
                            <React.Suspense>
                                <LoginPersonPage />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path='/login-entity'
                        element={
                            <React.Suspense>
                                <LoginEntityPage />
                            </React.Suspense>
                        }
                    />
                </Route>
            </Routes>
        </React.Suspense>
    );
}

export default RoutingComponent;
