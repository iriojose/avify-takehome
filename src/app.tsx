import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from './components/main';
import "./styles.css"

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Main />
        </QueryClientProvider>
    )
};

export { App }