

export type Generation = {
    fuel: string
    perc: number
}

export type GetGeneration = {
    data: {
        from: string
        to: string
        generationmix: Generation[]
    }
}