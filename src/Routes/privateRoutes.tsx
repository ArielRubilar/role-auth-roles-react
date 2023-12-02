import { Navigate } from 'react-router-dom';
import { LazyModule } from './LazyModule';
import { lazy } from 'react';

export const allUrerRoutes = [
    {
        path: '/',
        element: (<Navigate to={'home'}/>),
    },
    {
        path: 'home',
        element: (<LazyModule Component= { lazy(async () => await import('../components/Home'))} />),
    },
    {
        path: 'all',
        element: (<LazyModule Component= { lazy(async () => await import('../components/All'))} />),
    },
];

export const adminRoutes = [
    {
        path: 'admin',
        element: (<LazyModule Component= { lazy(async () => await import('../components/Admin'))} />),
    },
];

export const personRoutes = [
    {
        path: 'person',
        element: (<LazyModule Component= { lazy(async () => await import('../components/Person'))} />),
    },
];
