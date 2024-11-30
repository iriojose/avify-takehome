import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider, useQuery} from 'react-query';
import { Main } from '../components/main';

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: jest.fn(),
}));

jest.mock('../components/generation-chart', () => ({
    GenerationChart: jest.fn(() => <div role='chart'>Mocked Generation Chart</div>),
}));

const queryClient = new QueryClient();

describe('Main Component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('muestra el spinner mientras los datos se cargan', () => {
        (useQuery as jest.Mock).mockReturnValue({
            data: null, 
            isLoading: true, 
        });

        render(
            <QueryClientProvider client={queryClient}>
                <Main />
            </QueryClientProvider>
        );

        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('muestra el gráfico después de cargar los datos', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            data: {
                data: {
                    generationmix: [
                        { fuel: 'wind', perc: 50 },
                        { fuel: 'solar', perc: 30 },
                    ],
                },
            },
            isLoading: false,
        });

        render(
            <QueryClientProvider client={queryClient}>
                <Main />
            </QueryClientProvider>
        );
        
        expect(screen.getByRole('chart')).toBeInTheDocument()
    });
});
