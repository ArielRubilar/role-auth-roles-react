import { Suspense } from 'react';

interface LazyModuleProps {
  Component: JSX.ElementType
  Loading?: JSX.ElementType
}

const DefaultLoading = () => 'Loading...';

export const LazyModule = ({ Component, Loading = DefaultLoading }: LazyModuleProps) => {
    return (
        <Suspense fallback={<Loading/>}><Component/></Suspense>
    );
};
