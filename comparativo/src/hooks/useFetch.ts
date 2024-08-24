import { useEffect, useState } from "react"

interface IState {
    isLoading: boolean,
    data: any,
    isError: boolean,
    error: any
}

export default function useFetch(url: string) {

    const [state, setState] = useState({
        isLoading: false,
        data: null,
        isError: false,
        error: null
    } as IState);

    const setLoadingStat = () => {
        setState({
            isLoading: true,
            data: null,
            isError: false,
            error: null
        })
    };

    useEffect(() => {
        getFetch();
    }, [url])

    const getFetch = async () => {
        setLoadingStat();
        const resp = await fetch(url);
        await new Promise(resolve => setTimeout(resolve, 1500))

        if (!resp.ok) {
            setState({
                isLoading: false,
                data: null,
                isError: true,
                error: resp.statusText
            });
            return;
        }

        setState({
            isLoading: false,
            data: await resp.json(),
            isError: false,
            error: null
        });
    }

    return {
        isLoading: state.isLoading,
        data: state.data,
        isError: state.isError
    };
}
