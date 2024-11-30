import React, { Fragment } from 'react';
import { useQuery } from "react-query";
import { Loading } from './loading';
import { GetGeneration } from '../models/generation';
import { getGeneration } from '../services/energy';
import { GenerationChart } from './generation-chart';

const Main = () => {
    const { data, isLoading } = useQuery<GetGeneration>('generation', getGeneration)

    if(isLoading) {
        return (
            <div role="status" className="fullscreen-center">
                <Loading />
            </div>
        )
    }

    return (
        <div>
            {data && <GenerationChart generationmix={data.data.generationmix} />}
        </div>
    )
}

export { Main }